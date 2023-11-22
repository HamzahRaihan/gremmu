import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies.jsx";
import Description from "./components/Description.jsx";
import NewsCarousel from "./components/NewsCarousel.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Companies />
      <Description />
      <NewsCarousel/>
      <Footer />
    </div>
  );
};

export default App;
