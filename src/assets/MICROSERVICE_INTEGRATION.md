# Theme System - Microservice Integration Guide

## Overview

The Vue Scheduler theme system is designed as a standalone, reusable module that can be easily integrated into other projects as a microservice. The theme uses modern CSS Custom Properties (CSS Variables) and SCSS, making it compatible with any web framework or library.

## Files Included

```
src/assets/
├── theme.scss              # Main theme configuration (SCSS)
├── base.css               # CSS resets and normalizations
├── main.css               # Primary import file
└── THEME_USAGE_GUIDE.md   # Detailed usage documentation

src/utils/
└── themeConfig.js         # JavaScript theme configuration module
```

## Quick Start: Integration Steps

### Step 1: Copy Theme Files to Your Project

```bash
# Copy the entire assets directory or specific files
cp -r vue-scheduler/src/assets/theme.scss your-project/src/assets/
cp -r vue-scheduler/src/assets/base.css your-project/src/assets/
cp -r vue-scheduler/src/utils/themeConfig.js your-project/src/utils/
```

### Step 2: Import Theme in Your Main CSS/SCSS File

In your project's main CSS file:

```css
/* main.css or main.scss */
@import "./assets/theme.scss";
@import "./assets/base.css";

/* Your project styles */
```

Or in your main JavaScript file:

```js
// main.js
import './assets/theme.scss'
import './assets/base.css'
```

### Step 3: Use Theme Variables in Your Components

#### In Vue Components
```vue
<template>
  <div class="my-component">
    <h1>My Component</h1>
    <p>Using theme variables</p>
  </div>
</template>

<style scoped>
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-4);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}
</style>
```

#### In React Components
```jsx
const MyComponent = () => {
  return (
    <div style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      padding: 'var(--space-4)',
      borderRadius: 'var(--border-radius-lg)',
      boxShadow: 'var(--shadow-md)'
    }}>
      My Component
    </div>
  )
}
```

#### In Angular Components
```ts
@Component({
  selector: 'app-my-component',
  template: `<div class="my-component">My Component</div>`,
  styles: [`
    .my-component {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      padding: var(--space-4);
    }
  `]
})
export class MyComponent {}
```

### Step 4: (Optional) Import JavaScript Configuration

If you need programmatic access to theme values in JavaScript:

```js
import { colors, spacing, typography } from '@/utils/themeConfig'

export default {
  data() {
    return {
      primaryColor: colors.primary,
      spacing: spacing
    }
  }
}
```

## Framework-Specific Integration

### Vue 2

```js
// main.js
import Vue from 'vue'
import './assets/theme.scss'
import './assets/base.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### Vue 3

```js
// main.ts
import { createApp } from 'vue'
import './assets/theme.scss'
import './assets/base.css'
import App from './App.vue'

createApp(App).mount('#app')
```

### React (Create React App)

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/theme.scss'
import './assets/base.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

### React (Vite)

```ts
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/theme.scss'
import './assets/base.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Angular

```ts
// styles.scss
@import 'assets/theme.scss';
@import 'assets/base.css';

/* Global styles */
```

### Next.js

```scss
// pages/_app.tsx or pages/_app.js
import '../assets/theme.scss'
import '../assets/base.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

## Customizing the Theme for Your Brand

### Method 1: Override Variables in Your Project

Create a custom theme file in your project and import it before the main theme:

```scss
// src/assets/custom-theme.scss
:root {
  /* Override primary color */
  --color-primary: #your-brand-color;
  --color-primary-light: #lighter-variant;
  --color-primary-dark: #darker-variant;
  --color-primary-darker: #darkest-variant;

  /* Override other variables as needed */
  --color-secondary: #your-secondary;
  --color-accent: #your-accent;
}
```

Then import it first:

```css
/* main.css */
@import "./assets/custom-theme.scss";
@import "./assets/theme.scss";
@import "./assets/base.css";
```

### Method 2: CSS Override at Runtime

Add a `<style>` tag in your HTML or dynamically update CSS variables:

```html
<style>
  :root {
    --color-primary: #your-brand-color;
    --color-primary-light: #lighter-variant;
    --color-primary-dark: #darker-variant;
  }
