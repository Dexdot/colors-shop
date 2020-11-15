/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import styled from 'styled-components';
import close from './close.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const ButtonClose = (props) => (
  <Button {...props}>
    <img src={close} alt="Закрыть" />
  </Button>
);

export default ButtonClose;
