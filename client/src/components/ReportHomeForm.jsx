import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

function ReportHomeForm() {
  const { register } = useForm();
  return (
    <div>
      <div className="font-extrabold text-center text-4xl pt-5 pb-20">
        ATENCIÓN CIUDADANA
      </div>
      <div className="flex items-center justify-center">
        <form className="flex flex-col w-full lg:w-[60%]">
          <div className="flex flex-col bg-[#EFEEEE] rounded-xl p-4">
            <div className="mb-11">
              <span className="font-bold text-xl font-serif">
                Nombre completo:
              </span>
              <input
                type="text"
                placeholder=""
                {...register("fullname", { required: true })}
                className="w-full text-black px-4 py-2 rounded-md border-2 border-black h-10"
              />
            </div>
            <div className="mb-11">
              <span className="font-bold text-xl font-serif">
                Correo electrónico:
              </span>
              <input
                type="email"
                placeholder=""
                {...register("email", { required: true })}
                className="w-full text-black px-4 py-2 rounded-md border-2 border-black h-10"
              />
            </div>
            <div className="mb-11">
              <span className="font-bold text-xl font-serif">Asunto:</span>
              <div className="w-full">
                <Select className="border-2 border-black bg-white">
                  <Option>Asunto 1</Option>
                  <Option>Asunto 2</Option>
                  <Option>Asunto 3</Option>
                </Select>
              </div>
            </div>
            <div>
              <span className="font-bold text-xl font-serif">Mensaje:</span>
              <textarea
                {...register("message", { required: true })}
                className="w-full text-black px-4 py-2 rounded-md border-2 border-black resize-none"
                rows={5}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#6D1610] font-extrabold font-montserrat text-2xl w-[50%] text-white py-2 rounded-3xl self-center mt-8"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportHomeForm;
