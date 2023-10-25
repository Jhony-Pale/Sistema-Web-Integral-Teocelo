import CarouselImages from "../components/CarouselImages";
import CarouselNews from "../components/CarouselNews";
import Directors from "../components/Directors";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NumbersReports from "../components/NumbersReports";
import ServicesAnnouncement from "../components/ServicesAnnouncement";

function HomePage() {
  return (
    <div>
      <CarouselImages />
      <CarouselNews />
      <ServicesAnnouncement />
      <Directors />
      <NumbersReports />
      <Footer />
    </div>
  );
}

export default HomePage;
