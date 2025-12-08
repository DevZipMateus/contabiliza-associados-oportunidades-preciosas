import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Visconde de Inhaúma, 490 - Sala 1305, Conj. 3",
      subtitle: "Centro - Ribeirão Preto, SP - CEP 14010-100",
    },
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(16) 99355-3317",
      link: "https://wa.me/5516993553317",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "diretoria@spaziovalore.com.br",
      link: "mailto:diretoria@spaziovalore.com.br",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta: 08:30 às 17:45",
      subtitle: "Sábados: 08:30 às 12:00",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="gold-text">contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar a melhor oportunidade. Fale conosco!
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.content}
                </a>
              ) : (
                <>
                  <p className="text-muted-foreground">{item.content}</p>
                  {item.subtitle && (
                    <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Social Media & CTA */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary-foreground mb-4">
            Siga-nos nas redes sociais
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Acompanhe as melhores oportunidades e novidades do mercado automotivo.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://instagram.com/_77multimarcas_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              aria-label="Instagram da 77 Multimarcas"
            >
              <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </a>
          </div>

          <a
            href="https://wa.me/5516993553317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-all duration-300 hover:scale-105"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
