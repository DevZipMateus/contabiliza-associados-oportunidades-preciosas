import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border/20">
      <div className="container-custom section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="77 Multimarcas Logo" className="h-12 w-auto" />
            <div>
              <p className="font-display text-lg font-semibold text-secondary-foreground">
                77 Multimarcas
              </p>
              <p className="text-sm text-muted-foreground">
                Muito mais que carros, entregamos oportunidades.
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              CNPJ: 59.074.877/0001-70
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              © {currentYear} 77 Multimarcas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-1 gold-gradient" />
    </footer>
  );
};

export default Footer;
