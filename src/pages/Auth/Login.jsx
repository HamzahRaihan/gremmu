import { Toaster } from 'react-hot-toast';
import FormLogin from '../../components/FormLogin';
import { UserContext, UserContextProvider } from '../../context/UserContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {!userData && <Navigate to="/" replace={true} />}
      <UserContextProvider>
        <FormLogin />
        <Toaster />
      </UserContextProvider>
    </div>
  );
}

export default Login;
