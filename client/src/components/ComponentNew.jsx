import { AiOutlineClockCircle } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";

function ComponentNew({ newComponent }) {
  const urlImage = "/" + newComponent.image;
  return (
    <div className="mt-6 w-full h-full">

    <Card className="h-full">
      <CardHeader className="relative h-56 w-full mx-0 rounded-b-none">
        <img src={urlImage} alt="Imagen" className="w-full rounded-t-2xl h-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-montserrat text-[#494848]">
          {newComponent.title}
        </Typography>
        <Typography className="font-montserrat text-[#A3A3A2]">
          {newComponent.description}
        </Typography>
      </CardBody>
      <CardFooter className="grow">
        <div className="grid grid-cols-2 items-center content-end h-full w-full">

          <div className="flex items-center">
            <AiOutlineClockCircle />
            <span className="font-montserrat text-black text-xs ml-2">
              {newComponent.date}
            </span>
          </div>
        
          <button className="bg-[#6d1610] text-white rounded-2xl py-1 px-5 font-montserrat w-2/3 justify-self-end">Leer más</button>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
}

export default ComponentNew;
