import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

function Sidebar() {
  return (
    <div className="p-4 fixed z-50 right-0 h-screen w-96 max-[400px]:w-72 max-[300px]:w-52 bg-white ">
      <nav className="flex flex-col text-slate-800 font-bold gap-8">
        <NavLink to="/" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Beranda
        </NavLink>
        <NavLink to="tentang" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Tentang Kami
        </NavLink>
        <NavLink to="berita" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Berita
        </NavLink>
        <NavLink to="petisi" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Petisi
        </NavLink>
        <NavLink to="komunitas" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Komunitas
        </NavLink>
      </nav>
      <div className="flex pt-5 gap-4">
        <Link to="/login">
          <Button type="masuk" title="Masuk" />
        </Link>
        <Link to="/register">
          <Button type="daftar" title="Daftar" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
