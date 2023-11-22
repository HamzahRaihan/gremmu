import { Toaster } from 'react-hot-toast';
import FormLogin from '../components/FormLogin';
import { UserContextProvider } from '../context/userContext';

function Login() {
  return (
    <UserContextProvider>
      <FormLogin />
      <Toaster />
    </UserContextProvider>
  );
}

export default Login;
