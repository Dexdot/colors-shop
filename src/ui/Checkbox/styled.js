import styled from 'styled-components';

export const StyledCheckbox = styled.div`
  padding-left: 40px;
  min-height: 24px;
  display: flex;
  align-items: center;

  line-height: 1;
  transition: 0.25s ease;
  position: relative;
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  cursor: pointer;
`;

export const Rect = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 40px;
  height: 24px;

  border-radius: 40px;

  background: ${({ theme, checked }) => (checked ? theme.green : '#f2f2f2')};
  transition: 0.25s ease;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: ${({ checked }) =>
      checked ? `translate(calc(32px - 100%), -50%)` : `translate(8px, -50%)`};

    display: block;
    width: 10px;
    height: 10px;

    transition: 0.25s ease;
    border-radius: 50%;
    background: ${({ theme }) => theme.black};
  }
`;

export const Text = styled.span`
  display: inline-block;
  padding-left: 12px;
  cursor: pointer;

  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;
