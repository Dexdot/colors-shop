import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from './Modal';
import MenuBar from './MenuBar';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 40px;
`;

const Menu = ({ open, toggleMenu }) => (
  <Modal title="Меню" open={open} toggleModal={toggleMenu}>
    <MenuContainer>
      <MenuBar />
    </MenuContainer>
  </Modal>
);

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Menu;
