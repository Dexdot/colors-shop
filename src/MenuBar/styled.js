import styled from 'styled-components';

export const Nav = styled.nav`
  line-height: 1;

  @media (max-width: 990px) {
    margin-bottom: 24px;
  }
`;

export const NavDesktop = styled(Nav)`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;

  @media (min-width: 991px) {
    align-items: center;
    margin-left: -24px;
  }

  @media (max-width: 990px) {
    flex-direction: column;
    margin-top: -16px;
  }

  li {
    @media (min-width: 991px) {
      margin-left: 24px;
    }

    @media (max-width: 990px) {
      margin-top: 16px;
    }
  }
`;

export const NavLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};

  @media (min-width: 991px) and (max-width: 1600px) {
    font-size: 12px;
  }

  @media (min-width: 991px) and (max-width: 1100px) {
    font-size: 10px;
  }
`;

const Contact = styled.div`
  line-height: 1;

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

export const ContactDesktop = styled(Contact)`
  margin-left: auto;
  margin-right: 6vw;

  @media (max-width: 1600px) {
    margin-right: 40px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const ContactMobile = styled(Contact)`
  order: 1;
`;

const Bar = styled.ul`
  line-height: 1;
  display: flex;
  margin-left: -24px;

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

export const BarDesktop = styled(Bar)`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const BarMobile = styled(Bar)`
  margin-top: auto;
  margin-bottom: 24px;
`;

export const BarIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
