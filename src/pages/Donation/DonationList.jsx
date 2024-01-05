import { useContext, useState } from 'react';
import { donations } from '../../data/donations';
import { UserContext } from '../../context/UserContext';
import { DonationContext } from '../../context/DonationContext';
import DonationPurpose from './DonationPurpose';

const DonationList = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const { userData } = useContext(UserContext);

  const { handleDonation } = useContext(DonationContext);

  const [donate, setDonate] = useState({
    donation_amount: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  console.log('🚀 ~ file: DonationList.jsx:20 ~ DonationList ~ donate:', donate);

  const handleAmountClick = (amount) => {
    console.log('🚀 ~ file: DonationList.jsx:20 ~ handleAmountClick ~ amount:', amount);
    if (!userData) {
      alert('Login terlebih dahulu');
      return;
    }
    setSelectedButton(amount);
    setDonate({ ...donate, donation_amount: amount.toString() });
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
        <DonationPurpose />
      </div>
      <div>
        <form className="grid grid-cols-2 max-[980px]:grid-cols-1 gap-3" onSubmit={handleSubmitDonation}>
          <label htmlFor="donation_amount">Nominal:</label>
          <input className="rounded-md col-span-2" onChange={(e) => setDonate({ ...donate, [e.target.name]: e.target.value })} type="number" id="donation_amount" name="donation_amount" placeholder="Berapa yang ingin kamu donasikan?" />

          <label className="col-span-2" htmlFor="donation_amount">
            Atau pilih nominal yang disediakan
          </label>
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

          <label className="col-span-2" htmlFor="firstName">
            Nama: <span className="text-red-600">*</span>
          </label>
          <input className="rounded-md " onChange={(e) => setDonate({ ...donate, [e.target.name]: e.target.value })} type="text" id="firstName" name="firstName" placeholder="Nama awal" required />

          <input className="rounded-md " onChange={(e) => setDonate({ ...donate, [e.target.name]: e.target.value })} type="text" id="lastName" name="lastName" placeholder="Nama akhir" required />

          <label className="col-span-2" htmlFor="firstName">
            Nomor HP: <span className="text-red-600">*</span>
          </label>
          <input className="rounded-md col-span-2" onChange={(e) => setDonate({ ...donate, [e.target.name]: e.target.value })} type="number" id="phone" name="phone" placeholder="Nomor HP" required />

          <label className="col-span-2" htmlFor="firstName">
            Email: <span className="text-red-600">*</span>
          </label>
          <input className="rounded-md col-span-2" onChange={(e) => setDonate({ ...donate, [e.target.name]: e.target.value })} type="email" id="email" name="email" placeholder="Berapa yang ingin kamu donasikan?" required />

          <button className="rounded border border-black py-3 col-span-2">Donasikan</button>
        </form>
      </div>
    </div>
  );
};

export default DonationList;
