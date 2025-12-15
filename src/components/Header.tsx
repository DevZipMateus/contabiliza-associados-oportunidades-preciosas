import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-header.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (isHomePage && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location, isHomePage]);

  const navItems = [
    { label: "Início", href: "#inicio", isPage: false },
    { label: "Sobre", href: "#sobre", isPage: false },
    { label: "Serviços", href: "#servicos", isPage: false },
    { label: "Vitrine", href: "/vitrine", isPage: true },
    { label: "Contato", href: "#contato", isPage: false },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (!isHomePage) {
      navigate("/" + href);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (item: { href: string; isPage: boolean }) => {
    if (item.isPage) return;
    scrollToSection(item.href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4 px-4 md:px-8">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="77 Multimarcas Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <li key={item.href}>
                {item.isPage ? (
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-foreground hover:text-muted-foreground transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <a href="https://wa.me/5516993553317" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-accent transition-colors duration-300">
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground p-2" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <ul className="flex flex-col py-4">
              {navItems.map(item => (
                <li key={item.href}>
                  {item.isPage ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-6 py-3 text-foreground hover:text-muted-foreground hover:bg-muted transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="w-full text-left px-6 py-3 text-foreground hover:text-muted-foreground hover:bg-muted transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="px-4 pt-4">
                <a href="https://wa.me/5516993553317" target="_blank" rel="noopener noreferrer" className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors duration-300">
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;