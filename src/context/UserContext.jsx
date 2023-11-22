import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_KEY, TOKEN } from '../constants/key';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext({
  handleLogin: async () => {},
  handleRegister: async () => {},
  handleLogout: () => {},
  userData: undefined,
  token: undefined,
  users: [],
  loading: false,
});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  console.log('🚀 ~ file: UserContext.jsx:20 ~ UserContextProvider ~ userData:', userData?.id);
  const [token, setToken] = useState(undefined);
  console.log('🚀 ~ file: UserContext.jsx:22 ~ UserContextProvider ~ token:', token);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = JSON.stringify(localStorage.getItem(TOKEN));
    const user = JSON.parse(localStorage.getItem(ACCOUNT_KEY));
    if (loginToken) {
      setUserData(user);
      setToken(loginToken);
    } else {
      setUserData(undefined);
      setToken(undefined);
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
    if (password.trim() == '' || email.trim() == '') {
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
          if (response.status === 200) {
            localStorage.setItem(TOKEN, response.data.data);
            const token = JSON.stringify(localStorage.getItem(TOKEN));
            const decoded = jwtDecode(token);
            localStorage.setItem(ACCOUNT_KEY, JSON.stringify(decoded));
            navigate('/');
          } else if (response.status === 404) {
            toast.error('email or password is wrong');
            navigate('/');
          } else {
            toast.error('Internal server error');
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            toast.error('email or password is wrong');
          } else {
            toast.error('Internal server error');
          }
        });

      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(ACCOUNT_KEY);
    setUserData(undefined);
    setToken(undefined);
  };

  const handleRegister = async (firstName, lastName, email, password, gender) => {
    setLoading(true);
    if (password.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || email.trim() == '') {
      toast.error('Form wajib terisi semua');
      setLoading(false);
    } else {
      await axios
        .post(
          'https://backend-final-project-eight.vercel.app/users',
          {
            firstName,
            lastName,
            email,
            password,
            gender,
            role: 'user',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 406) {
            toast.error('Email sudah digunakan');
          } else if (response.status === 201) {
            toast.success('Berhasil registrasi');
            navigate('/login');
          } else {
            toast.error('Internal error');
          }
        })
        .catch((error) => {
          if (error.response.status === 406) {
            toast.error('Email sudah digunakan');
          } else {
            toast.error(error.message);
          }
        });

      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData !== undefined && userData !== null) {
      navigate('/');
    }
  }, [navigate, userData]);

  return <UserContext.Provider value={{ loading, users, userData, token, handleLogin, handleRegister, handleLogout }}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
