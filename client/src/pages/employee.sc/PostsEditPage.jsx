import { useEffect, useState } from "react";
import { usePosts } from "../../context/PostContext";
import { AnimatePresence, motion } from "framer-motion";
import InputSelect from "../../components/InputSelect";
import { FiAlertCircle } from "react-icons/fi";
import { Alert } from "@material-tailwind/react";
import { useExtaData } from "../../context/ExtraDataContext";
import ComponentPostEdit from "../../components/ComponentPostEdit";

const options = ["Todo", "Noticias", "Comunicados", "Convocatorias"];

function PostsEditPage() {
  const { getPosts, posts } = usePosts();
  const { isMobile } = useExtaData();
  const [filterPosts, setFilterPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getPosts();
      setFilterPosts(posts);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  const onOptionChange = (option) => {
    if (option === "Todo") return setFilterPosts(posts);
    const filter = posts.filter(
      (post) => post.type.toUpperCase() === option.slice(0, -1).toUpperCase()
    );
    setFilterPosts(filter);
  };

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>Publicaciones</span>
        </div>
        <div className="flex justify-center items-center m-10">
          {!isMobile && (
            <>
              <div className="basis-[30%]"></div>
              <div className="basis-[30%]"></div>
            </>
          )}
          <div className={`${isMobile ? "" : "basis-[30%]"} flex gap-5`}>
            <p className="font-montserrat font-bold text-xl">Mostrar:</p>
            <InputSelect options={options} onOptionChange={onOptionChange} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 m-10">
          <AnimatePresence mode="popLayout">
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                {filterPosts.length > 0 ? (
                  <>
                    {filterPosts.map((post, i) => (
                      <motion.div
                        key={i}
                        className={`${
                          isMobile ? "basis-[40%]" : "basis-[30%]"
                        } h-[35rem]`}
                        layout
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring" }}
                      >
                        <ComponentPostEdit newComponent={post} />
                      </motion.div>
                    ))}
                  </>
                ) : (
                  <div className="pb-6 w-full">
                    <Alert
                      className="bg-[#6D1610]"
                      icon={<FiAlertCircle size="1.5em" />}
                    >
                      No se encontró ningún resultado.
                    </Alert>
                  </div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default PostsEditPage;
