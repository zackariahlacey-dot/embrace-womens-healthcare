import type { ReactNode } from "react";

export interface ClinicalFocusDetail {
  label: string;
  text: ReactNode;
}

export interface ClinicalFocusArea {
  slug: string;
  title: string;
  image: string;
  headline: string;
  solution: ReactNode;
  details: ClinicalFocusDetail[];
}

export const clinicalFocusAreas: ClinicalFocusArea[] = [
  {
    slug: "hormone-therapy",
    title: "Hormone Therapy & Wellness",
    image: "/2.jpg",
    headline: "Feeling unlike yourself? Fatigue, mood swings, or night sweats?",
    solution:
      "We provide personalized Hormone Replacement Therapy (HRT) and wellness planning for perimenopause and menopause—helping you regain your energy and sense of balance.",
    details: [
      {
        label: "Why it helps",
        text: "Balances crucial hormone levels that fluctuate during perimenopause and menopause.",
      },
      {
        label: "What it improves",
        text: "Restores natural energy, stabilizes mood swings, improves sleep quality, and clears brain fog.",
      },
      {
        label: "How it fixes things",
        text: "We use tailored Hormone Replacement Therapy (HRT) protocols to replace exactly what your body is missing, addressing the root cause of your symptoms rather than just masking them.",
      },
    ],
  },
  {
    slug: "vaginal-health",
    title: "Vaginal Health & Sexual Wellness",
    image: "/slidingscale.avif",
    headline: "Struggling with discomfort, dryness, or intimacy concerns?",
    solution:
      "Compassionate, judgment-free care for your most private health needs. We help you feel comfortable, confident, and empowered in your own body again.",
    details: [
      {
        label: "Why it helps",
        text: "Addresses the physical changes in vaginal tissue caused by hormonal shifts, aging, or childbirth.",
      },
      {
        label: "What it improves",
        text: "Enhances natural moisture, increases elasticity, and eliminates pain during intimacy.",
      },
      {
        label: "How it fixes things",
        text: "Through localized treatments and targeted therapies, we restore tissue health and blood flow, bringing back your physical comfort and sexual confidence.",
      },
    ],
  },
  {
    slug: "nutritional-support",
    title: "Nutritional Support & Counseling",
    image: "/4.jpeg",
    headline: "Drained by stubborn weight or hormonal energy crashes?",
    solution:
      "Evidence-based nutritional guidance tailored to your unique biology. Fuel your body to optimize your hormones and vitality at any age.",
    details: [
      {
        label: "Why it helps",
        text: "Food is the foundational building block for your hormone production and metabolic health—helping you optimize your hormones and vitality.",
      },
      {
        label: "What it improves",
        text: "Boosts sustainable energy, aids in stubborn weight management, and drastically reduces systemic inflammation.",
      },
      {
        label: "How it fixes things",
        text: "We replace confusing fad diets with evidence-based, sustainable nutritional plans that give your body the exact nutrients it needs to regulate hormones naturally.",
      },
    ],
  },
  {
    slug: "acute-visits",
    title: "Acute UTI or Vaginal Infections",
    image: "/1.jpg",
    headline: "Need a quick telehealth appointment?",
    solution:
      "Contraception new start and refill. Can't get in to your regular provider? Need a quick telehealth appointment so you can move on with your day? Travel nursing? In Vermont from out of town?",
    details: [
      {
        label: "What we treat",
        text: "Acute UTIs, vaginal infections, contraception starts and refills, and other focused women's-health concerns that don't need to wait.",
      },
      {
        label: "Who it's for",
        text: "Women in Vermont who can't get in to their regular provider, travel nurses on assignment, and visitors from out of town who need same-day care.",
      },
      {
        label: "How it works",
        text: "A short telehealth visit, focused assessment, and prescriptions or lab orders sent to the facility of your choice.",
      },
    ],
  },
];
