import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-showroom.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Showroom de veículos premium da 77 Multimarcas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
      <div className="absolute bottom-0 left-0 w-1/3 h-0.5 gold-gradient" />

      <div className="relative z-10 container-custom px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-up">
            <span className="gold-text">77 Multimarcas</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-foreground/90 mb-8 animate-fade-up delay-100 font-display">
            Transformamos oportunidades em conquistas. Veículos de qualidade com transparência e preços que cabem no seu bolso.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-up delay-200">
            {`"77 Multimarcas – Muito mais que carros, entregamos oportunidades."`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a
              href="https://wa.me/5516993553317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-all duration-300 hover:scale-105"
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
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Conheça nossa história
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default Hero;
