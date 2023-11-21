import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies.jsx"
import Description from "./components/Description.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Companies/>
      <Description/>
      <Footer/>
    </div>
  );
};

export default App;
