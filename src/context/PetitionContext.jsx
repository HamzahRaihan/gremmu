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
  participate: [],
  loading: false,
  loadingButton: false,
  loadingPart: false,
  handleSignature: async () => {},
});

export const PetitionContextProvider = ({ children }) => {
  const [petitions, setPetitions] = useState([]);
  const [detailPetition, setDetailPetition] = useState([]);
  const [participate, setParticipate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPart, setLoadingPart] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const { id } = useParams();

  const { userData } = useContext(UserContext);

  const token = localStorage.getItem(TOKEN);

  // render petitions
  const getPetitions = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/petitions`)
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
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/petitions/${id ? id : 1}`)
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

  const getParticipation = async () => {
    setLoadingPart(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/signatures/${id}`);
      const result = response.data.data;
      setParticipate(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPart(false);
    }
  };

  useEffect(() => {
    getParticipation();
  }, [id]);

  // add signature
  const handleSignature = async (petitionId) => {
    const findId = participate.find((user) => user.userId == userData.id);

    if (findId) {
      toast.success('sudah berpartisipasi');
      return;
    }

    setLoadingButton(true);

    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/signatures`,
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
    await getParticipation();
    setLoadingButton(false);
  };

  return <PetitionContext.Provider value={{ petitions, detailPetition, participate, loading, loadingButton, loadingPart, handleSignature }}>{children}</PetitionContext.Provider>;
};

PetitionContextProvider.propTypes = {
  children: PropTypes.node,
};
