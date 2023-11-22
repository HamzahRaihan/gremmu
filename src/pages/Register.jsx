import { Toaster } from 'react-hot-toast';
import FormRegister from '../components/FormRegister';
import { UserContextProvider } from '../context/userContext';

function Register() {
  return (
    <UserContextProvider>
      <FormRegister />
      <Toaster />
    </UserContextProvider>
  );
}

export default Register;
