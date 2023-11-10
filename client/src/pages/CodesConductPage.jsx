import { useContext } from "react";
import { LoginRegisterContext } from "../context/LoginRegisterContext";
import PDFViewer from "../components/PDFViewer";
import Footer from "../components/Footer";
import CodigoConducta from "../assets/PDFs/Codigo de Conducta_0001.pdf";

function CodesConductPage() {
  const { isMobile } = useContext(LoginRegisterContext);
  const scalePDF = isMobile ? 0.5 : 1;
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>Código de conducta</span>
        </div>
        <div className="h-[750px] border border-black mx-20 mt-10">
          <PDFViewer document={CodigoConducta} scale={scalePDF} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodesConductPage;
