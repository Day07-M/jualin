import { Link } from 'react-router-dom';

import '../styles/components/Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/calendar">Kalender</Link></li>
          <li><Link to="/tasks">Task</Link></li>
          <li><Link to="/reports">Laporan</Link></li>
          <li><Link to="/payments">Pembayaran</Link></li>
          <li><Link to="/settings">Pengaturan</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
