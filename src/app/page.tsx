import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-healthcare-pink">
      <Header />
      <main className="pt-6">
        <Hero />
        <Services />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
