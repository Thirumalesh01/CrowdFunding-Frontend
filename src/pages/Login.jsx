import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  return (
    <Container className="py-5">
      <Form className="form-container fadeIn" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Login to CrowdFund India</h2>
        <Form.Group className="form-group" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="form-group" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;