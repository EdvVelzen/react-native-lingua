/**
 * Lingua Design System - Design Tokens
 * Central export of theme tokens
 */

import { colors, primaryColors, semanticColors, neutralColors } from './colors';
import { typography, fontFamilies } from './typography';

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const radii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
} as const;

export const shadows = {
  sm: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#0D132B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;

export const tokens = {
  colors,
  primaryColors,
  semanticColors,
  neutralColors,
  typography,
  fontFamilies,
  spacing,
  radii,
  shadows,
} as const;

export type ThemeTokens = typeof tokens;
