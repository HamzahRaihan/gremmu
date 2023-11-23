import ButtonFooter from './ButtonFooter';
import { FaXTwitter, FaSquareFacebook, FaDiscord, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full p-4 md:p-20 bg-[#11bb60] rounded-[30px_30px_0px_0px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-col w-full md:w-[524px] items-center md:items-start gap-4 md:gap-8">
          <div className="relative w-[177px] h-[49px] bg-[#ffffff] rounded-[8px] overflow-hidden">
            <div className="inline-flex flex-col items-center gap-2 relative top-[-5px] cursor-pointer">
              <img className="relative w-[177px] h-[50px]" alt="Greenworldaware" src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/GreenWorldAware-2%201.png?updatedAt=1696991576040" />
            </div>
          </div>
          <p className="text-white text-center md:text-left text-sm leading-[18px] md:leading-[18px]">
            Melalui artikel informatif, tips praktis, dan keterlibatan komunitas, kami bertujuan untuk memberdayakan individu untuk memberikan dampak yang berarti terhadap planet kita.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[247px] gap-4 md:gap-8 items-center md:items-start">
          <div className="flex items-center justify-center gap-2">
            <div className="font-bold text-white text-md">Kontak Kami</div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="font-normal text-white text-xs md:text-sm whitespace-nowrap">+62 8912-3456</div>
            <div className="font-normal text-white text-xs md:text-sm whitespace-nowrap">contactus@gmail.com</div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[267px] gap-4 md:gap-8 items-center md:items-start">
          <header className="flex items-center gap-2 bg-transparent">
            <div className="font-bold text-white text-md whitespace-nowrap">Halaman</div>
          </header>
          <div className="flex flex-wrap gap-2 self-stretch items-center">
            <ButtonFooter property1="normal" text="Beranda" />
            <ButtonFooter property1="normal" text="Tentang Kami" />
            <ButtonFooter property1="normal" text="Berita" />
            <ButtonFooter property1="normal" text="Video" />
            <ButtonFooter property1="normal" text="Kuis" />
            <ButtonFooter property1="normal" text="Komunitas" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 md:pt-8 pb-0 px-4 md:px-0 border-t border-white">
        <div className="flex flex-col w-full md:w-[524px] items-center md:items-start gap-2">
          <p className="text-white text-xs md:text-sm text-center md:text-left">© 2023 - Copyright - FS13</p>
        </div>
        <div className="flex gap-4">
          <FaXTwitter className="w-6 h-6 text-white hover:text-[#8a928e] cursor-pointer" />
          <FaSquareFacebook className="w-6 h-6 text-white hover:text-[#8a928e] cursor-pointer" />
          <FaDiscord className="w-6 h-6 text-white hover:text-[#8a928e] cursor-pointer" />
          <FaInstagram className="w-6 h-6 text-white hover:text-[#8a928e] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
