import { useState } from 'react';
import { donations } from '../../data/donations';

const DonationList = () => {
  const [donate, setDonate] = useState({ donation_amount: '' });
  const handleAmountClick = (amount) => {
    setDonate({ ...donate, donation_amount: amount.toString() });
  };
  console.log(donate);
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus molestias explicabo autem dolor eos porro consequuntur error eaque! Provident aliquam nostrum quibusdam deserunt incidunt aperiam harum aut amet explicabo.
      </div>
      <div>
        {donations.map((amount) => (
          <div key={amount}>
            <button onClick={() => handleAmountClick(amount)}>Rp. {amount.toLocaleString()}</button>{' '}
          </div>
        ))}
        <input type="text" />
      </div>
    </div>
  );
};

export default DonationList;
