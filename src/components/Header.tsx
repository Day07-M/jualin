import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

function Header() {
  return (
    <header>
      <div className="logo">
        <div>Jualin</div>
      </div>
      <Link to="/profile" className="">
        <div className="profile">
          <img src='@/assets/react.svg' alt='user image' />
          <p>User</p>
        </div>
      </Link>
    </header>
  );
}

export default Header;
