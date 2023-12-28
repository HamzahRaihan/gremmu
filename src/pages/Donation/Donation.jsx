import DonationList from './DonationList';

const Donation = () => {
  return (
    <>
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
    </>
  );
};

export default Donation;
