import { useExtaData } from "../context/ExtraDataContext";
import PDFViewer from "../components/PDFViewer";
import CodigoEtica from "../assets/PDFs/Codigo de Etica_0001.pdf";

function CodesEthicsPage() {
  const { isMobile } = useExtaData();
  const scalePDF = isMobile ? 0.5 : 1;
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>Código de ética</span>
        </div>
        <div className="h-[750px] border border-black mx-20 mt-10">
          <PDFViewer document={CodigoEtica} scale={scalePDF} />
        </div>
      </div>
    </div>
  );
}

export default CodesEthicsPage;
