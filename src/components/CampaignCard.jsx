import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const CampaignCard = ({ campaign }) => {
  return (
    <Card className="fadeIn">
      <Card.Body>
        <Card.Title>{campaign.title}</Card.Title>
        <Card.Text>{campaign.description}</Card.Text>
        <ProgressBar raised={campaign.raised} goal={campaign.goal} />
        <div className="card-raised">
          <strong>Raised:</strong> ₹{campaign.raised.toLocaleString()} / ₹{campaign.goal.toLocaleString()}
        </div>
        <Button as={Link} to={`/campaign/${campaign.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};
CampaignCard.propTypes = {
  campaign: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    raised: PropTypes.number.isRequired,
    goal: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CampaignCard;
