import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import { UserContextProvider } from './context/UserContext';
import Footer from './layout/Footer';
import { PostContextProvider } from './context/PostContext';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <PostContextProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </PostContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
