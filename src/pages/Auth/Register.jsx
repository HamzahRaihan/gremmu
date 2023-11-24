import { Toaster } from 'react-hot-toast';
import FormRegister from '../../components/FormRegister';
import { UserContext, UserContextProvider } from '../../context/UserContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function Register() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {!userData && <Navigate to="/" replace={true} />}

      <UserContextProvider>
        <FormRegister />
        <Toaster />
      </UserContextProvider>
    </div>
  );
}

export default Register;
