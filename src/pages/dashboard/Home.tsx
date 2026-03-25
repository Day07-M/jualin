// import { useEffect, useState } from 'react';
// import { getSession } from '../../lib/get-session';

export default function Home() {
  // const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState<any>(null);
  //
  // useEffect(() => {
  //   getSession().then((data) => {
  //     setUser(data?.user ?? null);
  //     setLoading(false);
  //   });
  // }, []);
  //
  // if (loading) return <p>Loading...</p>
  //
  // if (!user) { return <p>Not Logged In!</p> }

  return (
    <section>
      <h1 className="text-2xl font-bold">Selamat datang</h1>
    </section>
  );
}
