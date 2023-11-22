import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../constants/key';
import toast from 'react-hot-toast';

export const UserContext = createContext({
  handleLogin: async () => {},
  handleRegister: async () => {},
  userData: undefined,
  users: [],
  loading: false,
});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = JSON.stringify(localStorage.getItem(TOKEN));
    if (loginToken) {
      setUserData(JSON.parse(loginToken));
    } else {
      setUserData(undefined);
    }
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get('https://backend-final-project-eight.vercel.app/users')
        .then((response) => {
          setUsers(response.data.data);
        })
        .catch((error) => {
          console.error('Internal server error', error.message);
        });
    };
    getUsers();
  }, []);

  const handleLogin = async (email, password) => {
    setLoading(true);
    if (password.trim('') == '' || email.trim('') == '') {
      toast.error('Form wajib terisi semua');
      setLoading(false);
    } else {
      await axios
        .post(
          'https://backend-final-project-eight.vercel.app/users/login',
          {
            email,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log('🚀 ~ file: UserContext.jsx:65 ~ .then ~ response:', response);
          if (response.status === 200) {
            localStorage.setItem(TOKEN, response.data.data);

            navigate('/');
          } else if (response.status === 404) {
            toast.error('email or password is wrong');
            navigate('/');
          } else {
            toast.error('Internal server error');
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
      setLoading(false);
    }
  };

  const handleRegister = async (firstName, lastName, email, password, gender) => {
    setLoading(true);
    if (password.trim('') == '' || firstName.trim('') == '' || lastName.trim('') == '' || email.trim('') == '') {
      toast.error('Form wajib terisi semua');
      setLoading(false);
    } else {
      await axios
        .post('https://backend-final-project-eight.vercel.app/users', {
          firstName,
          lastName,
          email,
          password,
          gender,
          role: 'user',
        })
        .then((response) => {
          if (response.status == 406) {
            toast.error('Email sudah digunakan');
          } else if (response.status == 201) {
            toast.success('Berhasil registrasi');
            navigate('/login');
          } else {
            toast.error('Internal error');
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData !== undefined && userData !== null) {
      navigate('/');
    }
  }, [navigate, userData]);

  return <UserContext.Provider value={{ loading, users, userData, handleLogin, handleRegister }}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
