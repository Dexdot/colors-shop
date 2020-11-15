import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.sidePadding};

  @media (max-width: 990px) {
    padding: 0 ${({ theme }) => theme.tablet.sidePadding};
  }
`;

export default Container;
