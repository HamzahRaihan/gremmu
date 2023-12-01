import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import { UserContextProvider } from './context/UserContext';
import Footer from './layout/Footer';
import { PostContextProvider } from './context/PostContext';
import { PetitionContextProvider } from './context/PetitionContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <UserContextProvider>
          <PostContextProvider>
            <PetitionContextProvider>
              <Navbar />
              <Outlet />
              <div className="flex-shrink-0">
                <Footer />
              </div>
              <Toaster />
            </PetitionContextProvider>
          </PostContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
};

export default App;
