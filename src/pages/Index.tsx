import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VitrineSection from "@/components/VitrineSection";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <VitrineSection />
      <Services />
      <InstagramSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
