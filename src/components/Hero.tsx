import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-showroom.jpg";
import logo from "@/assets/logo.png";
const Hero = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="parallax-container relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Image */}
      <img
        ref={parallaxRef}
        src={heroImage}
        alt="Showroom de veículos premium da 77 Multimarcas"
        className="parallax-bg"
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
      
      {/* Floating Glass Elements */}
      <div className="absolute top-32 right-10 w-32 h-32 rounded-full glass animate-float opacity-30 hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-20 h-20 rounded-full glass-gold animate-float-delayed opacity-40 hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full glass animate-pulse-soft hidden lg:block" />

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
      <div className="absolute bottom-0 left-0 w-1/3 h-0.5 gold-gradient" />

      <div className="relative z-10 container-custom px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-2xl">
            <div className="glass-dark rounded-3xl p-8 md:p-12">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-up">
                <span className="gold-text">77 Multimarcas</span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-foreground/90 mb-8 animate-fade-up delay-100 font-display">
                Transformamos oportunidades em conquistas. Veículos de qualidade com transparência e preços que cabem no seu bolso.
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up delay-200">
                {`"77 Multimarcas – Muito mais que carros, entregamos oportunidades."`}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <a
                  href="https://wa.me/5516993553317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
                >
                  Encontre seu veículo
                  <ChevronRight className="w-5 h-5" />
                </a>

                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 glass border-primary/40 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/20 hover:border-primary transition-all duration-300"
                >
                  Conheça nossa história
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex-shrink-0 animate-fade-up delay-200 hidden lg:block">
            <div className="bg-white rounded-3xl p-8 animate-float shadow-2xl">
              <img 
                src={logo} 
                alt="Logo 77 Multimarcas" 
                className="w-64 xl:w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default Hero;
