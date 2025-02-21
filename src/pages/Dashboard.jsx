import { Container, Card, Button } from 'react-bootstrap';

const userData = {
  name: 'Thirumalesh',
  email: 'thirumalesh.k@example.com',
  joined: 'February 2025',
};

const Dashboard = () => {
  return (
    <Container className="py-5 fadeIn">
      <Card className="form-container mb-4">
        <Card.Body>
          <Card.Title>Your Profile</Card.Title>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Joined:</strong> {userData.joined}</p>
          <Button variant="primary" className="w-100">Edit Profile</Button>
        </Card.Body>
      </Card>
      <Card className="form-container mb-4">
        <Card.Body>
          <Card.Title>Your Campaigns</Card.Title>
          <p>No campaigns created yet.</p>
        </Card.Body>
      </Card>
      <Card className="form-container mb-4">
        <Card.Body>
          <Card.Title>Your Donations</Card.Title>
          <p>You haven’t made any donations yet.</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;