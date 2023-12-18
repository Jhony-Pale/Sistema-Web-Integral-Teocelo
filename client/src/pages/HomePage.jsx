import { useEffect } from "react";
import CarouselImages from "../components/CarouselImages";
import CarouselNews from "../components/CarouselNews";
import Footer from "../components/Footer";
import NumbersReports from "../components/NumbersReports";
import ServicesAnnouncement from "../components/ServicesAnnouncement";
import { usePosts } from "../context/PostContext";

function HomePage() {
  const { getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <CarouselImages />
      <CarouselNews />
      <ServicesAnnouncement />
      <NumbersReports />
      <Footer />
    </div>
  );
}

export default HomePage;
