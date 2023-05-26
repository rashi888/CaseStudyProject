import React, { useState } from 'react'
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi"
import { SliderData } from '../../components/CardsCaurosel/SliderData';
import "./CardPage.css"

function CardPage({ slides }) {

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
  };

  return (
    <section className='slider'>
      <HiOutlineArrowCircleLeft className='left-arrow' onClick={prevSlide} />
      <HiOutlineArrowCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  )
}

export default CardPage