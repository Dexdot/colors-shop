import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, Input, Rect, Text } from './styled';

function Checkbox({ text, isChecked, onChange, name }) {
  return (
    <StyledCheckbox>
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(name)}
      />
      <Rect checked={isChecked} />
      {text && <Text>{text}</Text>}
    </StyledCheckbox>
  );
}

Checkbox.defaultProps = {
  text: '',
  name: ''
};

Checkbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
