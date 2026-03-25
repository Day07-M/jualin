import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getSession } from '../lib/get-session';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function AppLayout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    getSession().then((data) => {
      setUser(data?.user ?? null);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>

  if (!user) { return <p>Not Logged In!</p> }

  return (
    <div className="flex flex-col h-screen">
      <Header /> 
      <main className="flex flex-1">
        <Sidebar /> 
        <div className="flex p-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
