import { Toaster } from 'react-hot-toast';
import FormRegister from '../../components/FormRegister';
import { UserContextProvider } from '../../context/UserContext';

function Register() {
  return (
    <UserContextProvider>
      <FormRegister />
      <Toaster />
    </UserContextProvider>
  );
}

export default Register;
