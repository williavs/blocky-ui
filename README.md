# Blocky UI

A playful, modern design system with bold borders and crisp shadows. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Playful, blocky design language
- 🌙 Dark mode support
- 🎯 Fully typed with TypeScript
- 📦 Tree-shakeable exports
- 🎭 Customizable with CSS variables
- 🚀 Built on modern tech stack

## Installation

```bash
# Using npm
npm install @williavs/blocky-ui

# Using yarn
yarn add @williavs/blocky-ui

# Using pnpm
pnpm add @williavs/blocky-ui
```

## Setup

1. Add the Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content paths
    "./node_modules/@williavs/blocky-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. Import the CSS variables in your global CSS file:

```css
@import '@williavs/blocky-ui/dist/style.css';
```

3. Wrap your app with the ThemeProvider:

```jsx
import { ThemeProvider } from '@williavs/blocky-ui';

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Usage

```jsx
import { Button, Card, TextArea } from '@williavs/blocky-ui';

function MyComponent() {
  return (
    <Card>
      <h2>Contact Form</h2>
      <TextArea
        label="Message"
        placeholder="Type your message..."
      />
      <Button>Send Message</Button>
    </Card>
  );
}
```

## Components

- **Buttons & Actions**
  - Button
  - Dropdown
  - ComboBox

- **Form Controls**
  - TextArea
  - Checkbox
  - Radio
  - Switch
  - Select

- **Feedback**
  - Progress
  - Spinner
  - Skeleton
  - Toast

- **Layout**
  - Card
  - Modal
  - Tabs
  - Navigation

- **Overlay**
  - Tooltip
  - Dropdown
  - Modal

## Customization

You can customize the appearance by modifying CSS variables:

```css
:root {
  --primary: rgb(187, 247, 208);
  --border: black;
  --shadow: rgba(0, 0, 0, 0.85);
  --shadow-hover: rgba(0, 0, 0, 1);
}

[data-theme="dark"] {
  --primary: rgb(134, 239, 172);
  --border: rgb(134, 239, 172);
  --shadow: rgba(240, 253, 244, 0.15);
  --shadow-hover: rgba(240, 253, 244, 0.25);
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © William Van Sickle 