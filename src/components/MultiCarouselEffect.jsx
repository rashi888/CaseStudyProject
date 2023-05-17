import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from 'react-router-dom'
import "../styles/MultiCarouselEffect.css"

const MultiCarouselEffect = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="App">
        <Carousel responsive={responsive}>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Deluxe Room</h2>
              <p className='price'>20,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
                
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Super Deluxe Room</h2>
              <p className='price'>30,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg" alt="" />
              <h2>Deluxe Room</h2>
              <p className='price'>20,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Deluxe Room</h2>
              <p className='price'>20,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Suite Room</h2>
              <p className='price'>10,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Deluxe Room</h2>
              <p className='price'>25,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Queen Size Room</h2>
              <p className='price'>40,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Suite Room</h2>
              <p className='price'>10,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Suite Room</h2>
              <p className='price'>10,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
            <div className="card">
              <img className='product--image' src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h2>Suite Room</h2>
              <p className='price'>20,000/per Night</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
              <NavLink to="/Reservation">
                   <button className='Img-butt'>Book Now</button>     
              </NavLink>
              </p>
            </div>
        </Carousel>;
      </div>
    </>
  )
}

export default MultiCarouselEffect


