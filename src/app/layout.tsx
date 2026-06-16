import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className="font-sans antialiased no-scrollbar bg-[#EAE5D9]"
      >
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
