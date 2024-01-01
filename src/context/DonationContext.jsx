import { createContext, useReducer } from 'react';
import { NewsContextDispatch } from './NewsContext';
import axios from 'axios';

export const DonationContext = createContext(null);

export const DonationContextDispatch = createContext(null);

const DonationProvider = ({ children }) => {
  const [donate, dispatch] = useReducer(DonateReducer, []);

  const handleDonation = async ({ donation_amount, firstName, lastName, email }) => {
    await axios
      .post(
        'http://localhost:3000/donations',
        {
          donation_amount,
          firstName,
          lastName,
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((result) => console.log(result.data.data));
  };

  return (
    <DonationContext.Provider value={{ handleDonation, donate }}>
      <NewsContextDispatch.Provider value={dispatch}>{children}</NewsContextDispatch.Provider>
    </DonationContext.Provider>
  );
};

export default DonationProvider;

const DonateReducer = (donate, action) => {
  switch (action.type) {
    case 'SET_DONATION':
      return action.payload;
  }
};
