import React from 'react';
import PropTypes from 'prop-types';

import {
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

  return (
    <>
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
