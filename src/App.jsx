import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies.jsx"
import Description from "./components/Description.jsx";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Companies/>
      <Description/>
     
    </div>
  );
};

export default App;
