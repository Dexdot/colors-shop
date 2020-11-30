import styled from 'styled-components';

export const StyledProduct = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    padding-bottom: 32px;
  }

  &:hover .button-add {
    opacity: 1;
  }
`;

export const ImageWrap = styled.a`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.black};

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72%;
  height: 72%;
  object-fit: contain;
`;

export const Title = styled.a`
  font-weight: 300;
  line-height: 1.12;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.black};

  display: block;
  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.b`
  font-weight: 600;
  line-height: 1;
`;

export const ButtonAdd = styled.button`
  display: block;
  width: 80px;
  height: 32px;
  position: relative;

  opacity: 0;
  transition: 0.25s ease;
  transform-origin: 50% 50%;
  border-radius: 8px;
  background: ${({ theme }) => theme.green};

  @media (max-width: 768px) {
    width: 40px;
    height: 24px;
    border-radius: 6px;
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.black};
  }

  &::before {
    width: 2px;
    height: 12px;

    @media (max-width: 768px) {
      height: 8px;
    }
  }

  &::after {
    width: 12px;
    height: 2px;

    @media (max-width: 768px) {
      width: 8px;
    }
  }
`;
