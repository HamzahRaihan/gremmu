import { createContext, useReducer, useState } from 'react';
import { NewsContextDispatch } from './NewsContext';
import PropTypes from 'prop-types';
import axios from 'axios';

export const DonationContext = createContext(null);

export const DonationContextDispatch = createContext(null);

const DonationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tokenPayment, dispatch] = useReducer(DonateReducer, []);

  const handleDonation = async ({ donation_amount, firstName, lastName, email, phone }) => {
    console.log('🚀 ~ file: DonationContext.jsx:15 ~ handleDonation ~ phone:', phone);
    setLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/donations`,
        {
          donation_amount,
          firstName,
          lastName,
          email,
          phone,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((result) => window.snap.pay(result.data.data))
      .catch((error) => console.error(error.message))
      .finally(setLoading(false));
  };

  return (
    <DonationContext.Provider value={{ handleDonation, tokenPayment, loading }}>
      <NewsContextDispatch.Provider value={dispatch}>{children}</NewsContextDispatch.Provider>
    </DonationContext.Provider>
  );
};

export default DonationProvider;

const DonateReducer = (tokenPayment, action) => {
  switch (action.type) {
    case 'SET_DONATION':
      return { token: action.payload };
    case 'CANCEL_DONATION':
      return;
    default:
      return tokenPayment;
  }
};

DonationProvider.propTypes = {
  children: PropTypes.node,
};
