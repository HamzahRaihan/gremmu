import { useContext, useState } from 'react';
import { donations } from '../../data/donations';
import { UserContext } from '../../context/UserContext';
import { DonationContext } from '../../context/DonationContext';

const DonationList = () => {
  const { userData } = useContext(UserContext);
  const { handleDonation } = useContext(DonationContext);

  const [donate, setDonate] = useState({
    donation_amount: '',
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    email: userData?.email,
  });

  const handleAmountClick = (amount) => {
    setDonate({ ...donate, donation_amount: amount.toString() });
  };
  const handleSubmitDonation = (e) => {
    e.preventDefault();
    handleDonation(donate);
    alert('submitted');
  };
  console.log(donate);
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus molestias explicabo autem dolor eos porro consequuntur error eaque! Provident aliquam nostrum quibusdam deserunt incidunt aperiam harum aut amet explicabo.
      </div>
      <div>
        <form onSubmit={handleSubmitDonation}>
          {donations.map((amount) => (
            <div key={amount}>
              <div onClick={() => handleAmountClick(amount)}>Rp. {amount.toLocaleString()}</div>
            </div>
          ))}
          <button>Pay</button>
        </form>
        <input type="text" />
      </div>
    </div>
  );
};

export default DonationList;
