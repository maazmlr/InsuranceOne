import React from 'react';
import { Carousel } from 'antd';
import partner1 from '../assets/partner1.png'

const Slider = () => (
  <Carousel
   autoplay
  dots={false}
  slidesToShow={4}
  >
         <img src={partner1} alt="" className='slider-pic' />
         <img src={partner1} alt="" className='slider-pic' />
         <img src={partner1} alt="" className='slider-pic' />
         <img src={partner1} alt="" className='slider-pic' />
         <img src={partner1} alt="" className='slider-pic' />
         <img src={partner1} alt="" className='slider-pic' />

  </Carousel>
);
export default Slider;