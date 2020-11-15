import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  padding: 24px 0;

  background: #fff;
`;

const logoWidth = '132px';
export const Logo = styled.a`
  display: block;

  @media (max-width: 990px) {
    width: 96px;
  }

  @media (min-width: 991px) {
    min-width: ${logoWidth};
    width: ${logoWidth};
    margin-right: ${({ theme }) =>
      `calc(19.1145833vw - ${theme.sidePadding} - ${logoWidth})`};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 990px) {
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: -24px;

  li {
    margin-left: 24px;
  }
`;

export const NavLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};

  @media (max-width: 1600px) {
    font-size: 12px;
  }

  @media (max-width: 1100px) {
    font-size: 10px;
  }
`;

export const Contact = styled.div`
  margin-left: auto;
  margin-right: 6vw;
  line-height: 1;

  @media (max-width: 1600px) {
    margin-right: 40px;
  }

  @media (max-width: 990px) {
    display: none;
  }

  a {
    display: block;
    margin-bottom: 2px;

    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.black};
  }

  button {
    opacity: 0.3;
    font-size: 14px;
    color: ${({ theme }) => theme.black};
  }
`;

export const Bar = styled.ul`
  line-height: 1;
  display: flex;
  margin-left: -24px;

  @media (max-width: 990px) {
    display: none;
  }

  li {
    margin-left: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
  }
`;

export const BarIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  width: 24px;
  height: 24px;

  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.black};

  border-radius: 50%;
  background: ${({ theme }) => theme.green};

  @media (min-width: 991px) {
    margin-left: 24px;
  }
`;

export const ButtonBurger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;

  @media (min-width: 991px) {
    display: none;
  }
`;
