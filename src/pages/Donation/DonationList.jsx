import { useContext, useState } from 'react';
import { donations } from '../../data/donations';
import { UserContext } from '../../context/UserContext';
import { DonationContext } from '../../context/DonationContext';

const DonationList = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const { userData } = useContext(UserContext);

  const { handleDonation } = useContext(DonationContext);

  const [donate, setDonate] = useState({
    donation_amount: 0,
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleAmountClick = (amount) => {
    console.log('🚀 ~ file: DonationList.jsx:20 ~ handleAmountClick ~ amount:', amount);
    if (!userData) {
      alert('Login terlebih dahulu');
      return;
    }
    setSelectedButton(amount);
    setDonate({ ...donate, donation_amount: amount.toString(), firstName: userData?.firstName, lastName: userData?.lastName, email: userData?.email });
  };

  const handleSubmitDonation = async (e) => {
    e.preventDefault();

    if (!userData) {
      alert('Login terlebih dahulu');
      return;
    }

    if (!donate.donation_amount) {
      alert('Pilih total donasi');
      return;
    }

    await handleDonation(donate);
  };

  return (
    <div className="grid grid-cols-2 max-[980px]:grid-cols-1 gap-4 ">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit possimus molestias explicabo autem dolor eos porro consequuntur error eaque! Provident aliquam nostrum quibusdam deserunt incidunt aperiam harum aut amet explicabo.
      </div>
      <div>
        <form className="grid grid-cols-2 max-[980px]:grid-cols-1 gap-3" onSubmit={handleSubmitDonation}>
          {donations.map((amount) => (
            <div key={amount}>
              <button
                type="button"
                className={`w-full py-3 rounded-md border border-black text-center shadow-md  ${selectedButton == amount ? 'bg-[#11bb60] text-white transition-all' : 'hover:bg-neutral-200 transition-all'}`}
                onClick={() => handleAmountClick(amount)}
              >
                Rp. {amount.toLocaleString()}
              </button>
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
