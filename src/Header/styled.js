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
