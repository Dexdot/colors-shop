import React from 'react';
import {
  Wrapper,
  Inner,
  Logo,
  Nav,
  NavList,
  NavLink,
  Contact,
  Bar,
  BarIcon,
  ButtonCart,
  ButtonBurger
} from './styled';
import Container from '../ui/Container';
import burger from './burger.svg';
import logo from './logo.svg';
import search from './search.svg';
import user from './user.svg';
import heart from './heart.svg';

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
        <Contact>
          <a href="tel:+74952217769">+7 (495) 221-77-69</a>
          <button type="button">Заказать звонок</button>
        </Contact>
        <Bar>
          <li>
            <a href="/">
              <BarIcon src={search} alt="Search" />
            </a>
          </li>
          <li>
            <a href="/">
              <BarIcon src={user} alt="Profile" />
            </a>
          </li>
          <li>
            <a href="/">
              <BarIcon src={heart} alt="Favorite" />
            </a>
          </li>
        </Bar>
        <ButtonCart type="button">0</ButtonCart>
      </Inner>
    </Container>
  </Wrapper>
);

export default Header;
