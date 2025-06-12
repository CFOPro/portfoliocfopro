# Microsoft Suite Integration Setup Guide

Esta guía te ayudará a configurar la integración con Microsoft Suite (Excel Online) para capturar leads de la sección de descarga de documentos.

## Opciones de Integración

Tienes **dos opciones** para la integración:

1. **Power Automate (Recomendado)** - Más fácil de configurar
2. **Microsoft Graph API** - Más control, pero requiere configuración avanzada

---

## OPCIÓN 1: Power Automate (Microsoft Flow) - RECOMENDADO

### Paso 1: Crear el Excel Online

1. Ve a [Office 365](https://office.com) y accede con tu cuenta empresarial
2. Abre **Excel Online**
3. Crea un nuevo libro llamado "CFOPro Leads"
4. En la Hoja1, crea los siguientes headers en la fila 1:

   - **A1**: `Timestamp`
   - **B1**: `Email`
   - **C1**: `First Name`
   - **D1**: `Last Name`
   - **E1**: `Company`
   - **F1**: `Documents`
   - **G1**: `Source`
   - **H1**: `User Agent`
   - **I1**: `Referrer`
   - **J1**: `Page URL`

5. Guarda el archivo en tu **OneDrive** o **SharePoint**

### Paso 2: Crear Power Automate Flow

1. Ve a [Power Automate](https://make.powerautomate.com)
2. Haz clic en **"+ Create"** > **"Automated cloud flow"**
3. Nombra tu flow: "CFOPro Lead Capture"
4. Busca y selecciona el trigger: **"When a HTTP request is received"**
5. Haz clic en **"Create"**

### Paso 3: Configurar el Trigger HTTP

1. En el trigger "When a HTTP request is received", haz clic en **"Show advanced options"**
2. En **"Request Body JSON Schema"**, pega este schema:

```json
{
  "type": "object",
  "properties": {
    "timestamp": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "company": {
      "type": "string"
    },
    "documents": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "userAgent": {
      "type": "string"
    },
    "referrer": {
      "type": "string"
    },
    "pageUrl": {
      "type": "string"
    }
  }
}
```

### Paso 4: Agregar Acción de Excel

1. Haz clic en **"+ New step"**
2. Busca y selecciona **"Excel Online (Business)"**
3. Selecciona la acción **"Add a row into a table"**
4. Configura la conexión:
   - **Location**: OneDrive for Business (o SharePoint si guardaste ahí)
   - **Document Library**: OneDrive (o tu site de SharePoint)
   - **File**: Selecciona tu archivo "CFOPro Leads.xlsx"
   - **Table**: Selecciona "Table1" (o crea una tabla si no aparece)

### Paso 5: Mapear los Campos

En la acción de Excel, mapea los campos:

- **Timestamp**: `timestamp` (contenido dinámico)
- **Email**: `email` (contenido dinámico)
- **First Name**: `firstName` (contenido dinámico)
- **Last Name**: `lastName` (contenido dinámico)
- **Company**: `company` (contenido dinámico)
- **Documents**: `documents` (contenido dinámico)
- **Source**: `source` (contenido dinámico)
- **User Agent**: `userAgent` (contenido dinámico)
- **Referrer**: `referrer` (contenido dinámico)
- **Page URL**: `pageUrl` (contenido dinámico)

### Paso 6: Agregar Respuesta HTTP

1. Haz clic en **"+ New step"**
2. Busca y selecciona **"Response"**
3. Configura la respuesta:
   - **Status Code**: `200`
   - **Headers**:
     - Nombre: `Content-Type`, Valor: `application/json`
     - Nombre: `Access-Control-Allow-Origin`, Valor: `*`
   - **Body**:

```json
{
  "success": true,
  "message": "Lead captured successfully"
}
```

### Paso 7: Guardar y Probar

1. Haz clic en **"Save"**
2. Copia la **URL HTTP POST** que aparece en el trigger
3. Esta URL la necesitarás para el archivo `.env`

### Paso 8: Configurar Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto:

```env
# Microsoft Power Automate Configuration
VITE_POWER_AUTOMATE_URL=tu_url_de_power_automate_aqui
```

Ejemplo:

```env
VITE_POWER_AUTOMATE_URL=https://prod-123.westus.logic.azure.com:443/workflows/abc123.../triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xyz...
```

---

## OPCIÓN 2: Microsoft Graph API (Avanzado)

### Paso 1: Registro de Aplicación en Azure AD

1. Ve a [Azure Portal](https://portal.azure.com)
2. Navega a **Azure Active Directory** > **App registrations**
3. Haz clic en **"+ New registration"**
4. Configura la aplicación:
   - **Name**: "CFOPro Lead Capture"
   - **Supported account types**: "Accounts in this organizational directory only"
   - **Redirect URI**: Deja en blanco por ahora
5. Haz clic en **"Register"**

### Paso 2: Configurar Permisos

1. En tu aplicación registrada, ve a **"API permissions"**
2. Haz clic en **"+ Add a permission"**
3. Selecciona **"Microsoft Graph"**
4. Selecciona **"Application permissions"**
5. Busca y selecciona: `Files.ReadWrite.All`
6. Haz clic en **"Add permissions"**
7. Haz clic en **"Grant admin consent"**

### Paso 3: Crear Client Secret

1. Ve a **"Certificates & secrets"**
2. Haz clic en **"+ New client secret"**
3. Descripción: "CFOPro API Secret"
4. Expires: 24 months
5. Haz clic en **"Add"**
6. **IMPORTANTE**: Copia el valor del secret inmediatamente

### Paso 4: Configurar Excel con Graph API

1. Crea tu archivo Excel como en la Opción 1
2. Guárdalo en OneDrive for Business
3. Convierte el rango de datos en una tabla:
   - Selecciona los headers (A1:J1)
   - Ve a **Insert** > **Table**
   - Asegúrate de que "My table has headers" esté marcado
   - Nombra la tabla como "LeadsTable"

### Paso 5: Obtener IDs necesarios

Necesitarás estos IDs:

- **Tenant ID**: Lo encuentras en Azure AD > Overview
- **Application (Client) ID**: En tu app registration > Overview
- **Site ID**: Sitio de SharePoint donde está el archivo
- **Drive ID**: ID del OneDrive donde está el archivo
- **File ID**: ID del archivo Excel

### Paso 6: Variables de Entorno para Graph API

```env
# Microsoft Graph API Configuration
VITE_MICROSOFT_TENANT_ID=tu_tenant_id
VITE_MICROSOFT_CLIENT_ID=tu_client_id
VITE_MICROSOFT_CLIENT_SECRET=tu_client_secret
VITE_MICROSOFT_GRAPH_ENDPOINT=https://graph.microsoft.com/v1.0/sites/{site-id}/drives/{drive-id}/items/{file-id}/workbook/tables/LeadsTable/rows
```

---

## Probar la Integración

1. Ejecuta tu aplicación: `npm run dev`
2. Ve a la sección "Free Financial Resources"
3. Haz clic en "Download Free Resources"
4. Completa el formulario y envía
5. Verifica que los datos aparezcan en tu Excel

---

## Configuración Adicional

### Agregar Notificaciones por Email

Para recibir notificaciones cuando se capture un lead:

1. En tu **Power Automate Flow**, agrega una nueva acción después de Excel
2. Busca **"Outlook"** > **"Send an email (V2)"**
3. Configura:
   - **To**: tu email
   - **Subject**: `Nuevo Lead Capturado - CFOPro`
   - **Body**: Usa contenido dinámico para incluir los datos del lead

### Integrar con Microsoft Teams

1. Agrega acción **"Microsoft Teams"** > **"Post a message in a chat or channel"**
2. Selecciona tu team y canal
3. Configura el mensaje con los datos del lead

### Crear Dashboard en Power BI

1. Conecta Power BI a tu archivo Excel
2. Crea visualizaciones de los leads capturados
3. Configura actualización automática

---

## Troubleshooting

### Error: "Configuration error"

- Verifica que la URL de Power Automate esté correcta en `.env`
- Asegúrate de que el Flow esté activado ("turned on")

### Error: "Flow not found"

- Confirma que el Flow esté publicado y activo
- Verifica que la URL copiada esté completa

### Los datos no aparecen en Excel

- Verifica que el archivo Excel tenga una tabla configurada
- Asegúrate de que los nombres de columna coincidan
- Revisa el historial de ejecución en Power Automate

### Error de CORS

- Agrega los headers CORS en la respuesta del Flow
- Verifica que `Access-Control-Allow-Origin` esté configurado

---

## Seguridad

- El Flow solo acepta requests POST con datos JSON
- Incluye validación de datos en Power Automate
- Los datos se almacenan en tu tenant de Microsoft 365
- Usa HTTPS para todas las comunicaciones

---

## Próximos Pasos

1. **Configurar automatización de seguimiento** con Power Automate
2. **Integrar with Dynamics 365** para CRM completo
3. **Crear alertas en Teams** para notificaciones inmediatas
4. **Configurar Power BI** para analytics avanzados
5. **Implementar Logic Apps** para workflows complejos

---

## Beneficios vs Google Sheets

✅ **Integración nativa** con el ecosistema Microsoft 365
✅ **Mejor seguridad** con Azure AD
✅ **Escalabilidad** para grandes volúmenes de datos
✅ **Automatización avanzada** con Power Platform
✅ **Compliance** con estándares empresariales
✅ **Colaboración** integrada con Teams y Outlook
