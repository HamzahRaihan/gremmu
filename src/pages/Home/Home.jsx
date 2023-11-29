import Companies from '../../components/Companies';
import Description from '../../components/Description';
import NewsCarousel from '../../components/NewsCarousel';
import Footer from '../../layout/Footer';
import Navbar from '../../layout/Navbar';
import HeroSection from '../../components/HeroSection';

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
