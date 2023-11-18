import { Link } from "react-scroll";
import Button from "../layout/Button";


const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <span></span>
            <h1>GREENWORLDAWARE</h1>
          </div>
          <nav>
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
          <div>
            <Button title="Masuk" />
            <Button title="Daftar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
