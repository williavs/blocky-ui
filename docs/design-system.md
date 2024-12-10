# Blocky Design System

A playful, modern design system featuring bold borders, crisp shadows, and engaging interactions.

## Design Principles

### Visual Style
- **Borders**: 2px solid black borders for strong visual definition
- **Shadows**: 4px offset black shadows (8px for larger elements)
- **Corners**: Rounded corners (border-radius: 6px) for a friendly feel
- **Colors**: Green-focused palette with high contrast

### Color Palette
- **Primary**: Green
  - Background: rgb(240, 253, 244) // green-50
  - Interactive: rgb(187, 247, 208) // green-200
  - Text: rgb(20, 83, 45) // green-900
- **Neutral**
  - White: #FFFFFF
  - Black: #000000
- **Status Colors**
  - Success: green-100
  - Error: red-100
  - Warning: yellow-100

### Typography
- **Font Family**: System font stack
- **Font Sizes**:
  - xs: 0.75rem
  - sm: 0.875rem
  - base: 1rem
  - lg: 1.125rem
  - xl: 1.25rem

### Spacing
- Base unit: 4px
- Common spacing values: 4px, 8px, 16px, 24px, 32px

### Interactive States
- **Hover**: Subtle background color change
- **Focus**: Green ring with offset
- **Active**: Shadow collapse with 4px translation
- **Disabled**: 50% opacity

## Components

### Button
- Solid black border (2px)
- 4px black shadow
- Transforms on click for tactile feedback
- Variants: default, outline
- Sizes: sm, default, lg

### Input
- Clean white background
- Black border with shadow
- Green focus ring
- Error state with red border

### Card
- White background
- Black border
- 8px shadow offset
- Flexible padding based on content

### Badge
- Compact design
- 2px shadow
- Multiple variants for different states
- Small text with semibold weight

### Select
- Matches input styling
- Custom dropdown indicator
- Consistent with form elements

### Alert
- Full-width design
- Variant-based backgrounds
- Clear typography hierarchy
- Optional icon support

## Best Practices

1. **Consistency**
   - Maintain consistent spacing
   - Use defined shadow values
   - Keep border widths uniform

2. **Accessibility**
   - Maintain WCAG 2.1 AA contrast
   - Ensure keyboard navigation
   - Provide focus indicators

3. **Responsiveness**
   - Design mobile-first
   - Use flexible width units
   - Maintain touch targets

4. **Performance**
   - Utilize Tailwind's utility classes
   - Minimize component nesting
   - Keep variants focused