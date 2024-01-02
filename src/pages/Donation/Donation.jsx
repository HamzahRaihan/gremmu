import { useEffect } from 'react';
import DonationList from './DonationList';

const Donation = () => {
  useEffect(() => {
    const fetchMidtrans = () => {
      try {
        const midtransSnapScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

        const script = document.createElement('script');
        script.src = midtransSnapScript;
        script.setAttribute('data-client-key', clientKey);
        script.async = true;

        script.onload = () => {
          window.snapJsLoaded = true;
        };

        document.body.appendChild(script);
      } catch (error) {
        console.error('Error loading script', error.message);
      }
    };
    fetchMidtrans();
  }, []);

  return (
    <div className="px-4">
      <div className="max-w-6xl pt-24 m-auto flex-row gap-4 pb-10">
        <p className="text-center font-bold text-2xl">Donasi</p>
        <p>
          Gremmu berjuang untuk masa depan yang lebih baik, dan kami tidak dapat mewujudkannya tanpa Anda. Agar tetap mandiri dan melakukan pekerjaan mendesak yang kita lakukan, Gremmu tidak pernah mengambil uang dari perusahaan atau
          pemerintah. Kami sepenuhnya mengandalkan dukungan dari individu-individu yang cukup berani untuk melakukan perubahan.
        </p>
      </div>
      <div className="max-w-6xl m-auto">
        <DonationList />
      </div>
    </div>
  );
};

export default Donation;
