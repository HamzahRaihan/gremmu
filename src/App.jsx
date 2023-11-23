import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import { UserContextProvider } from './context/UserContext';
import Footer from './layout/Footer';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </div>
  );
};

export default App;
