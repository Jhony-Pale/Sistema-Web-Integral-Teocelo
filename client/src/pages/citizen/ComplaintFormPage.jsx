import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { useExtaData } from "../../context/ExtraDataContext";
import { useNavigate } from "react-router-dom";
import { Collapse } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useComplaint } from "../../context/ComplaintContext";
import { IoCalendarOutline } from "react-icons/io5";
import UploadImage from "../../components/UploadImage";
import AlertMessage from "../../components/AlertMessage";

function ComplaintFormPage() {
  const { user } = useAuth();
  const { isMobile } = useExtaData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { createComplaint, errors: createComplaintErrors } = useComplaint();
  const [collapseErrors, setCollapseErrors] = useState(false);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("date", data.date);
    formData.append("email", data.email);
    formData.append("colony", data.colony);
    formData.append("pcode", data.pcode);
    formData.append("street", data.street);
    formData.append("outnumber", data.outnumber);
    formData.append("innumber", data.innumber);
    formData.append("staffname", data.staffname);
    formData.append("staffcharge", data.staffcharge);
    formData.append("staffarea", data.staffarea);
    formData.append("commentsCitizen", data.commentsCitizen);
    formData.append("image", data.image);

    try {
      const res = await createComplaint(formData);
      if (res) navigate("/perfil");
    } catch (error) {}
  });

  useEffect(() => {
    if (createComplaintErrors.length > 0) {
      setCollapseErrors(true);

      const timer = setTimeout(() => {
        setCollapseErrors(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [createComplaintErrors]);

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <p>Quejas y/o denuncias contra servidores públicos</p>
        </div>
        <div className="m-10">
          <Collapse open={collapseErrors}>
            <div>
              {createComplaintErrors.map((error, i) => (
                <AlertMessage key={i} message={error} />
              ))}
            </div>
          </Collapse>
        </div>

        <form onSubmit={onSubmit} className={`font-montserrat`}>
          <div className="flex flex-col items-center gap-5">
            <div className="grid grid-cols-3">
              <div>
                <label className="font-bold text-xl">
                  Fecha de los hechos:
                </label>
                <div className="date-input-container">
                  
                  <IoCalendarOutline />
                </div>
                <input
                  type="datetime"
                  {...register("date", { required: true })}
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <label className="font-bold text-xl">Nombre(s):</label>
                <input
                  type="text"
                  placeholder="Nombre(s)"
                  className="w-full text-black font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="w-1/2 flex items-center h-[22rem]">
              <label className="font-bold text-xl">Adjuntar evidencia:</label>
              <Controller
                name="image"
                control={control}
                rules={{ required: true }}
                render={({ field: { ref, ...field } }) => (
                  <UploadImage {...field} />
                )}
              />
              {errors.image && (
                <p className="text-red-500">Se requiere una imagen</p>
              )}
            </div>
          </div>
          <div
            className={`${isMobile ? "" : "col-span-2"} flex justify-center`}
          >
            <motion.div className="w-72 flex" whileTap={{ scale: 0.95 }}>
              <div className="bg-white border-[#6d1610] border-2 p-1 rounded-full w-full">
                <button
                  className="bg-[#6d1610] text-white rounded-full font-montserrat text-3xl py-1 px-5 w-full"
                  type="submit"
                >
                  Publicar
                </button>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintFormPage;
