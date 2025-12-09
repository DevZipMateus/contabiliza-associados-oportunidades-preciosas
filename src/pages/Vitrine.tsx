import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const headerHeight = 112;
  const badgeHeight = 63;

  useEffect(() => {
    // Verificar se o badge já existe
    const existingBadge = document.getElementById('montesite-footer-badge');
    
    if (existingBadge) {
      // Forçar o badge a ficar visível e posicionado corretamente
      existingBadge.style.position = 'fixed';
      existingBadge.style.bottom = '0';
      existingBadge.style.left = '0';
      existingBadge.style.right = '0';
      existingBadge.style.zIndex = '9999';
      existingBadge.style.height = '63px';
    }

    // Travar scroll da página
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Cleanup: remover estilos ao sair da página
    return () => {
      if (existingBadge) {
        existingBadge.style.position = '';
        existingBadge.style.bottom = '';
        existingBadge.style.left = '';
        existingBadge.style.right = '';
        existingBadge.style.zIndex = '';
        existingBadge.style.height = '';
      }
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      {/* Header fixo */}
      <Header />
      
      {/* Iframe com margin-top para não ficar atrás do header fixo */}
      <iframe 
        src="https://77multimarcas.egestor.com.br/vitrine/" 
        className="w-full border-none block"
        style={{ 
          marginTop: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px - ${badgeHeight}px)`
        }}
        title="Demonstração de Vitrine"
      />
    </div>
  );
};

export default Vitrine;
