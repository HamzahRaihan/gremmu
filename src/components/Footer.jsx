import { FaXTwitter, FaSquareFacebook, FaDiscord, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-[1512px] h-[345px] items-center justify-end gap-[20px] px-0 py-[64px] relative bg-[#11bb60] rounded-[30px_30px_0px_0px]">
      <div className="flex flex-col w-[1280px] items-start gap-[20px] px-[32px] py-0 relative flex-[0_0_auto]">
        <div className="flex items-start justify-between px-[30px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[247px] h-[142px] items-start relative">
            <div className="relative w-[177px] h-[49px] bg-[#ffffff] rounded-[8px] overflow-hidden">
              <div className="inline-flex flex-col items-center gap-[10px] relative top-[-5px]">
                <img className="relative w-[177px] h-[58px]" alt="Greenworldaware" src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/GreenWorldAware-2%201.png?updatedAt=1696991576040" />
              </div>
            </div>
            <p className="relative flex-1 self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-[12px] tracking-[0] leading-[18px]">
              Melalui artikel informatif, tips praktis, dan keterlibatan komunitas, kami bertujuan untuk memberdayakan individu untuk memberikan dampak yang berarti terhadap planet kita.
            </p>
          </div>
          <div className="flex-col w-[247px] gap-[10px] flex items-start relative">
            <div className="inline-flex h-[29px] items-center justify-center gap-[6px] relative">
              <div className="relative w-[110px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#ffffff] text-[16px] text-center tracking-[0] leading-[24px]">Kontak Kami</div>
            </div>
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-[12px] text-center tracking-[0] leading-[18px] whitespace-nowrap">+62 8912-3456</div>
              <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-[12px] text-center tracking-[0] leading-[18px] whitespace-nowrap">contactus@gmail.com</div>
              <div className="relative self-stretch w-full h-[12px]" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-[24px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff]">
          <div className="flex flex-col w-[524px] items-start gap-[8px] relative">
            <div className="relative self-stretch w-full h-[12px]">
              <p className="absolute h-[11px] -top-px left-[26px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff] text-[11px] tracking-[0] leading-[11px] whitespace-nowrap">© 2023 - Copyright - FS13</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaXTwitter className="relative w-[24px] h-[24px] text-[#ffffff] hover:text-[#8a928e] cursor-pointer" />
            <FaSquareFacebook className="relative w-[24px] h-[24px] text-[#ffffff] hover:text-[#8a928e] cursor-pointer" />
            <FaDiscord className="relative w-[24px] h-[24px] text-[#ffffff] hover:text-[#8a928e] cursor-pointer" />
            <FaInstagram className="relative w-[24px] h-[24px] text-[#ffffff] hover:text-[#8a928e] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
