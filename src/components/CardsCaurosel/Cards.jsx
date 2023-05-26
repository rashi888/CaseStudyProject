import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi"
import './Cards.css';

const Cards = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='sliders'>
      <HiOutlineArrowCircleLeft className='left-arrow' onClick={prevSlide} />
      <HiOutlineArrowCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='image' height="400" className='images' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
