import styled, { css } from 'styled-components';

export const StyledDropdown = styled.div`
  font-size: 12px;
  width: 23.33em;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 10px;
    width: 20em;
  }
`;

export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-align: right;

  ${({ active }) =>
    active &&
    css`
      padding: 1.33em 2em;
    `}

  &:focus + ul {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.06);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const ListItem = styled.li`
  display: block;
  padding: 1.33em 2em;
  background: ${({ active, theme }) => (active ? theme.green : '#fff')};
`;
