/**
 * Product Catalog Data
 * 
 * Note: Price values and stock numbers are placeholders for front-end demonstration.
 * No clinical claims, certifications, ratings, or fabricated reviews are used.
 */

export interface Product {
  id: string;
  name: string;
  stepNumber: number;
  stepName: string;
  shortDescription: string;
  detailedDescription: string;
  pricePlaceholder: string;
  size: string;
  image: string;
  imageAlt: string;
  keyCharacteristics: string[];
  howToUse: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "norden-daily-facial-cleanser",
    name: "Daily Facial Cleanser",
    stepNumber: 1,
    stepName: "Cleanse",
    shortDescription: "A gentle gel-to-foam wash that clears daily grime, excess oil, and pollution without stripping moisture.",
    detailedDescription: "Designed for daily morning and evening use. Effectively washes away sweat, sunscreen, and daily pollutants while maintaining skin barrier comfort. Leaves face clean and balanced without that dry, tight feeling.",
    pricePlaceholder: "$26.00",
    size: "150 ml / 5.1 fl oz",
    image: "/images/products/cleanser.jpg",
    imageAlt: "Matte dark bottle of Norden Skin Daily Facial Cleanser on an ivory stone pedestal",
    keyCharacteristics: [
      "Non-foaming to gentle-lather transition",
      "Rinses clean with zero residue",
      "Fragrance-free, non-greasy formula",
      "Ideal for all skin types, including sensitive skin"
    ],
    howToUse: "Splash face with lukewarm water. Massage a dime-sized amount between damp hands and gently work over face for 30 seconds. Rinse thoroughly."
  },
  {
    id: "norden-lightweight-face-moisturizer",
    name: "Lightweight Face Moisturizer",
    stepNumber: 2,
    stepName: "Moisturize",
    shortDescription: "Fast-absorbing daily hydration that calms post-shave skin and leaves a natural matte finish.",
    detailedDescription: "Formulated to replenish essential hydration without heavy oils or shine. Absorbs within seconds into the skin, making it effortless to apply before work, school, or workouts. Calms razor irritation and supports everyday comfort.",
    pricePlaceholder: "$32.00",
    size: "100 ml / 3.4 fl oz",
    image: "/images/products/moisturizer.jpg",
    imageAlt: "Matte dark pump bottle of Norden Skin Lightweight Face Moisturizer on an ivory surface",
    keyCharacteristics: [
      "Fast-absorbing matte texture",
      "Non-comedogenic (won't clog pores)",
      "Soothes razor burn and dry patches",
      "Zero sticky or greasy residue"
    ],
    howToUse: "Apply 1 to 2 pumps evenly to clean face and neck every morning and evening. Allow 30 seconds to absorb."
  },
  {
    id: "norden-daily-sunscreen-spf-30",
    name: "Daily Sunscreen SPF 30+",
    stepNumber: 3,
    stepName: "Protect",
    shortDescription: "Broad-spectrum daily protection that blends invisible with zero white cast and no greasy sheen.",
    detailedDescription: "Everyday broad-spectrum UVA/UVB defense tailored for men. Formulated to blend effortlessly into facial hair and all skin tones without ghosting, tackiness, or stinging around the eyes. The essential final step of any morning routine.",
    pricePlaceholder: "$28.00",
    size: "75 ml / 2.5 fl oz",
    image: "/images/products/sunscreen.jpg",
    imageAlt: "Minimalist dark tube of Norden Skin Daily Sunscreen SPF 30+ on a light stone block",
    keyCharacteristics: [
      "Broad-spectrum UVA / UVB protection",
      "Zero white cast across all skin tones",
      "Sweat-resistant and eye-safe",
      "Leaves skin comfortable with a natural finish"
    ],
    howToUse: "Apply generously as the final step of your morning routine 15 minutes before sun exposure. Reapply after heavy sweating or swimming."
  }
];

export interface RoutineStep {
  number: string;
  title: string;
  name: string;
  when: string;
  duration: string;
  explanation: string;
  practicalTip: string;
}

