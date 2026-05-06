# Theme System - Quick Reference Card

## Cheat Sheet for Developers

### Most Used Variables

#### Colors
```css
--color-primary           /* #6366f1 - Main brand color */
--color-primary-dark      /* Darker variant for hover */
--color-success           /* #10b981 - Success/positive */
--color-warning           /* #f59e0b - Warning/caution */
--color-error             /* #ef4444 - Error/danger */
--color-gray-200          /* Light borders/dividers */
--color-gray-600          /* Secondary text */
```

#### Backgrounds
```css
--bg-primary              /* White - Main background */
--bg-secondary            /* Light gray - Secondary bg */
--bg-tertiary             /* Medium gray - Tertiary bg */
```

#### Text
```css
--text-primary            /* Main text color */
--text-secondary          /* Secondary/reduced emphasis */
--text-muted              /* Very light text */
--text-inverse            /* White text on dark bg */
```

#### Spacing (for padding/margin/gap)
```css
--space-2                 /* 8px */
--space-3                 /* 12px */
--space-4                 /* 16px */
--space-6                 /* 24px */
--space-8                 /* 32px */
```

#### Typography
```css
--font-size-base          /* 16px - Default text */
--font-size-lg            /* 18px - Slightly larger */
--font-size-xl            /* 20px - Medium heading */
--font-size-2xl           /* 24px - Large heading */
--font-weight-medium      /* 500 - Bold text */
--font-weight-semibold    /* 600 - Stronger bold */
--font-weight-bold        /* 700 - Extra bold */
```

#### Borders & Radius
```css
--border-radius-md        /* 8px - Default rounded */
--border-radius-lg        /* 12px - More rounded */
--border-color            /* Light gray borders */
--shadow-md               /* Subtle shadow */
--shadow-lg               /* Stronger shadow */
```

#### Animations
```css
--transition-base         /* 200ms ease-in-out */
```

---

## Common Patterns

### Basic Button
```vue
<button class="btn btn-primary">Click</button>

<style scoped>
.btn {
  background: var(--color-primary);
  color: var(--text-inverse);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--border-radius-md);
  border: none;
  cursor: pointer;
}
.btn:hover {
  background: var(--color-primary-dark);
}
</style>
```

### Card Component
```vue
<div class="card">Content</div>

<style scoped>
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
}
.card:hover {
  box-shadow: var(--shadow-lg);
}
</style>
```

### Form Input
```vue
<input type="text" placeholder="Search...">

<style scoped>
input {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--font-size-base);
}
input:focus {
  outline: none;
  border-color: var(--color-primary);
}
</style>
```

### Flex Layout with Spacing
```vue
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<style scoped>
.flex-container {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6);
}
</style>
```

---

## Utility Classes (Ready to Use)

### Text Colors
```html
<p class="text-primary">Main text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success message</p>
<p class="text-warning">Warning message</p>
<p class="text-error">Error message</p>
```

### Backgrounds
```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-tertiary">Tertiary background</div>
```

### Padding
```html
<div class="p-2">Small padding (8px)</div>
<div class="p-4">Medium padding (16px)</div>
<div class="p-6">Large padding (24px)</div>
```

### Borders & Shadows
```html
<div class="border rounded-md shadow-md">Card style</div>
<div class="border-light rounded-lg shadow-lg">Enhanced card</div>
```

---

## Variable Categories & Full List

### Colors (50+ options)
- `--color-primary-*` (5 variants)
- `--color-secondary-*` (5 variants)
- `--color-accent-*` (5 variants)
- `--color-success-*` (3 variants)
- `--color-warning-*` (3 variants)
- `--color-error-*` (3 variants)
- `--color-info-*` (3 variants)
- `--color-gray-*` (10 variants: 50-900)
- `--color-white`, `--color-black`

### Backgrounds (4)
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-overlay`

### Text Colors (5)
- `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-inverse`, `--text-muted`

### Spacing (12)
- `--space-0` through `--space-24`

### Typography (15+)
- Font sizes: `--font-size-xs` through `--font-size-4xl`
- Font weights: `--font-weight-light` through `--font-weight-extrabold`
- Font families: `--font-family-base`, `--font-family-mono`
- Line heights: `--line-height-tight` through `--line-height-loose`

### Borders (8+)
- Radius: `--border-radius-sm`, `--border-radius-md`, `--border-radius-lg`, `--border-radius-xl`, `--border-radius-full`
- Colors: `--border-color`, `--border-color-light`, `--border-color-dark`
- Width: `--border-width`

### Shadows (5)
- `--shadow-sm` through `--shadow-2xl`

### Other (11)
- Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`
- Z-Index: 7 levels
- Colors overlay: `--bg-overlay`

---

## Tips & Tricks

1. **Always use variables** - Never hardcode colors/sizes
2. **Chain variants** - `--color-primary-dark` for hover states
3. **Use semantic names** - Color represents meaning, not appearance
4. **Consistent spacing** - Use scale, don't random pick values
5. **Default to `base` size** - `--font-size-base`, `--shadow-md`, `--transition-base`
6. **Scoped styles** - Add `scoped` to `<style>` tags to avoid conflicts
7. **Test hover states** - Interactive elements need hover feedback

---

## Common Mistakes to Avoid

❌ `background: #ffffff` → ✅ `background: var(--bg-primary)`  
❌ `padding: 15px` → ✅ `padding: var(--space-4)`  
❌ `color: navy` → ✅ `color: var(--color-primary)`  
❌ `border-radius: 10px` → ✅ `border-radius: var(--border-radius-md)`  
❌ `box-shadow: 0 0 10px rgba(0,0,0,0.1)` → ✅ `box-shadow: var(--shadow-md)`

---

## Integration Quick Start

### Import in your CSS file:
```css
@import "path/to/theme.scss";
```

### Use in your component:
```vue
<style scoped>
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
}
</style>
```

### Done! 🎉
All variables now available in your component.

---

**Reference Files:**
- Full docs: `src/assets/THEME_USAGE_GUIDE.md`
- Example component: `src/components/ThemeExample.vue`
- Integration: `src/assets/MICROSERVICE_INTEGRATION.md`
- JavaScript config: `src/utils/themeConfig.js`
