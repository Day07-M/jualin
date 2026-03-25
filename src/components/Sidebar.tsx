import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="flex h-full bg-indigo-500">
      <nav className="flex flex-col">
        <Link to="/" className="nav-link">Beranda</Link>
        <Link to="/order" className="nav-link">Pesan</Link>
        <Link to="/payments" className="nav-link">Pembayaran</Link>
        <Link to="/inventory" className="nav-link">Inventori</Link>
        <Link to="/settings" className="nav-link">Pengaturan</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
