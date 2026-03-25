import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <main className="content">
      <Outlet />
    </main>
  );
}
