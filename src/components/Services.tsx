import { Car, ShieldCheck, BadgeDollarSign, Handshake, Clock, Award } from "lucide-react";

const Services = () => {
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
    <section id="servicos" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Por que escolher a <span className="gold-text">77 Multimarcas</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos muito mais que carros. Entregamos oportunidades reais para você realizar seus sonhos.
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-dark-lighter/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
