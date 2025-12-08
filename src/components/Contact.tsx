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
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-20 w-36 h-36 rounded-full glass-gold animate-float opacity-20 hidden lg:block" />
      <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full glass animate-float-delayed opacity-25 hidden lg:block" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="gold-text">contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar a melhor oportunidade. Fale conosco!
          </p>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Cards with Glassmorphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={item.title}
              className="glass-light rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full glass-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

        {/* Social Media & CTA with Glass Effect */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-dark to-secondary" />
          
          {/* Glass overlay */}
          <div className="relative glass-dark rounded-2xl p-8 md:p-12 text-center">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full glass animate-pulse-soft opacity-30" />
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full glass-gold animate-float opacity-20" />
            
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary-foreground mb-4 relative z-10">
              Siga-nos nas redes sociais
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto relative z-10">
              Acompanhe as melhores oportunidades e novidades do mercado automotivo.
            </p>

            <div className="flex justify-center gap-4 mb-8 relative z-10">
              <a
                href="https://instagram.com/_77multimarcas_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass-gold flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram da 77 Multimarcas"
              >
                <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
            </div>

            <a
              href="https://wa.me/5516993553317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 relative z-10"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