</style>
```

Or in JavaScript:

```js
const root = document.documentElement;
root.style.setProperty('--color-primary', '#your-brand-color');
root.style.setProperty('--color-primary-light', '#lighter-variant');
root.style.setProperty('--color-primary-dark', '#darker-variant');
```

### Method 3: Extend with SCSS

```scss
// src/assets/my-custom-theme.scss
@import './theme.scss';

:root {
  /* Custom color scheme */
  --color-primary: #667eea;
  --color-primary-light: #7c8ff2;
  
  /* Custom brand fonts */
  --font-family-base: 'Inter', 'Segoe UI', sans-serif;
  
  /* Custom spacing scale */
  --space-4: 1.2rem;
}
```

## Adding Custom Variables

To add project-specific variables while maintaining theme compatibility:

```scss
// In your custom theme file or component styles
:root {
  /* Vue Scheduler theme variables (already imported) */
  
  /* Your custom variables */
  --color-custom-brand: #123456;
  --size-card-width: 300px;
  --animation-duration-custom: 500ms;
}
```

## Theme Variables Reference

### Color System
- Primary colors: `--color-primary`, `--color-primary-light`, `--color-primary-dark`, etc.
- Semantic colors: `--color-success`, `--color-warning`, `--color-error`, `--color-info`
- Grayscale: `--color-gray-50` through `--color-gray-900`

### Spacing Scale
- `--space-0` through `--space-24` (in 4px increments)

### Typography
- Font families: `--font-family-base`, `--font-family-mono`
- Font sizes: `--font-size-xs` through `--font-size-4xl`
- Font weights: `--font-weight-light` through `--font-weight-extrabold`

### Borders & Radius
- `--border-color`, `--border-width`
- `--border-radius-sm` through `--border-radius-full`

### Shadows
- `--shadow-sm` through `--shadow-2xl`

### Transitions
- `--transition-fast`, `--transition-base`, `--transition-slow`

### Z-Index
- `--z-index-dropdown` through `--z-index-tooltip`

For complete reference, see [THEME_USAGE_GUIDE.md](THEME_USAGE_GUIDE.md)

## Troubleshooting

### Issue: CSS Variables Not Working

**Solution:** Ensure:
1. Browser supports CSS Custom Properties (IE 11 not supported)
2. Theme files are imported before other styles
3. You're using `var(--variable-name)` syntax

### Issue: Colors Not Changing

**Solution:** Check:
1. CSS specificity - inline styles override variables
2. Variable is correctly spelled
3. File import order in main CSS/SCSS
4. Browser DevTools to verify variables are set

### Issue: SCSS Not Compiling

**Solution:**
1. Ensure SASS/SCSS loader is configured in your build tool
2. Check for syntax errors in `theme.scss`
3. Verify import paths are correct

## Performance Considerations

- CSS Variables have minimal performance impact
- No JavaScript overhead for styling
- Smaller bundle size than other CSS-in-JS solutions
- Fast theme switching possible with runtime CSS changes

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full (43+) |
| Firefox | ✅ Full (31+) |
| Safari | ✅ Full (9.1+) |
| IE 11 | ❌ Not supported |
| Mobile Browsers | ✅ Full |

## Best Practices for Integration

1. **Always import theme first** - Load theme before component styles
2. **Use semantic names** - Reference colors by meaning, not appearance
3. **Maintain consistency** - Use spacing/typography scales consistently
4. **Document customizations** - Note any theme variable overrides
5. **Test across browsers** - Verify CSS variables work in target browsers
6. **Use utility classes** - Pre-built classes available for common patterns
7. **Version control** - Track theme changes in git history

## Updating the Theme

When Vue Scheduler theme updates are released:

1. Download updated `theme.scss` and `base.css`
2. Review changelog for breaking changes
3. Test your customizations still work
4. Update files in your project
5. Run your test suite

## Support & Contributions

For issues or contributions related to the theme system:
- Check [THEME_USAGE_GUIDE.md](THEME_USAGE_GUIDE.md) for detailed documentation
- Review examples in [ThemeExample.vue](../components/ThemeExample.vue)
- Test with [themeConfig.js](../utils/themeConfig.js) for programmatic usage

## License

The Vue Scheduler theme system is released under the same license as the main project.

---

**Last Updated:** 2026-05-06
**Theme Version:** 1.0.0
**Compatibility:** Vue 2.7+, Vue 3, React, Angular, any CSS-based framework
