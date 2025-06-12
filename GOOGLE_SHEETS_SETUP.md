# Google Sheets Integration Setup Guide

Esta guía te ayudará a configurar la integración con Google Sheets para capturar leads de la sección de descarga de documentos.

## 1. Crear Google Spreadsheet

1. Ve a [Google Sheets](https://sheets.google.com) y crea un nuevo spreadsheet
2. Nombra tu spreadsheet (ej: "CFOPro Leads")
3. En la primera hoja, crea los siguientes headers en la fila 1:

   - A1: `Timestamp`
   - B1: `Email`
   - C1: `First Name`
   - D1: `Last Name`
   - E1: `Company`
   - F1: `Documents`
   - G1: `Source`

4. Copia el ID del spreadsheet desde la URL:
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
   ```

## 2. Configurar Google Apps Script

1. En tu spreadsheet, ve a **Extensions > Apps Script**
2. Borra el código por defecto y pega el siguiente código:

```javascript
/**
 * Google Apps Script para recibir leads del sitio web CFOPro
 * Este script maneja las solicitudes POST desde el formulario de lead magnet
 */

function doPost(e) {
  try {
    // Configuración del spreadsheet
    const SPREADSHEET_ID = 'TU_SPREADSHEET_ID_AQUI'; // Reemplaza con tu ID
    const SHEET_NAME = 'Leads'; // Nombre de la hoja donde guardar los datos

    // Obtener datos del request
    const data = JSON.parse(e.postData.contents);

    // Validar datos requeridos
    if (!data.email) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: 'Email es requerido',
        }),
      )
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        });
    }

    // Obtener el spreadsheet y la hoja
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Crear la hoja si no existe
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Agregar headers
      sheet
        .getRange(1, 1, 1, 7)
        .setValues([
          [
            'Timestamp',
            'Email',
            'First Name',
            'Last Name',
            'Company',
            'Documents',
            'Source',
          ],
        ]);
    }

    // Preparar datos para insertar
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.firstName || '',
      data.lastName || '',
      data.company || '',
      data.documents || '',
      data.source || 'Website Lead Magnet',
    ];

    // Insertar nueva fila
    sheet.appendRow(rowData);

    // Respuesta exitosa
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Lead guardado exitosamente',
      }),
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
  } catch (error) {
    console.error('Error en doPost:', error);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: 'Error interno del servidor: ' + error.toString(),
      }),
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
  }
}

// Manejar requests OPTIONS para CORS
function doOptions() {
  return ContentService.createTextOutput('').setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
}

// Función de prueba (opcional)
function testFunction() {
  const testData = {
    timestamp: new Date().toISOString(),
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Test Company',
    documents: 'financial-health-checklist, cfo-guide',
    source: 'Test',
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  console.log(result.getContent());
}
```

3. **IMPORTANTE**: Reemplaza `TU_SPREADSHEET_ID_AQUI` con el ID real de tu spreadsheet
4. Guarda el proyecto con un nombre (ej: "CFOPro Lead Capture")

## 3. Desplegar el Web App

1. En Apps Script, haz clic en **Deploy > New deployment**
2. Selecciona el tipo: **Web app**
3. Configuración:
   - **Description**: "CFOPro Lead Magnet Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Haz clic en **Deploy**
5. **Copia la URL del Web App** que se genera (la necesitarás para el .env)

## 4. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto con:

```env
# Google Sheets Configuration
VITE_GOOGLE_SHEETS_ID=tu_spreadsheet_id_aqui
VITE_GOOGLE_SHEETS_WEB_APP_URL=tu_web_app_url_aqui
```

Ejemplo:

```env
VITE_GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXXXXXXXXXXX/exec
```

## 5. Probar la Integración

1. Ejecuta tu aplicación: `npm run dev`
2. Ve a la sección "Free Financial Resources"
3. Haz clic en "Download Free Resources"
4. Completa el formulario y envía
5. Verifica que los datos aparezcan en tu Google Sheet

## 6. Personalizar Campos (Opcional)

Si quieres cambiar los campos requeridos en el formulario, edita el archivo:
`src/data/lead-magnet.ts`

```typescript
formConfig: {
  requiredFields: ['email', 'firstName', 'company'], // Ajusta según necesites
  privacyPolicyUrl: '/privacy-policy',
  termsOfServiceUrl: '/terms-of-service'
}
```

## 7. Añadir Documentos

Para agregar más documentos descargables:

1. Sube los archivos a `public/assets/documents/`
2. Actualiza el array `downloadableDocuments` en `src/data/lead-magnet.ts`

## Troubleshooting

### Error: "Configuration error"

- Verifica que las variables de entorno estén configuradas correctamente
- Asegúrate de que el archivo `.env` esté en la raíz del proyecto

### Error: "Submission failed"

- Verifica que el Apps Script esté desplegado como Web App
- Confirma que el acceso esté configurado como "Anyone"
- Revisa los logs en Google Apps Script

### Los leads no aparecen en Google Sheets

- Verifica el SPREADSHEET_ID en el código de Apps Script
- Asegúrate de que la hoja se llame "Leads" o actualiza el SHEET_NAME
- Revisa los logs de ejecución en Apps Script

## Seguridad

- El Web App solo acepta requests POST con datos JSON
- Incluye validación de email
- Implementa CORS para requests desde tu dominio
- Los datos se almacenan en tu Google Sheet privado

## Próximos Pasos

1. Configurar notificaciones por email cuando se capture un lead
2. Integrar con servicios de email marketing (Mailchimp, etc.)
3. Crear dashboards para analizar los datos de leads
4. Implementar seguimiento automático por email
