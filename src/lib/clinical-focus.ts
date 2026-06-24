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
      "Contraception new start and refill. Need a quick telehealth appointment so you can move on with your day? Travel nursing? In Vermont from out of town?",
    details: [
      {
        label: "What we treat",
        text: "Acute UTIs, vaginal infections, contraception starts and refills, and other focused women's-health concerns that don't need to wait.",
      },
      {
        label: "Who it's for",
        text: "Women in Vermont, travel nurses on assignment, and visitors from out of town who need same-day care.",
      },
      {
        label: "How it works",
        text: "A short telehealth visit, focused assessment, and prescriptions or lab orders sent to the facility of your choice.",
      },
    ],
  },
  {
    slug: "pmos",
    title: "PMOS (formerly PCOS)",
    image: "/3.jpg",
    headline: "Polyendocrine Metabolic Ovarian Syndrome",
    solution:
      "PMOS is a complex, systemic hormonal disorder that affects approximately 1 in 8 women globally. The name change from PCOS to PMOS reflects a more accurate understanding of the condition — it affects multiple hormone systems and metabolic processes, not just the ovaries.",
    details: [
      {
        label: "Polyendocrine",
        text: "Multiple hormone systems are involved — not just reproductive hormones, but also insulin and androgens.",
      },
      {
        label: "Metabolic",
        text: "The condition has a significant impact on metabolism, frequently causing insulin resistance, which increases the risk of type 2 diabetes and cardiovascular issues.",
      },
      {
        label: "Ovarian",
        text: "Acknowledges the involvement of the ovaries, though visible cysts are not required for a diagnosis.",
      },
      {
        label: "How we help",
        text: "We take the time to evaluate the full hormonal and metabolic picture, then build a personalized plan that addresses the root drivers — not just the symptoms.",
      },
    ],
  },
  {
    slug: "endometriosis",
    title: "Endometriosis",
    image: "/purple.png",
    headline: "Chronic, inflammatory tissue growth outside the uterus",
    solution:
      "Endometriosis is a chronic, inflammatory condition where tissue similar to the lining of the uterus grows outside of it — typically on pelvic organs like the ovaries and fallopian tubes — causing pain, inflammation, and scar tissue.",
    details: [
      {
        label: "How it behaves",
        text: "Like the uterine lining, this tissue thickens, breaks down, and bleeds with each menstrual cycle. With no way to exit the body, it causes trapped blood, inflammation, and scarring.",
      },
      {
        label: "Who it affects",
        text: "An estimated 10% of reproductive-aged women and individuals with female reproductive organs globally.",
      },
      {
        label: "How we help",
        text: "We listen first — too many women have been dismissed about their pain. From there we work on symptom relief, hormone strategy, and coordination with specialists when needed.",
      },
    ],
  },
];
