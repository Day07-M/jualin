import { Link } from 'react-router-dom';
import { authClient } from '../../lib/auth-client';
import { useState } from 'react';

export default function SignIn() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
    }, { 
      onRequest: () => { alert("Requesting...") }, 
      onSuccess: () => { alert("Success!") }, 
      onError: (ctx) => { alert("Failed..." + ctx.error.message) }, 
    });
  };

  return (
    <section className="auth-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label for="email">Email</label>  
        <input 
          type="email" name="email" value={email} placeholder="budi@mail.com" 
          onChange={ (e) => setEmail(e.target.value) }
        />
        <label for="password">Password</label>  
        <input 
          type="password" name="password" value={password} placeholder="***********"
          onChange={ (e) => setPassword(e.target.value) } />
        <p>Lupa password? <Link to="/sign-in">Reset</Link>.</p>
        <button type="action"><Link to="/sign-up">Registrasi</Link></button>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
