import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const PetitionContext = createContext({
  petitions: [],
  loading: false,
});

export const PetitionContextProvider = ({ children }) => {
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPetitions = async () => {
      setLoading(true);
      await axios
        .get('https://backend-final-project-fs13.vercel.app/petitions')
        .then((response) => {
          const petitionsData = response.data.data;
          setPetitions(petitionsData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Internal server error', error.message);
        });
    };
    getPetitions();
  }, []);

  return <PetitionContext.Provider value={{ petitions, loading }}>{children}</PetitionContext.Provider>;
};

PetitionContextProvider.propTypes = {
  children: PropTypes.node,
};
