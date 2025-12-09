import Header from "@/components/Header";

const Vitrine = () => {
  // Header height: ~96px (logo h-20 + py-4 padding)
  const headerHeight = 96;
  const badgeHeight = 63;

  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Header fixo */}
      <Header />
      
      {/* Iframe com margem superior para não sobrepor o header */}
      <iframe 
        src="https://77multimarcas.egestor.com.br/vitrine/" 
        className="w-full border-none"
        style={{ 
          marginTop: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px - ${badgeHeight}px)` 
        }}
        title="Demonstração de Vitrine"
      />
      
      {/* Badge inferior - 63px */}
      <div id="montesite-footer-badge" className="h-[63px] w-full" />
    </div>
  );
};

export default Vitrine;
