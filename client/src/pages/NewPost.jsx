import { useForm } from "react-hook-form";
import InputSelect from "../components/InputSelect";
import Footer from "../components/Footer";
import UploadImage from "../components/UploadImage";
import { Link } from "react-router-dom";
import { useExtaData } from "../context/ExtraDataContext";
import { motion } from "framer-motion";

const options = ["Noticia", "Comunicado", "Convocatoria"];

function NewPost() {
  const { register } = useForm();
  const { isMobile } = useExtaData();

  const handleFileChange = (file) => {
    // Aquí puedes manejar el archivo seleccionado
    console.log("Archivo seleccionado:", file);
  };

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <p>Nueva publicación</p>
        </div>
        <form className="m-10 grid grid-cols-2 gap-10 font-montserrat">
          <div className="flex flex-col items-center gap-5">
            <div className="w-1/2">
              <p className="font-bold text-xl">Título del contenido:</p>
              <input
                type="text"
                placeholder="Ingresa un título llamativo..."
                {...register("title", { required: true })}
                className="shadow border border-black py-1 px-3 w-full"
              />
            </div>
            <div className="w-1/2">
              <p className="font-bold text-xl">Tipo de contenido:</p>
              <InputSelect options={options} />
            </div>
            <div className="w-1/2">
              <p className="font-bold text-xl">Título del contenido:</p>
              <textarea
                {...register("body", { required: true })}
                className="w-full text-black px-4 py-2 rounded-md border border-black resize-none shadow"
                placeholder="..."
                rows={8}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="font-bold text-xl">Cargar imagen:</p>
            <div className="w-1/2 flex items-center h-[22rem]">
              <UploadImage onChange={handleFileChange} />
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <motion.div className="w-72 flex" whileTap={{ scale: 0.95 }}>
              <Link
                to="#"
                className="bg-white border-[#6d1610] border-2 p-1 rounded-full w-full"
              >
                <button className="bg-[#6d1610] text-white rounded-full font-montserrat text-3xl py-1 px-5 w-full">
                  Publicar
                </button>
              </Link>
            </motion.div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewPost;