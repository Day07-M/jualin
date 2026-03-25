import { Link } from 'react-router-dom';

import user_icon from '../assets/svg/user.svg';

export default function Header() {
  return (
    <header className='flex justify-between p-3 bg-indigo-500 text-white font-medium'>
      <Link to="/" className="logo-container">
        <div>Jualin</div>
      </Link>
      <div className="flex">
        <img src={user_icon} alt='user image' />
        <p>User</p>
      </div>
    </header>
  );
}
