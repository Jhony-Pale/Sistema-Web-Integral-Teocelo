import { useContext } from "react";
import { LoginRegisterContext } from "../context/LoginRegisterContext";
import Footer from "../components/Footer";
import PDFViewer from "../components/PDFViewer";
import VersionPublicaPDF from "../assets/PDFs/VERSION PUBLICA.pdf";

function CircumstantialActPage() {
  const { isMobile } = useContext(LoginRegisterContext);
  const scalePDF = isMobile ? 0.5 : 1;
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <span>Acta circunstanciada de entrega y recepción</span>
        </div>
        <div className="mx-10 lg:mx-52 mt-16">
          <h1 className="font-extrabold text-xl">
            Con fundamento en el art. 25 de la ley 336 para la entrega y
            recepción del poder ejecutivo así como la administración publica y
            municipal que a la vista dice:
          </h1>
          <p className="font-bold text-lg text-[#6D1610] my-16 text-justify">
            El contenido del acta circunstanciada deberá ser difundido en los
            medios de comunicación disponibles, así como a través del portal de
            internet correspondiente, para su consulta por parte de cualquier
            interesado, sin mediar petición de por medio como lo establece la
            Ley de Transparencia y Acceso a la Información Pública para el
            Estado de Veracruz de Ignacio de la Llave.
          </p>
        </div>
          <div className="h-[750px] mx-20 mt-10">
            <PDFViewer document={VersionPublicaPDF} scale={scalePDF} />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default CircumstantialActPage;
