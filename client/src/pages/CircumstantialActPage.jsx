import Footer from "../components/Footer";
import PDFViewer from "../components/PDFViewer";
import VersionPublica from "../assets/PDFs/VERSION-PUBLICA.pdf";

function CircumstantialActPage() {
  
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>Acta circunstanciada de entrega y recepción</span>
        </div>
        <div className="h-[900px] overflow-y-auto mx-60 mt-10">
          <PDFViewer document={VersionPublica} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CircumstantialActPage;
