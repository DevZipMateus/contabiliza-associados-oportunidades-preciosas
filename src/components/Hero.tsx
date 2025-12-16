import { ChevronRight, Car, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-8 py-8 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground mb-4 sm:mb-6 animate-fade-up">
                <span className="gold-text font-bookman">77 Multimarcas</span>
              </h1>

              <h2 className="font-calibri text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-secondary-foreground/90 mb-6 sm:mb-8 animate-fade-up delay-100 leading-relaxed">
                Transformamos oportunidades em conquistas. Veículos de qualidade com transparência e preços que cabem no seu bolso.
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 animate-fade-up delay-200">
                "<span className="font-bookman">77 Multimarcas</span> – Muito mais que carros, entregamos oportunidades."
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up delay-300">
                <a
                  href="https://wa.me/5516981393043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gold-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
                >
                  Encontre seu veículo
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <Link
                  to="/vitrine"
                  className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ver Vitrine
                </Link>

                <a
                  href="https://www.instagram.com/_77multimarcas_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  Instagram
                </a>

                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/30 hover:border-white/60 transition-all duration-300"
                >
                  Conheça nossa história
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex-shrink-0 animate-fade-up delay-200 hidden lg:block">
            <div className="bg-white rounded-3xl p-6 xl:p-8 animate-float shadow-2xl">
              <img 
                src={logo} 
                alt="Logo 77 Multimarcas" 
                className="w-48 lg:w-56 xl:w-72 2xl:w-80 h-auto"
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
