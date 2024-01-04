import { donationPurpose } from '../../data/donationPurpose';

const DonationPurpose = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center pb-4">Donasi membantu kami untuk</h1>
      <section>
        {donationPurpose.map((item) => (
          <div className="flex-row lg:flex md:flex sm:flex gap-4 pb-4" key={item.id}>
            <div className="image-wrapper lg:w-fit">
              <img className="object-cover lg:h-32 lg:w-72 md:h-32 md:w-72 sm:h-32 sm:w-72 m-auto lg:m-0 " src={`${item.image}`} alt="Environment Pollution" />
            </div>
            <div className="description w-fit">
              <h1 className="font-bold text-[#11bb60] text-lg">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DonationPurpose;
