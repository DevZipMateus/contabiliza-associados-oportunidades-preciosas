import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Container principal com padding-top para compensar header fixo */}
      <main className="pt-20 w-full" style={{ height: 'calc(100vh - 63px)' }}>
        <iframe 
          src="https://77multimarcas.egestor.com.br/vitrine/" 
          className="w-full border-none"
          style={{ height: 'calc(100vh - 80px - 63px)' }}
          title="Demonstração de Vitrine"
        />
      </main>
      
      {/* Badge inferior - 63px */}
      <div id="montesite-footer-badge" className="h-[63px] w-full" />
    </div>
  );
};

export default Vitrine;
