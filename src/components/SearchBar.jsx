import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form className="search-bar fadeIn" onSubmit={handleSearch}>
      <Form.Control
        type="search"
        placeholder="Search campaigns..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="primary" type="submit">Search</Button>
    </Form>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
