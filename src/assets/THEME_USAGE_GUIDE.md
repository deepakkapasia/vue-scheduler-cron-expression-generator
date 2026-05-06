# Vue Scheduler - Theme System Guide

## Overview

This project uses a modern, modular CSS-in-JS theme system built on **CSS Custom Properties (CSS Variables)** and **SCSS**. The theme is designed to be easily customizable and can be seamlessly integrated as a microservice into larger applications.

## File Structure

```
src/assets/
├── theme.scss              # Main theme configuration (SINGLE SOURCE OF TRUTH)
├── base.css               # CSS resets and normalizations
├── main.css               # Main import file that ties everything together
└── THEME_USAGE_GUIDE.md   # This file
```

## Quick Start

### 1. Import the Theme

The theme is automatically imported in `main.css`, which is then imported in `src/main.js`. No additional setup is needed—all components automatically have access to theme variables.

### 2. Using Theme Variables in Components

#### In Style Blocks
```vue
<template>
  <div class="scheduler-container">
    <h1>My Scheduler</h1>
  </div>
</template>

<style scoped>
.scheduler-container {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-4);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}
</style>
```

#### In SCSS Files
```scss
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-4);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-lg);
  }
}
```

## Available Theme Variables

### Colors

#### Primary Colors
```css
--color-primary              /* Main brand color */
--color-primary-light       /* Lighter variant */
--color-primary-lighter     /* Even lighter */
--color-primary-dark        /* Darker variant */
--color-primary-darker      /* Even darker */
```

#### Secondary & Accent Colors
Similar structure for:
- `--color-secondary-*`
- `--color-accent-*`

#### Semantic Colors
```css
--color-success      /* #10b981 */
--color-warning      /* #f59e0b */
--color-error        /* #ef4444 */
--color-info         /* #3b82f6 */
```

#### Grayscale
```css
--color-gray-50
--color-gray-100
--color-gray-200
--color-gray-300
--color-gray-400
--color-gray-500
--color-gray-600
--color-gray-700
--color-gray-800
--color-gray-900
```

### Backgrounds
```css
--bg-primary       /* Main background (white) */
--bg-secondary     /* Secondary background (light gray) */
--bg-tertiary      /* Tertiary background (medium gray) */
--bg-overlay       /* Semi-transparent overlay */
```

### Text Colors
```css
--text-primary     /* Main text color */
--text-secondary   /* Secondary text color */
--text-tertiary    /* Tertiary text color */
--text-inverse     /* Inverse text (white on dark) */
--text-muted       /* Muted text */
```

### Borders
```css
--border-color          /* Default border color */
--border-color-light    /* Light border */
--border-color-dark     /* Dark border */
--border-width          /* 1px */
--border-radius-sm      /* 4px */
--border-radius-md      /* 8px */
--border-radius-lg      /* 12px */
--border-radius-xl      /* 16px */
--border-radius-full    /* 9999px (fully rounded) */
```

### Shadows
```css
--shadow-sm       /* Small shadow */
--shadow-md       /* Medium shadow */
--shadow-lg       /* Large shadow */
--shadow-xl       /* Extra large shadow */
--shadow-2xl      /* 2x extra large shadow */
```

### Typography
```css
/* Font Families */
--font-family-base      /* Sans-serif stack */
--font-family-mono      /* Monospace stack */

/* Font Sizes */
--font-size-xs          /* 12px */
--font-size-sm          /* 14px */
--font-size-base        /* 16px */
--font-size-lg          /* 18px */
--font-size-xl          /* 20px */
--font-size-2xl         /* 24px */
--font-size-3xl         /* 30px */
--font-size-4xl         /* 36px */

/* Font Weights */
--font-weight-light       /* 300 */
--font-weight-normal      /* 400 */
--font-weight-medium      /* 500 */
--font-weight-semibold    /* 600 */
--font-weight-bold        /* 700 */
--font-weight-extrabold   /* 800 */

/* Line Heights */
--line-height-tight       /* 1.25 */
--line-height-normal      /* 1.5 */
--line-height-relaxed     /* 1.75 */
--line-height-loose       /* 2 */
```

