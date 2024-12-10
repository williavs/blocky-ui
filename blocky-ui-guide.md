# Getting Started with blocky-ui

Create a modern React application using blocky-ui, a playful design system with bold borders and crisp shadows.

## Quick Setup

```bash
# Create new Vite project
npm create vite@latest my-app -- --template react-ts
cd my-app

# Install dependencies
npm install blocky-ui react@^18.2.0 react-dom@^18.2.0 tailwindcss@^3.3.0

# Initialize Tailwind CSS
npx tailwindcss init -p
```

## Configuration

1. Update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/blocky-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        'space-grotesk': ['var(--font-space)'],
      },
    },
  },
}
```

2. Add fonts to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

## Example Implementation

Create a sample page showcasing:
- Navigation with theme toggle
- Hero section with CTA buttons
- Form controls (Input, TextArea, Checkbox)
- Cards and Tabs components
- Modal dialogs and Toasts
- Loading states and animations

Requirements:
- Use TypeScript for type safety
- Implement dark mode with ThemeProvider
- Follow responsive design principles
- Show component variants and states

Please help implement this while maintaining a clean, modern design that follows React best practices. 