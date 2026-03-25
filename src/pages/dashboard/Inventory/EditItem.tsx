import { BACKEND_API } from '../../../../config';

import { Link, useNavigate } from "react-router-dom";  
import { useState } from "react";

export default function EditItem() {
  // type Product = {
  //   title: string;
  //   qty: number;
  // }

  const navigate = useNavigate();

  const [title , setTitle] = useState<string>("");
  const [qty , setQty] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BACKEND_API}/inventory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title, qty: Number(qty) })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }
      console.log('Created', data);
      //cnd: Comment ini kalo gmw redirect ke inventory abis submit
      navigate('/inventory');
      
    } catch(err) {
      console.error(err); 
    }
  };

  return (
    <section>
      <h1>Edit Produk</h1>
      <form onSubmit={handleSubmit}>
        <label for="title">Nama Barang</label>  
        <input 
          type="text" name="title" value={title} placeholder="Nasi" required 
          onChange={ (e) => setTitle(e.target.value) }
        />
        <label for="qty">Jumlah</label>  
        <input 
          type="number" name="qty" value={qty} placeholder="0" required
          onChange={ (e) => setQty(Number(e.target.value)) } />
        <button type="submit">Tambahkan</button>
        <Link to="/inventory"><button type="button">Kembali</button></Link>
      </form>
    </section>
  );
}
