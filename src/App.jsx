import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserContextProvider } from './context/UserContext';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </div>
  );
};

export default App;
