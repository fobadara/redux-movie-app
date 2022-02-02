import { Link } from 'react-router-dom';
import './header.scss';
import avatar from '../../images/person.png';

const Header = () => (
  <header className="header">
    <Link to="/">
      <div className="logo">Movietopia</div>
    </Link>
    <div className="user-img">
      <img src={avatar} alt="User avatar" />
    </div>
  </header>
);

export default Header;
