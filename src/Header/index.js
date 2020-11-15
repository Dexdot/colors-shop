import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Inner, Logo, ButtonCart, ButtonBurger } from './styled';
import Container from '../ui/Container';
import MenuBar from '../MenuBar';
import burger from './burger.svg';
import logo from './logo.svg';

const Header = ({ toggleMenu }) => (
  <Wrapper>
    <Container>
      <Inner>
        <ButtonBurger type="button" onClick={toggleMenu}>
          <img src={burger} alt="Menu" />
        </ButtonBurger>
        <Logo href="/">
          <img src={logo} alt="Colors logo" />
        </Logo>
        <MenuBar desktop />
        <ButtonCart type="button">0</ButtonCart>
      </Inner>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default Header;
