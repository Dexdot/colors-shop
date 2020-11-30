import React from 'react';
import PropTypes from 'prop-types';
import { StyledDropdown, Button, List, ListItem } from './styled';

function Dropdown({ list, active, onChange }) {
  const keys = Object.keys(list).sort((a) => (a !== active ? 1 : -1));

  return (
    <StyledDropdown>
      <Button active type="button">
        {list[active]}
      </Button>
      <List>
        {keys.map((key) => (
          <ListItem key={key} active={key === active}>
            <Button type="button" onClick={() => onChange(key)}>
              {list[key]}
            </Button>
          </ListItem>
        ))}
      </List>
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  list: PropTypes.objectOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
