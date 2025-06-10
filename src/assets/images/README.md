# Images Directory

Place your business images in this directory. The following images are referenced in the landing page:

## Required Images

### Hero Section
- **File name**: `hero-business.jpg`
- **Recommended size**: 1200x800px
- **Description**: Main hero image showing business professionals or your office
- **Alt text**: "Business professionals collaborating"

### About Section
- **File name**: `team-collaboration.jpg`
- **Recommended size**: 800x600px
- **Description**: Team working together or office environment
- **Alt text**: "Team collaboration"

### Services Section
- Currently uses emoji icons (📊, 💰, 💻, 📈)
- You can replace these with custom SVG icons if preferred

### Team Members (if you add a team section)
- **File pattern**: `team-member-[name].jpg`
- **Recommended size**: 400x400px
- **Description**: Professional headshots of team members

## Image Guidelines

- **Format**: JPG or PNG
- **Quality**: High resolution, optimized for web
- **Aspect Ratios**:
  - Hero image: 3:2 ratio (landscape)
  - Team collaboration: 4:3 ratio
  - Team members: 1:1 ratio (square)
- **File size**: Keep under 1MB for optimal loading

## Fallback System

If your custom images are not found, the system will automatically fall back to placeholder images from Unsplash. This ensures the site always looks good even during development.

## Adding New Images

1. Add your image files to this directory
2. Update the image paths in the respective component files:
   - Hero: `src/components/sections/Hero.tsx`
   - About: `src/components/sections/About.tsx`
   - Services: `src/components/sections/Services.tsx`

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Consider using WebP format for better compression
- Add proper alt text for accessibility
- Test on different screen sizes to ensure proper display 