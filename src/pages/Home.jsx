import Companies from "../components/Companies";
import Description from "../components/Description";
import NewsCarousel from "../components/NewsCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Companies />
      <Description />
      <NewsCarousel />
      <Footer />
    </>
  );
};

export default Home;
