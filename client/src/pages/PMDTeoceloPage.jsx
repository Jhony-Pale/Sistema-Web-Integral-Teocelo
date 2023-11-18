import { useExtaData } from "../context/ExtraDataContext";
import Footer from "../components/Footer";
import PDFViewer from "../components/PDFViewer";
import PMDTeoceloPDF from "../assets/PDFs/PMD-Teocelo-2022-2025.pdf";

function PMDTeoceloPage() {
  const { isMobile } = useExtaData();
  const scalePDF = isMobile ? 0.5 : 1;
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <span>Plan Municipal de Desarrollo 2022 - 2025</span>
        </div>
        <div className="h-[750px] mx-20 mt-10">
          <PDFViewer document={PMDTeoceloPDF} scale={scalePDF} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PMDTeoceloPage;
