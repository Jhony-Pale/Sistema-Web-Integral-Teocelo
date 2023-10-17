import { Carousel, IconButton } from "@material-tailwind/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Announcement() {
  return (
    <div>
      <div className="font-extrabold text-center text-4xl pt-5 pb-20">
        CONVOCATORIAS
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center rounded-xl shadow-md shadow-[#d5d5d5] mx-24 w-[60%]">
          <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block cursor-pointer rounded-full transition-all content-[''] w-3 h-3 ${
                      activeIndex === i
                        ? "bg-black"
                        : "bg-white border-black border"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full"
              >
                <FiChevronLeft color="#000000" size="2em" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full"
              >
                <FiChevronRight color="#000000" size="2em" />
              </IconButton>
            )}
            className="w-[90%]"
            autoplay={true}
            loop={true}
          >
            <div className="flex h-full w-full">
              <div className="flex justify-center items-center">
                <img src="/Convocatoria1.jpg" alt="" className="h-[85%]" />
              </div>
            </div>
            <div className="flex h-full w-full">
              <div className="flex justify-center items-center">
                <img src="/Convocatoria2.jpg" alt="" className="h-[85%]" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
