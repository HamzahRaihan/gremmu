import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UserContext } from './UserContext';
import { TOKEN } from '../constants/Key';
import toast from 'react-hot-toast';

export const PetitionContext = createContext({
  petitions: [],
  detailPetition: [],
  loading: false,
  loadingButton: false,
  handleSignature: async () => {},
});

export const PetitionContextProvider = ({ children }) => {
  const [petitions, setPetitions] = useState([]);
  const [detailPetition, setDetailPetition] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const { id } = useParams();

  const { userData } = useContext(UserContext);

  const token = localStorage.getItem(TOKEN);

  // render petitions
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
  useEffect(() => {
    getPetitions();
  }, []);

  const getPetitionByID = async () => {
    await axios
      .get(`https://backend-final-project-fs13.vercel.app/petitions/${id ? id : 1}`)
      .then((response) => {
        const petitionDetailData = response.data.data;
        setDetailPetition(petitionDetailData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Internal server error', error.message);
      });
  };
  useEffect(() => {
    getPetitionByID();
  }, [id]);

  // add signature
  const handleSignature = async (petitionId) => {
    setLoadingButton(true);
    await axios
      .post(
        'https://backend-final-project-fs13.vercel.app/signatures',
        {
          petitionId,
          userId: userData?.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        if (error.response.status === 403) {
          toast.error('Kamu belum login');
        } else {
          toast.error(error.message);
        }
      });
    await getPetitionByID();
    setLoadingButton(false);
  };

  return <PetitionContext.Provider value={{ petitions, detailPetition, loading, loadingButton, handleSignature }}>{children}</PetitionContext.Provider>;
};

PetitionContextProvider.propTypes = {
  children: PropTypes.node,
};
