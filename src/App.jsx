import Navbar from './components/Navbar';
import Companies from './components/Companies';
import Description from './components/Description';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Companies />
      <Description />
    </div>
  );
};

export default App;
