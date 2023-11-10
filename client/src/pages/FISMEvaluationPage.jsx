import { useContext } from "react";
import { LoginRegisterContext } from "../context/LoginRegisterContext";
import Footer from "../components/Footer";
import PDFViewer from "../components/PDFViewer";
import EvaluationPDF from "../assets/PDFs/Evaluación de Desempeño FISM VF_TRANSPARENCIA.pdf";

function FISMEvaluationPage() {
    const { isMobile } = useContext(LoginRegisterContext);
    const scalePDF = isMobile ? 0.5 : 1;
    return (
    <div>
        <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <span>Evaluación de desempeño FISM</span>
        </div>
        <div className="h-[750px] mx-20 mt-10">
          <PDFViewer document={EvaluationPDF} scale={scalePDF} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FISMEvaluationPage