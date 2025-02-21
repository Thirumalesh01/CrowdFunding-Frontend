import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>© 2025 CrowdFund India. Developed by @Thirumalesh, Building Bright Future Together.</p>
        <p></p>
        <div>
          <a href="#">About Us</a> | 
          <a href="#">Contact</a> | 
          <a href="#">Privacy Policy</a> | 
          <a href="#">Terms of Service</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;