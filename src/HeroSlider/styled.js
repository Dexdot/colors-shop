import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 29.166%;
  }

  .swiper-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;

    border-radius: 16px;
    background: rgba(0, 0, 0, 0.4);

    z-index: 2;
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
  }

  .swiper-pagination-bullet {
    margin: 0 4px;
    width: 6px;
    height: 6px;

    cursor: pointer;
    border-radius: 50%;
    background: #fff;
    opacity: 0.2;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.green};
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 400;
  font-size: 3.75vw;
  margin-bottom: 24px;
`;

export const Text = styled.div`
  position: relative;
  z-index: 2;

  line-height: 1.3;
  letter-spacing: 0.02em;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-align: center;

  display: block;
  max-width: 29.5em;
`;
