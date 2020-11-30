import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from './ui/Checkbox';

const List = styled.ul`
  display: block;

  li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

function CatalogFilters({ filters, onChange }) {
  const keys = Object.keys(filters);

  return (
    <List>
      {keys.map((key) => (
        <li key={key}>
          <Checkbox
            name={key}
            text={filters[key].text}
            isChecked={filters[key].isChecked}
            onChange={onChange}
          />
        </li>
      ))}
    </List>
  );
}

CatalogFilters.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired
};

export default CatalogFilters;
