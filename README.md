# Modern Portfolio Website

A beautiful, modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design with dark theme
- ✨ Smooth scroll-based animations using Framer Motion
- 📱 Fully responsive design
- ♿ Accessible components
- 🎯 SEO optimized
- 🚀 Built with Next.js App Router
- 💎 TypeScript for type safety
- 🎭 Reusable StoryCard component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `components/hero-section.tsx` - Update name, tagline, and bio
- `lib/story-data.ts` - Add your own story cards with images, titles, and descriptions
- `components/contact-section.tsx` - Update contact information
- `app/layout.tsx` - Update metadata (title, description, keywords)

### Add More Story Cards

Edit `lib/story-data.ts` and add new objects to the `storyData` array:

\`\`\`typescript
{
  id: '5',
  image: '/your-image.jpg',
  title: 'Your Story Title',
  description: 'Your story description...',
}
\`\`\`

### Customize Colors

Edit `app/globals.css` to change the color scheme. The current theme uses:
- Deep navy blue background
- Teal accent color
- Soft white text

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── hero-section.tsx    # Landing section
│   ├── story-timeline.tsx  # Story section wrapper
│   ├── story-card.tsx      # Reusable story card with animations
│   ├── contact-section.tsx # Contact form and info
│   └── navigation.tsx      # Fixed navigation bar
└── lib/
    └── story-data.ts       # Story data source
\`\`\`

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Geist Font** - Modern typography

## Deployment

Deploy easily to Vercel:

\`\`\`bash
npm run build
\`\`\`

Then push to GitHub and connect to Vercel for automatic deployments.

## License

MIT License - feel free to use this template for your own portfolio!
