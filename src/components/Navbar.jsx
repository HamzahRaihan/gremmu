import Button from '../layout/Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between p-5 px-5 bg-white w-full shadow fixed">
          <div className="logo">
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" className="max-[980px]:hidden" alt="gwa logo" />
            <img src="https://raw.githubusercontent.com/Skilvul-FS13/Mobile-Responsive-Website/master/img/logo3.png" className="hidden max-[980px]:block" width={50} alt="logo" />
          </div>
          <nav className="flex flex-row items-center text-slate-800 font-bold gap-8 max-[980px]:hidden">
            <NavLink to="beranda" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Beranda
            </NavLink>
            <NavLink to="tentang" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Tentang Kami
            </NavLink>
            <NavLink to="berita" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Berita
            </NavLink>
            <NavLink to="petisi" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Petisi
            </NavLink>
            <NavLink to="komunitas" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Komunitas
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Button type="masuk" title="Masuk" />
            <Button type="daftar" title="Daftar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
