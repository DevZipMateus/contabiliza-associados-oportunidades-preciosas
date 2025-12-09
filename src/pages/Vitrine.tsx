import Header from "@/components/Header";

const Vitrine = () => {
  // Header: logo (80px desktop) + py-4 padding (32px) = ~112px
  // Badge MonteSite: 63px (renderizado fora do React, após o root div)
  const headerHeight = 112;
  const badgeHeight = 63;

  return (
    <>
      {/* Container principal - altura = 100vh - badge (que está fora do React) */}
      <div 
        className="w-full bg-white"
        style={{ height: `calc(100vh - ${badgeHeight}px)` }}
      >
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
    </>
  );
};

export default Vitrine;
