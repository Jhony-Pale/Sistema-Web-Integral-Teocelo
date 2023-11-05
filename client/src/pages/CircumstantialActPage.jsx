import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function CircumstantialActPage() {
  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>Acta circunstanciada de entrega y recepción</span>
        </div>
        <div className="mx-60 mt-16">
          <h1 className="font-extrabold text-xl">
            Con fundamento en el art. 25 de la ley 336 para la entrega y
            recepción del poder ejecutivo así como la administración publica y
            municipal que a la vista dice:
          </h1>
          <p className="font-bold text-lg text-[#6D1610] my-16">
            El contenido del acta circunstanciada deberá ser difundido en los
            medios de comunicación disponibles, así como a través del portal de
            internet correspondiente, para su consulta por parte de cualquier
            interesado, sin mediar petición de por medio como lo establece la
            Ley de Transparencia y Acceso a la Información Pública para el
            Estado de Veracruz de Ignacio de la Llave.
          </p>
          <div className="flex justify-center">
            <Link
              to="https://drive.google.com/file/d/15MAFCaLvS8Ee9KOL3-L-6AKMNRYRdXXs/view?usp=sharing"
              className="bg-[#6d1610] text-white rounded-3xl font-montserrat text-xl py-3 px-10 mr-5 text-center"
            >
              Descargar Acta
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CircumstantialActPage;
