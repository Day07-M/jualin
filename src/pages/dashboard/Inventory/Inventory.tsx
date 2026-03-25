import { BACKEND_API } from '../../../../config';

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";  

import plusIcon from "@/assets/svg/plus.svg";

async function delItem(id: any) {
  try {
    const res = await fetch(`${BACKEND_API}/inventory/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!res.ok) throw new Error('Failed to remove');

    console.log(`Deleted item with ID: ${id}`);

  } catch(err) {
    console.error(err);
  }
}

async function editItem(id: any) {
  try {
    const res = await fetch(`${BACKEND_API}/inventory/${id}`, {
      method: 'PUT',
      credentials: 'include',
    });

    if (!res.ok) throw new Error('Failed to remove');

    console.log(`Deleted item with ID: ${id}`);

  } catch(err) {
    console.error(err);
  }
}

export default function Inventory() {
  type Item = {
    id: string;
    title: string;
    qty: number;
  }
  const [items, setItem] = useState<Item[]>([]);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${BACKEND_API}/inventory`, {
          credentials: 'include',
        });

        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>

  if (items.length === 0) { 
    return <p>No Items</p>
  }

  return (
    <section className="inventory-container">
      <h1>Inventori</h1>
      <table>
        <tr>
          <th className='w-lg'>Nama</th>
          <th>Harga</th>
          <th>Jumlah</th>
        </tr>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>{item.qty}</td>
            <td><button className="m-3 p-2 rounded border-2">Edit</button></td>
            <td><button onClick={() => delItem(item.id)} className="m-3 p-2 rounded text-white bg-red-500">Hapus</button></td>
          </tr>
        ))}
      </table>
      <Link to="/inventory/add" className="btn-primary">
        <img src={plusIcon} />
        <p>Tambahkan</p>
      </Link>
    </section>
  );
}
