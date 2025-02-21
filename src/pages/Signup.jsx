import { Container, Form, Button } from 'react-bootstrap';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted');
  };

  return (
    <Container className="py-5">
      <Form className="form-container fadeIn" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Join CrowdFund India</h2>
        <Form.Group className="form-group" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" required />
        </Form.Group>
        <Form.Group className="form-group" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="form-group" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Create a password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;