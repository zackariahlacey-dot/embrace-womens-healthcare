import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import SlidingScale from "@/components/SlidingScale";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAE5D9]">
      <Header />
      <main className="pt-6">
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <SlidingScale />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
