<<<<<<< HEAD
import { ReactNode } from 'react';
import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  children: ReactNode | ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slick {...settings}>{children}</Slick>;
};

export default Slider;
=======
import { ReactNode } from 'react';
import Slick from 'react-slick';

import '~slick-carousel/slick/slick.css';
import '~slick-carousel/slick/slick-theme.css';

interface SliderProps {
  children: ReactNode | ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slick {...settings}>{children}</Slick>;
};

export default Slider;
>>>>>>> cc3c75aefc848c30dc624d2c8efee974e409fdda
