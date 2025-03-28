import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1rem',
    borderBottom: '1px solid #ccc'
  }}>
    <img src="../images/logo.jpg" alt="LMS Logo" style={{ height: '50px' }} />
    <nav>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/courses" style={{ margin: '0 1rem' }}>Courses</Link>
      <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
    </nav>
  </header>
);
export default Header;