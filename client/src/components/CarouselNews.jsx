import SeparadorIzquierdo from "../assets/Extras/SeparadorIzquierdo.png";
import SeparadorDerecho from "../assets/Extras/SeparadorDerecho.png";
import ComponentNew from "./ComponentNew";
import { Carousel } from "@material-tailwind/react";
import { useExtaData } from "../context/ExtraDataContext";
import { usePosts } from "../context/PostContext";

function CarouselImages() {
  const { isMobile } = useExtaData();
  const { posts } = usePosts();
  let newsCom = [];

  const sliceArray = () => {
    const conditional = ["Noticia", "Comunicado"];
    newsCom = posts.filter((post) => (post) => conditional.includes(post.type));
    if (newsCom.length > 5) {
      const _posts = newsCom.slice(0, 5);
      _posts.push({ position: "More" });
      return _posts;
    } else {
      const _posts = newsCom;
      _posts.push({ position: "More" });
      return _posts;
    }
  };
  const newsSliced = sliceArray();

  const organizedNews = newsSliced.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / (isMobile ? 2 : 3));

    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }

    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="bg-[#efeeee]">
      <div className="flex items-center justify-center pt-8">
        <img
          src={SeparadorIzquierdo}
          alt="Separador izquierdo"
          className="tranform scale-[0.4] lg:scale-100 mr-[-50px] lg:mr-0"
        />
        <p className="font-extrabold text-center text-2xl lg:text-3xl lg:mx-5">
          NOTICIAS Y COMUNICADOS
        </p>
        <img
          src={SeparadorDerecho}
          alt="Separador derecho"
          className="tranform scale-[0.4] lg:scale-100 ml-[-50px] lg:ml-0"
        />
      </div>
      {newsCom.length === 0 ? (
        <div>No hay publicaciones.</div>
      ) : (
        <Carousel autoplay={false} loop={true} className="z-0">
          {organizedNews.map((group, groupIndex) => (
            <div key={groupIndex} className={`flex h-full w-full px-4 mb-5`}>
              {group.map((new_, index) => (
                <div
                  key={index}
                  className={`grow p-10 h-full ${
                    group.length === 1
                      ? isMobile
                        ? "basis-1/2"
                        : "basis-1/3"
                      : "basis-full"
                  }`}
                >
                  <ComponentNew newComponent={new_} />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default CarouselImages;
