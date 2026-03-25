import { authClient } from '../../lib/auth-client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authClient.signUp.email({
      email,
      password,
      name: "New User",
      callbackURL: "/sign-in"
    }, { 
      onRequest: () => { alert("Requesting...")}, 
      onSuccess: () => { alert("Success!") }, 
      onError: (ctx) => { alert("Failed..." + ctx.error.message) }, 
    });
  };

  return (
    <section className="auth-container">
      <h1>Selamat datang di Jualin</h1>
      <h2>Register</h2>
      <form onSubmit={handleSignUp}>
        <label for="email">Email</label>  
        <input 
          type="email" name="email" value={email} placeholder="budi@mail.com" 
          onChange={ (e) => setEmail(e.target.value) }
        />
        <label for="password">Password</label>  
        <input 
          type="password" name="password" value={password} placeholder="***********"
          onChange={ (e) => setPassword(e.target.value) } />
        <p>Sudah memiliki akun? <Link to="/sign-in">Login.</Link></p>
        <button type="submit">Registrasi</button>
      </form>
    </section>
  );
}
