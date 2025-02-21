import { Container, Row, Col } from 'react-bootstrap';
import CampaignCard from '../components/CampaignCard';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const initialCampaigns = [
  { id: 1, title: 'Mobile Health Clinics', description: 'Fund mobile clinics to provide healthcare in remote Indian villages.', goal: 800000, raised: 450000 },
  { id: 2, title: 'Eco-Friendly School Bags', description: 'Support artisans making sustainable school bags for underprivileged kids.', goal: 300000, raised: 180000 },
  { id: 3, title: 'Rural Coding Academy', description: 'Train rural youth in coding skills for job opportunities.', goal: 600000, raised: 320000 },
  { id: 4, title: 'Solar Water Pumps', description: 'Install solar-powered water pumps for farmers in drought-prone areas.', goal: 700000, raised: 400000 },
  { id: 5, title: 'Women’s Craft Collective', description: 'Empower women artisans with a cooperative for handmade goods.', goal: 450000, raised: 280000 },
  { id: 6, title: 'Street Children Education', description: 'Build learning centers for street children in urban slums.', goal: 500000, raised: 310000 },
  { id: 7, title: 'Organic Seed Bank', description: 'Create a seed bank for organic farmers to preserve biodiversity.', goal: 350000, raised: 200000 },
  { id: 8, title: 'Indie Music Festival', description: 'Fund a festival to promote independent musicians in India.', goal: 400000, raised: 250000 },
  { id: 9, title: 'Rainwater Harvesting Units', description: 'Install rainwater harvesting systems in water-scarce regions.', goal: 550000, raised: 330000 },
  { id: 10, title: 'Sanitation for Schools', description: 'Build toilets in rural schools to improve hygiene.', goal: 650000, raised: 380000 },
  { id: 11, title: 'Eco-Friendly Packaging', description: 'Develop biodegradable packaging solutions for small businesses.', goal: 300000, raised: 150000 },
  { id: 12, title: 'Digital Literacy Drive', description: 'Teach digital skills to elderly citizens in rural areas.', goal: 400000, raised: 220000 },
  { id: 13, title: 'Herbal Medicine Research', description: 'Research and promote traditional herbal remedies.', goal: 500000, raised: 290000 },
  { id: 14, title: 'Sports Equipment Fund', description: 'Provide sports gear to underprivileged schools.', goal: 350000, raised: 210000 },
  { id: 15, title: 'Waste Recycling Plant', description: 'Set up a small-scale recycling facility in a town.', goal: 600000, raised: 370000 },
  { id: 16, title: 'Community Kitchen', description: 'Fund a kitchen to feed homeless populations in cities.', goal: 450000, raised: 260000 },
  { id: 17, title: 'Tribal Art Preservation', description: 'Preserve traditional tribal art through workshops.', goal: 300000, raised: 170000 },
  { id: 18, title: 'Renewable Energy Startup', description: 'Support a startup developing affordable solar solutions.', goal: 700000, raised: 420000 },
];

const Home = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);

  const handleSearch = (query) => {
    const filtered = initialCampaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(query.toLowerCase()) ||
      campaign.description.toLowerCase().includes(query.toLowerCase())
    );
    setCampaigns(filtered);
  };

  return (
    <Container className="py-5">
  <Row className="mb-4 align-items-center campaign-header">
  <Col xs={12} md={6} className="text-md-left">
    <h1 className="fadeIn mb-0">Discover Campaigns</h1>
  </Col>
  <Col xs={12} md={6} className="text-md-right">
    <SearchBar onSearch={handleSearch} />
  </Col>
</Row>


      <div className="campaign-grid fadeIn">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </Container>
  );
};

export default Home;