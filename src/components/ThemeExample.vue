<template>
  <div class="theme-example-container">
    <!-- Example 1: Using CSS Variables -->
    <section class="example-section">
      <h2>Color Examples</h2>
      <div class="color-grid">
        <div class="color-box primary">Primary</div>
        <div class="color-box secondary">Secondary</div>
        <div class="color-box success">Success</div>
        <div class="color-box warning">Warning</div>
        <div class="color-box error">Error</div>
        <div class="color-box info">Info</div>
      </div>
    </section>

    <!-- Example 2: Button Variants -->
    <section class="example-section">
      <h2>Button Examples</h2>
      <div class="button-group">
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-secondary">Secondary Button</button>
        <button class="btn btn-success">Success Button</button>
        <button class="btn btn-warning">Warning Button</button>
        <button class="btn btn-error">Error Button</button>
        <button class="btn btn-outline">Outline Button</button>
      </div>
    </section>

    <!-- Example 3: Card Component -->
    <section class="example-section">
      <h2>Card Example</h2>
      <div class="card example-card">
        <h3>Card Title</h3>
        <p>This is a card component using the theme system. It has proper spacing, borders, shadows, and typography.</p>
        <div class="card-footer">
          <button class="btn btn-primary btn-sm">Action</button>
        </div>
      </div>
    </section>

    <!-- Example 4: Spacing Examples -->
    <section class="example-section">
      <h2>Spacing Scale</h2>
      <div class="spacing-examples">
        <div class="space-example space-2">--space-2 (8px)</div>
        <div class="space-example space-4">--space-4 (16px)</div>
        <div class="space-example space-6">--space-6 (24px)</div>
        <div class="space-example space-8">--space-8 (32px)</div>
      </div>
    </section>

    <!-- Example 5: Typography Examples -->
    <section class="example-section">
      <h2>Typography Scale</h2>
      <p class="text-xs">Font size XS (12px)</p>
      <p class="text-sm">Font size SM (14px)</p>
      <p class="text-base">Font size BASE (16px)</p>
      <p class="text-lg">Font size LG (18px)</p>
      <p class="text-xl">Font size XL (20px)</p>
    </section>

    <!-- Example 6: Shadows -->
    <section class="example-section">
      <h2>Shadow Examples</h2>
      <div class="shadow-grid">
        <div class="shadow-box shadow-sm">Shadow SM</div>
        <div class="shadow-box shadow-md">Shadow MD</div>
        <div class="shadow-box shadow-lg">Shadow LG</div>
        <div class="shadow-box shadow-xl">Shadow XL</div>
      </div>
    </section>
  </div>
</template>

<script>
/**
 * ThemeExample Component
 * 
 * This component demonstrates how to use the theme system throughout your Vue components.
 * It shows examples of:
 * - CSS Variables in scoped styles
 * - Pre-built utility classes
 * - Color system
 * - Spacing scale
 * - Typography
 * - Shadows
 * 
 * Best practices:
 * 1. Always use CSS variables instead of hardcoding colors
 * 2. Use semantic variable names (--text-primary vs --color-blue)
 * 3. Leverage spacing scale for consistency
 * 4. Prefer utility classes for simple styling
 * 5. Use scoped styles for component-specific styling
 */

export default {
  name: 'ThemeExample',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroy() {}
}
</script>

<style scoped>
/* =====================================================
   THEME EXAMPLE STYLES
   Demonstrates proper usage of CSS variables
   ===================================================== */

.theme-example-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-8);
  background-color: var(--bg-secondary);
  min-height: 100vh;
}

/* Section styling */
.example-section {
  margin-bottom: var(--space-8);
  padding: var(--space-6);
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  border: var(--border-width) solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.example-section h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 2px solid var(--border-color);
}

/* Color Grid Example */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.color-box {
  padding: var(--space-6);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-semibold);
  color: var(--text-inverse);
  text-align: center;
  transition: transform var(--transition-base),
    box-shadow var(--transition-base);
}

.color-box:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.color-box.primary {
  background-color: var(--color-primary);
}

.color-box.secondary {
  background-color: var(--color-secondary);
}

.color-box.success {
  background-color: var(--color-success);
}

.color-box.warning {
  background-color: var(--color-warning);
}

.color-box.error {
  background-color: var(--color-error);
}

.color-box.info {
  background-color: var(--color-info);
}

/* Button Examples */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.btn {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.btn-sm {
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--text-inverse);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--text-inverse);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-dark);
}

.btn-success {
  background-color: var(--color-success);
  color: var(--text-inverse);
}

.btn-success:hover:not(:disabled) {
  background-color: var(--color-success-dark);
}

.btn-warning {
  background-color: var(--color-warning);
  color: var(--text-inverse);
}

.btn-warning:hover:not(:disabled) {
  background-color: var(--color-warning-dark);
}

.btn-error {
  background-color: var(--color-error);
  color: var(--text-inverse);
}

.btn-error:hover:not(:disabled) {
  background-color: var(--color-error-dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: var(--border-width) solid var(--color-primary);
}

.btn-outline:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--text-inverse);
}

/* Card Example */
.example-card {
  background-color: var(--bg-primary);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
}

.example-card h3 {
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.example-card p {
  color: var(--text-secondary);
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-4);
}

.card-footer {
  display: flex;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: var(--border-width) solid var(--border-color-light);
}

/* Spacing Examples */
.spacing-examples {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.space-example {
  padding: var(--space-4);
  background-color: var(--bg-tertiary);
  border-radius: var(--border-radius-md);
  color: var(--text-primary);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
}

.space-example.space-2 {
  margin-left: var(--space-2);
}

.space-example.space-4 {
  margin-left: var(--space-4);
}

.space-example.space-6 {
  margin-left: var(--space-6);
}

.space-example.space-8 {
  margin-left: var(--space-8);
}

/* Typography Examples */
.text-xs {
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
}

.text-sm {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.text-base {
  font-size: var(--font-size-base);
  color: var(--text-primary);
}

.text-lg {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
}

.text-xl {
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
}

/* Shadow Examples */
.shadow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-4);
}

.shadow-box {
  padding: var(--space-6);
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-md);
  text-align: center;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  transition: all var(--transition-base);
}

.shadow-box.shadow-sm {
  box-shadow: var(--shadow-sm);
}

.shadow-box.shadow-md {
  box-shadow: var(--shadow-md);
}

.shadow-box.shadow-lg {
  box-shadow: var(--shadow-lg);
}

.shadow-box.shadow-xl {
  box-shadow: var(--shadow-xl);
}

.shadow-box:hover {
  transform: translateY(-4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .theme-example-container {
    padding: var(--space-4);
  }

  .example-section {
    padding: var(--space-4);
    margin-bottom: var(--space-6);
  }

  .color-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--space-3);
  }

  .button-group {
    gap: var(--space-3);
  }

  .btn {
    flex: 1;
    min-width: 100px;
  }
}
</style>
