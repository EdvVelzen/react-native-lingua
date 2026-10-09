/**
 * Lingua Design System - Typography Tokens
 * Based on design reference (prompt-material/01-design-system.png)
 */

export const fontFamilies = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export interface TypographyStyle {
  purpose: string;
  fontSize: number;
  lineHeight: number;
  relativeLineHeight: number;
  fontWeight: '400' | '500' | '600' | '700';
  fontFamily: (typeof fontFamilies)[keyof typeof fontFamilies];
}

export const typography = {
  h1: {
    purpose: 'Page / Screen Title',
    fontSize: 32,
    lineHeight: 38.4,
    relativeLineHeight: 1.2,
    fontWeight: '700',
    fontFamily: fontFamilies.bold,
  },
  h2: {
    purpose: 'Section Title',
    fontSize: 24,
    lineHeight: 31.2,
    relativeLineHeight: 1.3,
    fontWeight: '600',
    fontFamily: fontFamilies.semiBold,
  },
  h3: {
    purpose: 'Card / Module Title',
    fontSize: 20,
    lineHeight: 26,
    relativeLineHeight: 1.3,
    fontWeight: '600',
    fontFamily: fontFamilies.semiBold,
  },
  h4: {
    purpose: 'Subheading',
    fontSize: 16,
    lineHeight: 22.4,
    relativeLineHeight: 1.4,
    fontWeight: '500',
    fontFamily: fontFamilies.medium,
  },
  bodyLarge: {
    purpose: 'Important content',
    fontSize: 16,
    lineHeight: 25.6,
    relativeLineHeight: 1.6,
    fontWeight: '400',
    fontFamily: fontFamilies.regular,
  },
  bodyMedium: {
    purpose: 'Body text',
    fontSize: 14,
    lineHeight: 22.4,
    relativeLineHeight: 1.6,
    fontWeight: '400',
    fontFamily: fontFamilies.regular,
  },
  bodySmall: {
    purpose: 'Supporting text',
    fontSize: 13,
    lineHeight: 20.8,
    relativeLineHeight: 1.6,
    fontWeight: '400',
    fontFamily: fontFamilies.regular,
  },
  caption: {
    purpose: 'Labels, meta text',
    fontSize: 11,
    lineHeight: 15.4,
    relativeLineHeight: 1.4,
    fontWeight: '400',
    fontFamily: fontFamilies.regular,
  },
} as const satisfies Record<string, TypographyStyle>;

export type TypographyVariant = keyof typeof typography;
