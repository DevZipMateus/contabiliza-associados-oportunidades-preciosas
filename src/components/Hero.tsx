import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-dark-lighter opacity-90" />

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
      <div className="absolute bottom-0 left-0 w-1/3 h-0.5 gold-gradient" />

      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-up">
            <span className="gold-text">77 Multimarcas</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-foreground/90 mb-8 animate-fade-up delay-100 font-display">
            Transformamos oportunidades em conquistas. Veículos de qualidade com transparência e preços que cabem no seu bolso.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-up delay-200 max-w-2xl mx-auto">
            {`"77 Multimarcas – Muito mais que carros, entregamos oportunidades."`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
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
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default Hero;
