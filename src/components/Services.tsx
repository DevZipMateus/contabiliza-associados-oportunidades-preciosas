import { Car, ShieldCheck, BadgeDollarSign, Handshake, Clock, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import vehiclesImage from "@/assets/vehicles-lineup.jpg";

const Services = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top * 0.1;
        parallaxRef.current.style.transform = `translateY(${scrollProgress}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Car,
      title: "Veículos selecionados",
      description:
        "Carros de diversas marcas cuidadosamente escolhidos e revisados, garantindo qualidade e procedência.",
    },
    {
      icon: BadgeDollarSign,
      title: "Preços abaixo do mercado",
      description:
        "Oferecemos as melhores oportunidades com valores competitivos e condições de pagamento flexíveis.",
    },
    {
      icon: ShieldCheck,
      title: "Garantia de procedência",
      description:
        "Todos os nossos veículos passam por rigorosa verificação documental e técnica.",
    },
    {
      icon: Handshake,
      title: "Atendimento personalizado",
      description:
        "Nossa equipe está pronta para entender suas necessidades e encontrar o veículo ideal para você.",
    },
    {
      icon: Clock,
      title: "Agilidade na negociação",
      description:
        "Processos simplificados para que você saia dirigindo seu novo carro o mais rápido possível.",
    },
    {
      icon: Award,
      title: "Tradição e confiança",
      description:
        "Fazemos parte do Grupo Spazio Valore, com anos de experiência em atender bem nossos clientes.",
    },
  ];

  return (
    <section ref={sectionRef} id="servicos" className="section-padding bg-secondary relative overflow-hidden">
      {/* Floating Glass Elements */}
      <div className="absolute top-40 left-10 w-32 h-32 rounded-full glass animate-float opacity-20 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full glass-gold animate-float-delayed opacity-15 hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full glass animate-pulse-soft hidden lg:block" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Por que escolher a <span className="gold-text">77 Multimarcas</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos muito mais que carros. Entregamos oportunidades reais para você realizar seus sonhos.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Image with Parallax */}
        <div className="parallax-container relative rounded-2xl overflow-hidden mb-16 shadow-2xl h-[350px] md:h-[450px]">
          <img
            ref={parallaxRef}
            src={vehiclesImage}
            alt="Variedade de veículos multimarcas disponíveis"
            className="w-full h-[130%] object-cover absolute -top-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
          
          {/* Glass overlay with text */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center">
              <p className="font-display text-2xl md:text-3xl font-semibold text-secondary-foreground">
                Diversas marcas e modelos para você escolher
              </p>
              <p className="text-muted-foreground mt-2">
                Encontre o veículo perfeito para suas necessidades
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards with Glassmorphism */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl glass-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
