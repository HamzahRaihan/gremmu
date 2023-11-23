import Companies from "../components/Companies";
import Description from "../components/Description";
import NewsCarousel from "../components/NewsCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <Description />
      <NewsCarousel />
      <Footer />
    </>
  );
};

export default Home;
