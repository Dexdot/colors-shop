import React from 'react';
import {
  Wrapper,
  Inner,
  Logo,
  Nav,
  NavList,
  NavLink,
  ButtonCart,
  ButtonBurger
} from './styled';
import Container from '../ui/Container';
import MenuBar from '../MenuBar';
import burger from './burger.svg';
import logo from './logo.svg';

const Header = () => (
  <Wrapper>
    <Container>
      <Inner>
        <ButtonBurger type="button">
          <img src={burger} alt="Menu" />
        </ButtonBurger>
        <Logo href="/">
          <img src={logo} alt="Colors logo" />
        </Logo>
        <Nav>
          <NavList>
            <li>
              <NavLink href="/">Продукты</NavLink>
            </li>
            <li>
              <NavLink href="/">Цвета</NavLink>
            </li>
            <li>
              <NavLink href="/">Вдохновение</NavLink>
            </li>
            <li>
              <NavLink href="/">Советы</NavLink>
            </li>
            <li>
              <NavLink href="/">Найти магазин</NavLink>
            </li>
          </NavList>
        </Nav>
        <MenuBar desktop />
        <ButtonCart type="button">0</ButtonCart>
      </Inner>
    </Container>
  </Wrapper>
);

export default Header;
