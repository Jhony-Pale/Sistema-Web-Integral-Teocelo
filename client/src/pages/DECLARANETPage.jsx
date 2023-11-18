import { useExtaData } from "../context/ExtraDataContext";
import Footer from "../components/Footer";
import PDFViewer from "../components/PDFViewer";
import ConvenioPDF from "../assets/PDFs/CONVENIO-DECLARANET.pdf";

function DECLARANETPage() {
  const { isMobile } = useExtaData();
  const scalePDF = isMobile ? 0.5 : 1;
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <span>Convenio DECLARANET</span>
        </div>
        <div className="mx-10 lg:mx-52 mt-16">
          <p className="font-extrabold text-2xl text-black my-16 text-justify">
            En cumplimiento con lo establecido en los Artículos 32, 33 y 34 de
            la Ley General de Responsabilidades Administrativas y el artículo 25
            y 28 de la Ley de Responsabilidades Administrativas para el Estado
            de Veracruz; el H. Ayuntamiento de Teocelo Veracruz realizó el
            convenio específico de colaboración con la Contraloría General del
            Estado a fin de contar con un sistema para la presentación de las
            declaraciones patrimoniales y de intereses en la plataforma virtual
            Declaranet.
          </p>
        </div>
        <div className="h-[750px] mx-20 mt-10">
          <PDFViewer document={ConvenioPDF} scale={scalePDF} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DECLARANETPage;
