import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container className="navbar-container">
        <Link to="/" className="navbar-brand">CrowdFund</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/create-campaign" className="nav-link">Create Campaign</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;