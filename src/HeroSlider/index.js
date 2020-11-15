import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, A11y, Lazy } from 'swiper';
import 'swiper/swiper.scss';
import {
  SliderContainer,
  Placeholder,
  Slide,
  Image,
  Title,
  Text
} from './styled';

SwiperCore.use([Pagination, A11y, Lazy]);

class HeroSlider extends React.Component {
  state = {
    slides: [],
    isLoaded: false
  };

  componentDidMount() {
    this.fetchSlides();
  }

  fetchSlides = () => {
    const url = 'https://run.mocky.io/v3/6db60af7-ef46-4418-a1c3-045a2b7fd57c';

    fetch(url)
      .then((res) => res.json())
      .then(({ data }) => {
        this.setState({ slides: [...data], isLoaded: true });
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error(err);
      });
  };

  render() {
    const { state } = this;

    const Slider = (
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        preloadImages={false}
        lazy
      >
        {state.slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide>
              <Image
                className="swiper-lazy"
                data-src={slide.image}
                alt={slide.title}
              />
              <Text>
                <Title>{slide.title}</Title>
                <p>{slide.text}</p>
              </Text>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    );

    return (
      <SliderContainer>
        {state.isLoaded ? Slider : <Placeholder />}
      </SliderContainer>
    );
  }
}

export default HeroSlider;
