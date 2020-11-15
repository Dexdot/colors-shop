import styled from 'styled-components';

export const Section = styled.section`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  transition: opacity 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

export const Overlay = styled.button`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  margin-left: auto;

  background: #fff;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0%)' : 'translateX(100%)'};
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.black};
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;
