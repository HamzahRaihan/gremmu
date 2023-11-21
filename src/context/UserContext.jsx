import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../constants/key';

export const UserContext = createContext({
  handleLogin: async () => {},
  userData: undefined,
  users: [],
});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = localStorage.getItem(TOKEN);
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
          setUsers(response);
        })
        .catch((error) => {
          console.error('Internal server error', error.message);
        });
    };
    getUsers();
  }, []);

  const handleLogin = async (email, password) => {
    const getUserData = await axios
      .post('https://backend-final-project-eight.vercel.app/users/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem(TOKEN, response.data.token);
          navigate('/home');
        } else if (response.status == 404) {
          console.error('email or password is wrong');
          navigate('/');
        } else {
          console.error('Internal server error');
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
    getUserData();
  };

  return <UserContext.Provider value={{ users, userData, handleLogin }}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