### Spacing
```css
--space-0    /* 0 */
--space-1    /* 4px */
--space-2    /* 8px */
--space-3    /* 12px */
--space-4    /* 16px */
--space-5    /* 20px */
--space-6    /* 24px */
--space-8    /* 32px */
--space-10   /* 40px */
--space-12   /* 48px */
--space-16   /* 64px */
--space-20   /* 80px */
--space-24   /* 96px */
```

### Transitions
```css
--transition-fast       /* 150ms ease-in-out */
--transition-base       /* 200ms ease-in-out */
--transition-slow       /* 300ms ease-in-out */
```

### Z-Index
```css
--z-index-dropdown           /* 1000 */
--z-index-sticky             /* 1100 */
--z-index-fixed              /* 1200 */
--z-index-modal-backdrop     /* 1300 */
--z-index-modal              /* 1400 */
--z-index-popover            /* 1500 */
--z-index-tooltip            /* 1600 */
```

## Utility Classes

Pre-built utility classes are automatically available:

### Text Colors
```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text</p>
<p class="text-warning">Warning text</p>
<p class="text-error">Error text</p>
```

### Background Colors
```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-tertiary">Tertiary background</div>
```

### Padding
```html
<div class="p-2">Small padding</div>
<div class="p-4">Medium padding</div>
<div class="p-6">Large padding</div>
```

### Margins
```html
<div class="m-2">Small margin</div>
<div class="m-4">Medium margin</div>
<div class="m-6">Large margin</div>
```

### Borders & Radius
```html
<div class="border">Default border</div>
<div class="border-light">Light border</div>
<div class="rounded-md">Medium radius</div>
<div class="rounded-lg">Large radius</div>
```

### Shadows
```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
```

## Component Examples

### Button Component
```vue
<template>
  <button :class="`btn btn-${variant}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--text-inverse);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
}
</style>
```

### Card Component
```vue
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--bg-primary);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-md);
}
</style>
```

## Customizing the Theme

To customize the theme, edit the CSS variables in `src/assets/theme.scss` under the `:root` selector.

### Example: Changing Primary Color
```scss
:root {
  --color-primary: #your-color;
  --color-primary-light: #lighter-variant;
  --color-primary-dark: #darker-variant;
  /* ... update all related variants ... */
}
```

### Example: Dark Mode
Add a dark mode media query:
```scss
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--color-gray-900);
    --bg-secondary: var(--color-gray-800);
    --text-primary: var(--color-gray-50);
    --text-secondary: var(--color-gray-300);
    /* ... customize other variables ... */
  }
}
```

## Microservice Integration

To use this theme in another project:

1. **Copy the theme files:**
   ```bash
   cp src/assets/theme.scss ../other-project/src/assets/
   cp src/assets/base.css ../other-project/src/assets/
   ```

2. **Import in your main CSS file:**
   ```css
   @import "./assets/theme.scss";
   @import "./assets/base.css";
   ```

3. **Use variables in your components:**
   ```vue
   <style scoped>
   .my-component {
     background: var(--bg-primary);
     color: var(--text-primary);
   }
   </style>
   ```

## Best Practices

1. **Always use theme variables** - Never hardcode colors or sizes
2. **Maintain consistency** - Use the predefined spacing and typography scales
3. **Follow naming conventions** - Use semantic variable names like `--color-primary` instead of `--color-blue`
4. **Test in context** - Always test components with the theme applied
5. **Document custom variables** - If adding new variables, document them in this guide
6. **Version control** - Keep theme changes in git history for easy rollbacks

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (macOS 9.1+, iOS 9.3+)
- IE 11: ❌ Not supported (CSS variables required)

## References

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Variables Spec](https://www.w3.org/TR/css-variables-1/)
- [Tailwind CSS (inspiration)](https://tailwindcss.com/)
