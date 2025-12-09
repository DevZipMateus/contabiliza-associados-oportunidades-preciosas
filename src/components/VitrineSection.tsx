import { Link } from "react-router-dom";
import { Car, ArrowRight, Sparkles } from "lucide-react";

const VitrineSection = () => {
  return (
    <section id="vitrine-section" className="py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary/95 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 gold-gradient" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-custom px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Novidade</span>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 animate-fade-up">
            Conheça nossa{" "}
            <span className="gold-text">Vitrine Digital</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 animate-fade-up delay-100 leading-relaxed">
            Explore nosso estoque completo de veículos sem sair de casa. 
            Fotos detalhadas, especificações técnicas e preços transparentes 
            para você encontrar o carro dos seus sonhos.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            <div className="glass-dark rounded-2xl p-6 animate-fade-up delay-150">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-secondary-foreground mb-2">Estoque Atualizado</h3>
              <p className="text-sm text-muted-foreground">Veículos novos toda semana com as melhores oportunidades</p>
            </div>

            <div className="glass-dark rounded-2xl p-6 animate-fade-up delay-200">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-foreground mb-2">Fotos Detalhadas</h3>
              <p className="text-sm text-muted-foreground">Veja cada detalhe do veículo antes de visitar a loja</p>
            </div>

            <div className="glass-dark rounded-2xl p-6 animate-fade-up delay-300">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-foreground mb-2">Preços Transparentes</h3>
              <p className="text-sm text-muted-foreground">Sem surpresas, valores claros e condições especiais</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/vitrine"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-gold-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 animate-fade-up delay-300"
          >
            Acessar Vitrine
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 right-0 w-1/3 h-0.5 gold-gradient" />
    </section>
  );
};

export default VitrineSection;
