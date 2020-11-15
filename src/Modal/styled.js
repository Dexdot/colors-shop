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
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
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
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};

  @media (max-width: 990px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  padding: 40px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    padding: 40px ${({ theme }) => theme.sidePadding};
  }
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 24px;
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
