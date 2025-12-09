import Header from "@/components/Header";

const Vitrine = () => {
  // Header: logo (80px desktop) + py-4 padding (32px) = ~112px
  const headerHeight = 112;
  const badgeHeight = 63;

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white">
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
      
      {/* Badge inferior - 63px */}
      <div 
        id="montesite-footer-badge" 
        className="h-[63px] w-full"
      />
    </div>
  );
};

export default Vitrine;
