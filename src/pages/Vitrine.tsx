import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Spacer para compensar header fixo */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Iframe - altura calculada: 100vh - 80px (header) - 63px (badge) */}
      <div className="flex-1" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe 
          src="https://77multimarcas.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
      
      {/* Badge inferior - 63px */}
      <div id="montesite-footer-badge" className="h-[63px] flex-shrink-0 w-full" />
    </div>
  );
};

export default Vitrine;
