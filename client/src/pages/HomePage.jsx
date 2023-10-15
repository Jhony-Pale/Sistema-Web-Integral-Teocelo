import CarouselImages from "../components/CarouselImages";
import CarouselNews from "../components/CarouselNews";
import Directors from "../components/Directors";
import NavBar from "../components/NavBar";
import ServicesAnnouncement from "../components/ServicesAnnouncement";

function HomePage() {
  return (
    <div>
      <NavBar />
      <CarouselImages />
      <CarouselNews />
      <ServicesAnnouncement />
      <Directors />
    </div>
  );
}

export default HomePage;
