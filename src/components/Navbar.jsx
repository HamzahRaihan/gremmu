import { Link } from "react-scroll";
import Button from "../layout/Button";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 from-backgroundColor to-brightColor shadow">
          <div>
            <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" alt="gwa logo" />
          </div>
          <nav className="hidden md:flex flex-row items-center text-slate-800 font-bold gap-8">
            <Link to="beranda" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Beranda
            </Link>
            <Link to="tentang" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Tentang Kami
            </Link>
            <Link to="berita" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Berita
            </Link>
            <Link to="petisi" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Petisi
            </Link>
            <Link to="komunitas" spy={true} smooth={true} duration={500} className="cursor-pointer">
              Komunitas
            </Link>
          </nav>
          <div className="flex">
            <Button title="Masuk" />
            <Button title="Daftar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
