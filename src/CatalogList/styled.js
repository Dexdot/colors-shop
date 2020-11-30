import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -24px;
  margin-top: -24px;

  @media (max-width: 768px) {
    margin-left: -16px;
  }
`;

export const ListItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 24px;
  margin-top: 24px;

  width: calc(20% - 24px);

  @media (max-width: 1800px) {
    width: calc(25% - 24px);
  }

  @media (max-width: 1200px) {
    width: calc(33.33% - 24px);
  }

  @media (max-width: 768px) {
    margin-left: 16px;
    width: calc(50% - 16px);
  }
`;
