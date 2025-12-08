import { Target, Eye, Heart } from "lucide-react";

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

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Nossa história
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A 77 Multimarcas nasceu da visão empreendedora do Grupo Spazio Valore, um conglomerado que atua nos setores de contabilidade, advocacia, imobiliária e financiamentos. Acostumados a identificar oportunidades de negócio e entender as necessidades reais do mercado, os sócios perceberam uma realidade que se tornava cada vez mais evidente: os preços dos veículos estavam subindo de forma significativa, tornando difícil para muitas pessoas realizarem o sonho de adquirir um carro de qualidade com um valor acessível.
              </p>
              <p>
                Diante desse cenário, surgiu uma pergunta que impulsionou a criação da nova empresa: "E se pudéssemos oferecer veículos com preços realmente acessíveis, abaixo do mercado, sem abrir mão da qualidade e da transparência?"
              </p>
              <p>
                Hoje, a 77 Multimarcas se consolida como uma marca que une credibilidade, experiência empresarial e visão de oportunidade, transformando o mercado local e ajudando nossos clientes a fazer negócios inteligentes, seguros e acessíveis.
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
