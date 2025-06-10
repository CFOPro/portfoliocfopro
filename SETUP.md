# CFO Pro Business Landing Page - Configuración

## ✅ ¿Qué hemos configurado?

### 🎨 **Tailwind CSS**
- ✅ Instalado y configurado correctamente
- ✅ Sistema de colores profesional (azul y gris)
- ✅ Tipografía Inter de Google Fonts
- ✅ Clases responsive para móviles, tablets y desktop
- ✅ Animaciones y transiciones suaves

### 🏗️ **Arquitectura del Proyecto**
```
src/
├── components/
│   ├── ui/            # Componentes reutilizables (Button, Container)
│   ├── layout/        # Header y Footer
│   └── sections/      # Secciones de la landing page
├── core/
│   ├── types/         # Tipos TypeScript
│   ├── constants/     # Constantes de la aplicación
│   └── utils/         # Funciones utilitarias
├── data/              # Datos mock y contenido
└── assets/
    └── images/        # Carpeta para tus imágenes
```

### 📸 **Sistema de Imágenes**
La carpeta `src/assets/images/` está lista para tus imágenes:

#### **Imágenes requeridas:**
- `hero-business.jpg` (1200x800px) - Imagen principal del hero
- `team-collaboration.jpg` (800x600px) - Imagen de la sección About

#### **Sistema de fallback:**
Si no tienes las imágenes todavía, el sistema automáticamente usa imágenes de placeholder de Unsplash.

## 🚀 **Cómo usar**

### **1. Añadir tus imágenes**
1. Coloca tus imágenes en `src/assets/images/`
2. Usa los nombres exactos mencionados arriba
3. Formatos recomendados: JPG o PNG
4. Tamaño máximo: 1MB por imagen

### **2. Personalizar contenido**
Edita el archivo `src/data/index.ts` para cambiar:
- Textos del hero
- Información de servicios
- Datos de contacto
- Información de la empresa

### **3. Personalizar colores**
En `tailwind.config.js` puedes cambiar los colores:
```javascript
colors: {
  primary: {
    // Cambia estos valores por tus colores de marca
    600: '#2563eb', // Color principal
    700: '#1d4ed8', // Color hover
  }
}
```

### **4. Personalizar tipografía**
La fuente Inter está configurada automáticamente. Para cambiarla:
1. Edita `src/index.css` línea 1 con una nueva fuente de Google Fonts
2. Actualiza `tailwind.config.js` en la sección fontFamily

## 🎯 **Secciones de la Landing Page**

### **Hero Section**
- Título principal y subtítulo
- Descripción del negocio
- Botones de call-to-action
- Imagen de fondo

### **About Section**
- Historia de la empresa
- Valores y misión
- Estadísticas del negocio
- Imagen del equipo

### **Services Section**
- 4 servicios principales
- Iconos descriptivos
- Lista de características
- Cards con hover effects

### **Contact Section**
- Formulario de contacto funcional
- Información de contacto
- Campos: nombre, email, mensaje
- Validación básica

## 🎨 **Colores del Tema**

### **Principales:**
- **Azul primario:** `#2563eb` (botones, links, acentos)
- **Azul hover:** `#1d4ed8` (estados hover)

### **Grises:**
- **Texto principal:** `#111827` (títulos)
- **Texto secundario:** `#4b5563` (párrafos)
- **Fondo claro:** `#f9fafb` (secciones alternadas)
- **Bordes:** `#e5e7eb` (formularios, cards)

## 📱 **Responsive Design**

El diseño es completamente responsive:
- **Mobile:** 320px - 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px+

## 🔧 **Comandos útiles**

```bash
# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Linting
npm run lint
```

## 📝 **Próximos pasos**

1. **Remueve el test box rojo** del Hero cuando confirmes que Tailwind funciona
2. **Añade tus imágenes** en la carpeta correspondiente
3. **Personaliza el contenido** en `src/data/index.ts`
4. **Ajusta los colores** según tu marca
5. **Testa en diferentes dispositivos**

## 🆘 **Solución de problemas**

### **Si Tailwind no funciona:**
1. Verifica que veas el recuadro rojo en la parte superior
2. Si no lo ves, ejecuta: `npm install` y `npm run dev`
3. Asegúrate de que los archivos `tailwind.config.js` y `postcss.config.js` existen

### **Si las imágenes no cargan:**
1. Verifica que estén en `src/assets/images/`
2. Usa los nombres exactos especificados
3. Las imágenes de fallback se cargarán automáticamente

¡Tu landing page empresarial está lista para personalizar! 🎉 