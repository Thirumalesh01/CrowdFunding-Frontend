import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';

const campaignData = {
  1: { id: 1, title: 'Mobile Health Clinics', description: 'Fund mobile clinics to provide healthcare in remote Indian villages.', goal: 800000, raised: 450000 },
  2: { id: 2, title: 'Eco-Friendly School Bags', description: 'Support artisans making sustainable school bags for underprivileged kids.', goal: 300000, raised: 180000 },
  3: { id: 3, title: 'Rural Coding Academy', description: 'Train rural youth in coding skills for job opportunities.', goal: 600000, raised: 320000 },
  4: { id: 4, title: 'Solar Water Pumps', description: 'Install solar-powered water pumps for farmers in drought-prone areas.', goal: 700000, raised: 400000 },
  5: { id: 5, title: 'Women’s Craft Collective', description: 'Empower women artisans with a cooperative for handmade goods.', goal: 450000, raised: 280000 },
  6: { id: 6, title: 'Street Children Education', description: 'Build learning centers for street children in urban slums.', goal: 500000, raised: 310000 },
  7: { id: 7, title: 'Organic Seed Bank', description: 'Create a seed bank for organic farmers to preserve biodiversity.', goal: 350000, raised: 200000 },
  8: { id: 8, title: 'Indie Music Festival', description: 'Fund a festival to promote independent musicians in India.', goal: 400000, raised: 250000 },
  9: { id: 9, title: 'Rainwater Harvesting Units', description: 'Install rainwater harvesting systems in water-scarce regions.', goal: 550000, raised: 330000 },
  10: { id: 10, title: 'Sanitation for Schools', description: 'Build toilets in rural schools to improve hygiene.', goal: 650000, raised: 380000 },
  11: { id: 11, title: 'Eco-Friendly Packaging', description: 'Develop biodegradable packaging solutions for small businesses.', goal: 300000, raised: 150000 },
  12: { id: 12, title: 'Digital Literacy Drive', description: 'Teach digital skills to elderly citizens in rural areas.', goal: 400000, raised: 220000 },
  13: { id: 13, title: 'Herbal Medicine Research', description: 'Research and promote traditional herbal remedies.', goal: 500000, raised: 290000 },
  14: { id: 14, title: 'Sports Equipment Fund', description: 'Provide sports gear to underprivileged schools.', goal: 350000, raised: 210000 },
  15: { id: 15, title: 'Waste Recycling Plant', description: 'Set up a small-scale recycling facility in a town.', goal: 600000, raised: 370000 },
  16: { id: 16, title: 'Community Kitchen', description: 'Fund a kitchen to feed homeless populations in cities.', goal: 450000, raised: 260000 },
  17: { id: 17, title: 'Tribal Art Preservation', description: 'Preserve traditional tribal art through workshops.', goal: 300000, raised: 170000 },
  18: { id: 18, title: 'Renewable Energy Startup', description: 'Support a startup developing affordable solar solutions.', goal: 700000, raised: 420000 },
};

const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(campaignData[id]);
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    if (donationAmount && Number(donationAmount) > 0) {
      setCampaign((prev) => ({
        ...prev,
        raised: prev.raised + Number(donationAmount),
      }));
      alert(`Thank you for donating ₹${donationAmount}!`);
      setDonationAmount('');
    }
  };

  if (!campaign) return <Container><h2 className="text-center fadeIn">Campaign not found</h2></Container>;

  return (
    <Container className="py-5 fadeIn">
      <Card className="form-container">
        <Card.Body>
          <Card.Title>{campaign.title}</Card.Title>
          <Card.Text>{campaign.description}</Card.Text>
          <div className="card-raised">
            <strong>Raised:</strong> ₹{campaign.raised.toLocaleString()} / ₹{campaign.goal.toLocaleString()}
          </div>
          <Form onSubmit={handleDonate}>
            <Form.Group className="form-group" controlId="donationAmount">
              <Form.Label>Enter Donation Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                min="1"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Donate
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CampaignDetails;