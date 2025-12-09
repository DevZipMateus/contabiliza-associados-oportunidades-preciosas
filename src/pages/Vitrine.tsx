import Header from "@/components/Header";

const Vitrine = () => {
  // Header: logo (80px desktop) + py-4 padding (32px) = ~112px
  // Badge MonteSite: 63px (já está no index.html body)
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
      {/* Badge MonteSite já está no body do index.html - não duplicar aqui */}
    </div>
  );
};

export default Vitrine;
