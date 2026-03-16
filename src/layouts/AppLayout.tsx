import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function AppLayout() {
  return (
    <div className="App">
      <Header /> 
      <main className="content">
        <Sidebar /> 
        <div className="page">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