export const ROUTINE_STEPS: RoutineStep[] = [
  {
    number: "01",
    title: "Cleanse",
    name: "Daily Facial Cleanser",
    when: "Morning & Night",
    duration: "30 seconds",
    explanation: "Wash away excess oil, grime, and daily buildup without stripping essential moisture or leaving your skin feeling stiff and dry.",
    practicalTip: "Use lukewarm water rather than hot water, which can dry out facial skin."
  },
  {
    number: "02",
    title: "Moisturize",
    name: "Lightweight Face Moisturizer",
    when: "Morning & Night",
    duration: "15 seconds",
    explanation: "Replenish hydration after cleansing or shaving. Absorbs instantly to calm irritation and keep skin balanced with a natural, shine-free matte finish.",
    practicalTip: "Smooth upward across your jawline and forehead; a single pump is usually enough."
  },
  {
    number: "03",
    title: "Protect",
    name: "Daily Sunscreen SPF 30+",
    when: "Every Morning",
    duration: "20 seconds",
    explanation: "Shield against everyday UV rays that cause premature aging, uneven texture, and cellular damage. Lightweight, invisible, and never greasy.",
    practicalTip: "Wear it even on overcast days or when working near windows indoors."
  }
];

export interface Benefit {
  number: string;
  headline: string;
  description: string;
  detail: string;
}

export const BENEFITS: Benefit[] = [
  {
    number: "01",
    headline: "Radical Simplicity",
    description: "Three intentional products engineered to cover 100% of your daily skincare requirements in under two minutes.",
    detail: "No 10-step regimens, confusing active ingredient stacking, or unnecessary bathroom counter clutter."
  },
  {
    number: "02",
    headline: "Fast-Absorbing, Matte Finish",
    description: "Textures created specifically for men's skin thickness and sebum levels—absorbing instantly with zero shine.",
    detail: "Feels like nothing on your skin. Does not interact poorly with facial hair, sweat, or physical activity."
  },
  {
    number: "03",
    headline: "Everyday Usability & Habit Building",
    description: "Clear numbering and intuitive packaging that make sticking to a daily routine effortless.",
    detail: "Durable travel-friendly pumps, leak-resistant closures, and clear step indicators so you never second-guess."
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "routine" | "skin" | "usage" | "shipping";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-order",
    question: "In what order should I apply the products?",
    answer: "Follow the simple 1-2-3 sequence: Step 1 Cleanse, Step 2 Moisturize, and Step 3 Protect (morning only). In the evening, simply do Step 1 Cleanse followed by Step 2 Moisturize.",
    category: "routine"
  },
  {
    id: "faq-skin-types",
    question: "Will these products work if I have oily or sensitive skin?",
    answer: "Yes. The formulas are fragrance-free, lightweight, and non-comedogenic, making them suitable for normal, dry, oily, and sensitive skin profiles without clogging pores or causing redness.",
    category: "skin"
  },
  {
    id: "faq-beards",
    question: "Can I use these products if I have a beard or facial hair?",
    answer: "Absolutely. Both the cleanser and lightweight moisturizer easily work through stubble and short beards to reach the skin underneath without leaving sticky residue. The sunscreen rubs in completely clear with no white residue left in facial hair.",
    category: "usage"
  },
  {
    id: "faq-duration",
    question: "How long does one set typically last?",
    answer: "With standard twice-daily use for cleanser and moisturizer and once-daily use for sunscreen, each bottle typically lasts between 60 to 75 days.",
    category: "usage"
  },
  {
    id: "faq-shipping",
    question: "What are your standard shipping and delivery timelines?",
    answer: "Standard placeholder policy: Orders typically process in 1–2 business days. Domestic transit averages 3–5 business days. Real shipping rates and carrier selections will be configured in the final checkout integration.",
    category: "shipping"
  },
  {
    id: "faq-returns",
    question: "What is your return and satisfaction policy?",
    answer: "Placeholder policy: We offer a 30-day trial period on your first set. If a formula does not suit your skin, contact our support team for a full refund or product exchange. (Subject to final business terms).",
    category: "shipping"
  }
];
