import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '10px 20px', background: '#333', color: '#fff' }}>
      <h1>Movie Browser</h1>
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
        <Link to="/favorites" style={{ color: '#fff' }}>Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
