import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-handover.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Oferecer aos nossos clientes oportunidades reais de negócios, disponibilizando veículos de diversas marcas com qualidade, transparência e preços abaixo do mercado, garantindo sempre uma experiência de compra segura, acessível e vantajosa.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida como a multimarcas que mais entrega oportunidades no mercado automobilístico, tornando-se referência regional pela credibilidade, inovação e capacidade de transformar boas ofertas em conquistas acessíveis para nossos clientes.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Transparência, oportunidade, qualidade, respeito ao cliente, compromisso e inovação. Priorizamos sempre segurança, ética e responsabilidade em todas as negociações.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="gold-text">77 Multimarcas</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full" />
        </div>

        {/* History Section with Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutImage}
              alt="Entrega de chaves de veículo na 77 Multimarcas"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-10 border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Nossa história
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A 77 Multimarcas nasceu da visão empreendedora do Grupo Spazio Valore, um conglomerado que atua nos setores de contabilidade, advocacia, imobiliária e financiamentos.
              </p>
              <p>
                Diante dos preços elevados no mercado automotivo, surgiu a pergunta: "E se pudéssemos oferecer veículos com preços realmente acessíveis, abaixo do mercado, sem abrir mão da qualidade e da transparência?"
              </p>
              <p>
                Hoje, a 77 Multimarcas se consolida como uma marca que une credibilidade, experiência empresarial e visão de oportunidade, ajudando nossos clientes a fazer negócios inteligentes, seguros e acessíveis.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
