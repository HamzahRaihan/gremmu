import { useEffect, useState } from 'react';
import Companies from './Companies';
import Description from './Description';
import { HeroShapeDesktop, HeroShapeMobile } from '../../components/ui/Shapes';
import Button from '../../layout/Button';
import { Link } from 'react-router-dom';
import NewsCarousel from '../../components/NewsCarousel';
import CTAHomepage from './CTAHomepage';

const Home = () => {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    const updateScreenType = () => {
      if (window.innerWidth >= 980) {
        setScreen('desktop');
      } else {
        setScreen('mobile');
      }
    };

    updateScreenType();

    const handleResize = () => {
      updateScreenType();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="max-w-6xl grid w-full mx-auto md:bg-center grid-cols-2 max-[980px]:grid-cols-1 pt-20 items-center px-5 lg:px-[72px]">
        {screen == 'desktop' ? <HeroShapeDesktop /> : <HeroShapeMobile />}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl max-md:text-2xl font-bold text-black">
            CIPTAKAN <span className="bg-[#11BB60] text-white">LINGKUNGAN</span> BERSIH UNTUK LINGKUNGAN <span className="bg-[#11BB60] text-white">SEHAT</span> BERKELANJUTAN.
          </h1>

          <p className="py-2 text-lg">GreenWorldAware adalah website untuk anda yang sadar lingkungan, memberikan informasi, tips, dan wadah untuk membantu anda membuat kontribusi kebersihan demi bumi yang lebih bersih.</p>
          <div>
            <Link to="/register">
              <Button type="daftar" title="Daftar" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center max-[980px]:order-first">
          <img src="https://raw.githubusercontent.com/Skilvul-FS13/Mobile-Responsive-Website/master/img/hero-picture.png" alt="hero-image" width={500} />
        </div>
      </div>
      <Companies />
      <Description />
      <NewsCarousel />
      <CTAHomepage />
    </>
  );
};

export default Home;
