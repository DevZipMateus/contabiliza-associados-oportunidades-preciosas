import { Target, Eye, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import aboutImage from "@/assets/about-handover.jpg";

const About = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top * 0.15;
        parallaxRef.current.style.transform = `translateY(${scrollProgress}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Oferecer aos nossos clientes oportunidades reais de negócios, disponibilizando veículos de diversas marcas com qualidade, transparência e preços abaixo do mercado.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida como a multimarcas que mais entrega oportunidades no mercado automobilístico, tornando-se referência regional pela credibilidade e inovação.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Transparência, oportunidade, qualidade, respeito ao cliente, compromisso e inovação. Priorizamos sempre segurança, ética e responsabilidade.",
    },
  ];

  return (
    <section ref={sectionRef} id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Floating Glass Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full glass-gold animate-float opacity-20 hidden lg:block" />
      <div className="absolute bottom-32 left-10 w-24 h-24 rounded-full glass animate-float-delayed opacity-30 hidden lg:block" />

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="gold-text font-bookman">77 Multimarcas</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 gold-gradient mx-auto rounded-full" />
        </div>

        {/* History Section with Parallax Image */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="parallax-container relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[350px] md:h-[400px]">
            <img
              ref={parallaxRef}
              src={aboutImage}
              alt="Entrega de chaves de veículo na 77 Multimarcas"
              className="w-full h-[130%] object-cover absolute -top-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            
            {/* Glass overlay badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-secondary-foreground font-display text-base sm:text-lg font-semibold">
                Realizando sonhos desde o primeiro dia
              </p>
            </div>
          </div>

          <div className="glass-light rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
              Nossa história
            </h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                A <span className="font-bookman">77 Multimarcas</span> nasceu da visão empreendedora do Grupo Spazio Valore, um conglomerado que atua nos setores de contabilidade, advocacia, imobiliária e financiamentos.
              </p>
              <p>
                Diante dos preços elevados no mercado automotivo, surgiu a pergunta: "E se pudéssemos oferecer veículos com preços realmente acessíveis, abaixo do mercado, sem abrir mão da qualidade e da transparência?"
              </p>
              <p>
                Hoje, a <span className="font-bookman">77 Multimarcas</span> se consolida como uma marca que une credibilidade, experiência empresarial e visão de oportunidade.
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards with Glassmorphism */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="group glass-light rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl glass-gold flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
