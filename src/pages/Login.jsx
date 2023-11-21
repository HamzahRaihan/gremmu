import FormLogin from '../components/FormLogin';
import { UserContextProvider } from '../context/userContext';

function Login() {
  return (
    <UserContextProvider>
      <FormLogin />
    </UserContextProvider>
  );
}

export default Login;
