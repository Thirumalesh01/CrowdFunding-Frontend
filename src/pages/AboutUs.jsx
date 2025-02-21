import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="about-us fadeIn">
      <h2 className="text-center mb-4">About CrowdFund India</h2>
      <p>
        CrowdFund India is a platform dedicated to turning dreams into reality by connecting passionate creators with generous supporters. Crowdfunding has revolutionized the way individuals and communities fund projects, offering an alternative to traditional financing methods. Whether it’s a startup, a social cause, or a creative endeavor, we provide the tools to make it happen.
      </p>
      <p>
        Our mission is to empower every visionary in India, from rural artisans to urban innovators, by providing a space where their ideas can find backing. We believe in the power of collective support—small contributions from many can lead to big changes. With a focus on transparency and trust, we ensure that every campaign is a step toward a brighter future.
      </p>
      <p>
        Since our inception, we’ve helped countless projects come to life, from sustainable farming initiatives to educational programs for underprivileged children. By fostering a community of backers and creators, CrowdFund India is more than just a platform—it’s a movement to democratize funding and inspire innovation across the nation.
      </p>
    </Container>
  );
};

export default AboutUs;