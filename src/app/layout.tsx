import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Embrace Women's Healthcare | Women's Health Nurse Practitioner Vermont",
    template: "%s | Embrace Women's Healthcare",
  },
  description:
    "Compassionate, woman-centered care in Colchester, VT & via Telehealth. Specializing in Hormone Therapy, Vaginal Health, and Nutritional Support. Led by Bethany, an experienced Women's Health Nurse Practitioner (WHNP-BC).",
  keywords: [
    "Women's Health Vermont",
    "Telehealth VT",
    "Hormone Therapy Colchester",
    "Nurse Practitioner Vermont",
    "Embrace Women's Healthcare",
  ],
  authors: [{ name: "Embrace Women's Healthcare" }],
  creator: "Embrace Women's Healthcare",
  openGraph: {
    title: "Embrace Women's Healthcare | Women's Health Nurse Practitioner Vermont",
    description:
      "Compassionate, woman-centered care in Colchester, VT & via Telehealth. Specializing in Hormone Therapy, Vaginal Health, and Nutritional Support. Led by Bethany, an experienced Women's Health Nurse Practitioner (WHNP-BC).",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Embrace Women's Healthcare — Empowering Women Through Compassionate, Personalized Care.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
    title: "Embrace Women's Healthcare | Women's Health Nurse Practitioner Vermont",
    description:
      "Compassionate, woman-centered care in Colchester, VT & via Telehealth. Specializing in Hormone Therapy, Vaginal Health, and Nutritional Support.",
  },
  icons: {
    icon: "/embracefavicon.ico",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://embracewomenshealthcare.com"
  ),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
