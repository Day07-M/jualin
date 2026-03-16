import { Outlet } from 'react-router-dom';

import '../styles/layouts/Auth.scss';

export default function AppLayout() {
  return (
    <main className="content">
      <Outlet />
    </main>
  );
}
