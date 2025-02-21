import { Container, Form, Button } from 'react-bootstrap';

const CreateCampaign = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Campaign created');
  };

  return (
    <Container className="py-5">
      <Form className="form-container fadeIn" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Launch Your Campaign</h2>
        <Form.Group className="form-group" controlId="title">
          <Form.Label>Campaign Title</Form.Label>
          <Form.Control type="text" placeholder="Enter campaign title" required />
        </Form.Group>
        <Form.Group className="form-group" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Describe your campaign" required />
        </Form.Group>
        <Form.Group className="form-group" controlId="goal">
          <Form.Label>Funding Goal (₹)</Form.Label>
          <Form.Control type="number" placeholder="Enter goal amount" min="1" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Create Campaign
        </Button>
      </Form>
    </Container>
  );
};

export default CreateCampaign;