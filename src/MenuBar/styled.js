import styled from 'styled-components';

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
  margin-top: 40px;
`;

const Bar = styled.ul`
  line-height: 1;
  display: flex;

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
  margin-left: -24px;

  @media (max-width: 990px) {
    display: none;
  }

  li {
    margin-left: 24px;
  }
`;

export const BarMobile = styled(Bar)`
  flex-direction: column;
  margin-top: -16px;

  li {
    margin-top: 16px;
  }
`;

export const BarIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
