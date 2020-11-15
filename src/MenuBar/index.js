import React from 'react';
import PropTypes from 'prop-types';

import {
  Nav,
  NavDesktop,
  NavList,
  NavLink,
  ContactDesktop,
  ContactMobile,
  BarDesktop,
  BarMobile,
  BarIcon
} from './styled';
import search from './search.svg';
import user from './user.svg';
import heart from './heart.svg';

const MenuBar = ({ desktop }) => {
  const Contact = desktop ? ContactDesktop : ContactMobile;
  const Bar = desktop ? BarDesktop : BarMobile;
  const StyledNav = desktop ? NavDesktop : Nav;

  return (
    <>
      <StyledNav>
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
      </StyledNav>
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
    </>
  );
};

MenuBar.defaultProps = {
  desktop: false
};

MenuBar.propTypes = {
  desktop: PropTypes.bool
};

export default MenuBar;
