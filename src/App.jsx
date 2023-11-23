import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </div>
  );
};

export default App;
