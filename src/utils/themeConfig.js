/**
 * THEME CONFIGURATION MODULE
 * 
 * This file exports the theme configuration as JavaScript constants.
 * This allows for programmatic access to theme values in JavaScript/Vue code.
 * 
 * Usage in components:
 * import { colors, spacing, typography } from '@/utils/themeConfig'
 * 
 * this.dynamicColor = colors.primary
 */

export const colors = {
  // Primary
  primary: 'var(--color-primary)',
  primaryLight: 'var(--color-primary-light)',
  primaryLighter: 'var(--color-primary-lighter)',
  primaryDark: 'var(--color-primary-dark)',
  primaryDarker: 'var(--color-primary-darker)',

  // Secondary
  secondary: 'var(--color-secondary)',
  secondaryLight: 'var(--color-secondary-light)',
  secondaryLighter: 'var(--color-secondary-lighter)',
  secondaryDark: 'var(--color-secondary-dark)',
  secondaryDarker: 'var(--color-secondary-darker)',

  // Accent
  accent: 'var(--color-accent)',
  accentLight: 'var(--color-accent-light)',
  accentLighter: 'var(--color-accent-lighter)',
  accentDark: 'var(--color-accent-dark)',
  accentDarker: 'var(--color-accent-darker)',

  // Semantic
  success: 'var(--color-success)',
  successLight: 'var(--color-success-light)',
  successDark: 'var(--color-success-dark)',

  warning: 'var(--color-warning)',
  warningLight: 'var(--color-warning-light)',
  warningDark: 'var(--color-warning-dark)',

  error: 'var(--color-error)',
  errorLight: 'var(--color-error-light)',
  errorDark: 'var(--color-error-dark)',

  info: 'var(--color-info)',
  infoLight: 'var(--color-info-light)',
  infoDark: 'var(--color-info-dark)',

  // Grayscale
  gray: {
    50: 'var(--color-gray-50)',
    100: 'var(--color-gray-100)',
    200: 'var(--color-gray-200)',
    300: 'var(--color-gray-300)',
    400: 'var(--color-gray-400)',
    500: 'var(--color-gray-500)',
    600: 'var(--color-gray-600)',
    700: 'var(--color-gray-700)',
    800: 'var(--color-gray-800)',
    900: 'var(--color-gray-900)'
  },

  white: 'var(--color-white)',
  black: 'var(--color-black)'
}

export const backgrounds = {
  primary: 'var(--bg-primary)',
  secondary: 'var(--bg-secondary)',
  tertiary: 'var(--bg-tertiary)',
  overlay: 'var(--bg-overlay)'
}

export const textColors = {
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  tertiary: 'var(--text-tertiary)',
  inverse: 'var(--text-inverse)',
  muted: 'var(--text-muted)'
}

export const borders = {
  color: 'var(--border-color)',
  colorLight: 'var(--border-color-light)',
  colorDark: 'var(--border-color-dark)',
  width: 'var(--border-width)',
  radius: {
    sm: 'var(--border-radius-sm)',
    md: 'var(--border-radius-md)',
    lg: 'var(--border-radius-lg)',
    xl: 'var(--border-radius-xl)',
    full: 'var(--border-radius-full)'
  }
}

export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  '2xl': 'var(--shadow-2xl)'
}

export const typography = {
  fontFamily: {
    base: 'var(--font-family-base)',
    mono: 'var(--font-family-mono)'
  },
  fontSize: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    base: 'var(--font-size-base)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
    '4xl': 'var(--font-size-4xl)'
  },
  fontWeight: {
    light: 'var(--font-weight-light)',
    normal: 'var(--font-weight-normal)',
    medium: 'var(--font-weight-medium)',
    semibold: 'var(--font-weight-semibold)',
    bold: 'var(--font-weight-bold)',
    extrabold: 'var(--font-weight-extrabold)'
  },
  lineHeight: {
    tight: 'var(--line-height-tight)',
    normal: 'var(--line-height-normal)',
    relaxed: 'var(--line-height-relaxed)',
    loose: 'var(--line-height-loose)'
  }
}

export const spacing = {
  0: 'var(--space-0)',
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
  8: 'var(--space-8)',
  10: 'var(--space-10)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)'
}

export const transitions = {
  fast: 'var(--transition-fast)',
  base: 'var(--transition-base)',
  slow: 'var(--transition-slow)'
}

export const zIndex = {
  dropdown: 'var(--z-index-dropdown)',
  sticky: 'var(--z-index-sticky)',
  fixed: 'var(--z-index-fixed)',
  modalBackdrop: 'var(--z-index-modal-backdrop)',
  modal: 'var(--z-index-modal)',
  popover: 'var(--z-index-popover)',
  tooltip: 'var(--z-index-tooltip)'
}

/**
 * Complete theme object combining all categories
 */
export const theme = {
  colors,
  backgrounds,
  textColors,
  borders,
  shadows,
  typography,
  spacing,
  transitions,
  zIndex
}

export default theme
