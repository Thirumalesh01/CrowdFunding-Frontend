import { ProgressBar as BSProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProgressBar = ({ raised, goal }) => {
  const percentage = (raised / goal) * 100;
  return <BSProgressBar now={percentage} label={`${percentage.toFixed(0)}%`} />;
};
ProgressBar.propTypes = {
  raised: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
};

export default ProgressBar;
