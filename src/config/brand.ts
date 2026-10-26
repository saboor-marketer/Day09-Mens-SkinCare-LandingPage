/**
 * Brand Configuration for NORDEN SKIN
 * 
 * Central configuration file for brand identity and two-color palette.
 * Colors:
 * - Midnight Navy: #101820 (Primary)
 * - Soft Ivory: #F5F1E8 (Secondary)
 * 
 * Strict rule: No third brand color. Only opacity variations of these two colors.
 */

export interface BrandConfig {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingCopy: string;
  announcement: string;
  palette: {
    midnightNavy: string;
    softIvory: string;
  };
  contact: {
    supportNote: string;
    responseWindow: string;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  brandName: "NORDEN SKIN",
  tagline: "Better Skin. No Complications.",
  heroHeadline: "Better Skin. No Complications.",
  heroSupportingCopy: "A straightforward skincare routine built for modern men.",
  announcement: "Simple, honest skincare for men. Crafted for everyday reliability.",
  palette: {
    midnightNavy: "#101820",
    softIvory: "#F5F1E8",
  },
  contact: {
    supportNote: "Inquiries & Product Questions (Mon–Fri, 9am–5pm EST)",
    responseWindow: "Typical response within 24 business hours",
  },
};
