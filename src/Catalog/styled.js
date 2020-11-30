import styled from 'styled-components';

export const StyledCatalog = styled.section`
  padding: 72px 0 24vh;
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 990px) {
    display: block;
  }
`;

export const Aside = styled.aside`
  @media (min-width: 991px) {
    min-width: 200px;
    margin-right: 5.41vw;
  }

  @media (max-width: 990px) {
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  margin-left: auto;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Count = styled.p`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
