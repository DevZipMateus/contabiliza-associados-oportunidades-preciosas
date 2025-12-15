import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border/20">
      <div className="container-custom section-padding py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <img src={logo} alt="77 Multimarcas Logo" className="h-20 sm:h-24 md:h-28 w-auto brightness-0 invert" />
            <div>
              <p className="font-bookman text-base sm:text-lg font-semibold text-secondary-foreground">
                77 Multimarcas
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Muito mais que carros, entregamos oportunidades.
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-muted-foreground text-xs sm:text-sm">
              CNPJ: 59.074.877/0001-70
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">
              © {currentYear} <span className="font-bookman">77 Multimarcas</span>. Todos os direitos reservados.
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
