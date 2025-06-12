# CFOPro Portfolio Website

A modern, professional portfolio website for CFO services, built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Lead Magnet System**: Integrated document download with lead capture
- **Microsoft Suite Integration**: Seamless integration with Microsoft Excel Online via Power Automate or Graph API
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Structured data and meta tags for better search visibility

## 📋 Lead Magnet Integration

The website includes a sophisticated lead magnet system that:

- ✅ Captures visitor information before document downloads
- ✅ Integrates with **Microsoft Excel Online** via Power Automate
- ✅ Supports multiple document selection
- ✅ Provides real-time form validation
- ✅ Tracks download analytics and user behavior
- ✅ Automatically sends data to your Microsoft 365 workspace

### Microsoft Integration Options

**Option 1: Power Automate (Recommended)**

- Easy setup with drag-and-drop interface
- No coding required
- Built-in error handling and retry logic
- Automatic email notifications
- Integration with Teams, Outlook, and other M365 apps

**Option 2: Microsoft Graph API (Advanced)**

- Direct Excel table updates
- More control over data flow
- Requires Azure AD app registration
- Suitable for complex enterprise scenarios

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Radix UI components
- **Integration**: Microsoft Power Automate / Graph API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfoliocfopro.git
cd portfoliocfopro
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env
```

4. Configure your Microsoft integration (see `MICROSOFT_SUITE_SETUP.md`)

5. Start the development server:

```bash
npm run dev
```

## 🔧 Configuration

### Microsoft Suite Setup

Follow the detailed setup guide in `MICROSOFT_SUITE_SETUP.md` to configure:

1. **Excel Online workbook** for lead storage
2. **Power Automate flow** for data processing
3. **Environment variables** for API endpoints
4. **Optional integrations** with Teams, Outlook, Power BI

### Environment Variables

Key environment variables (see `env.example`):

```env
# Power Automate URL (Option 1 - Recommended)
VITE_POWER_AUTOMATE_URL=your_power_automate_url

# Microsoft Graph API (Option 2 - Advanced)
VITE_MICROSOFT_TENANT_ID=your_tenant_id
VITE_MICROSOFT_CLIENT_ID=your_client_id
VITE_MICROSOFT_CLIENT_SECRET=your_client_secret
VITE_MICROSOFT_GRAPH_ENDPOINT=your_graph_endpoint
```

## 📊 Lead Tracking Features

- **Real-time data capture** to Excel Online
- **Advanced tracking** with user agent, referrer, and page URL
- **Document download analytics**
- **Form validation** with error handling
- **Success/failure notifications**
- **Batch document downloads**

## 🎨 Customization

The website is built with modularity in mind:

- **Lead Magnet Documents**: Update `src/data/lead-magnet.ts`
- **Form Fields**: Modify required fields in the configuration
- **Styling**: Customize TailwindCSS theme in `tailwind.config.js`
- **Components**: Modular React components in `src/components/`

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📈 Microsoft 365 Integration Benefits

✅ **Enterprise Security**: Azure AD authentication and compliance
✅ **Scalability**: Handle high-volume lead capture
✅ **Automation**: Trigger workflows, notifications, and follow-ups
✅ **Analytics**: Connect to Power BI for advanced reporting
✅ **Collaboration**: Share data across Teams, SharePoint, and Outlook
✅ **Compliance**: Meet enterprise data governance requirements

## 📞 Support

For setup assistance or customization requests, contact the development team.
