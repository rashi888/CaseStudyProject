import React from 'react'
import "../styles/Front.css";
import { BsCart3 } from "react-icons/bs";
// import model from "../assets/model.png"
import model2 from "../assets/model2.png"

const Front = () => {
  return (
    <div>
      <div className='container'>
        <div className="rightContent">
          <img className='img' src={model2} alt="" />
        </div>
        <div className="leftContent">
          <button type="button" class="btn btn-info">Sale 80%</button>
          <h1>Shop All You Want With Ease</h1>
          <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <button type="button" class="btn btn-dark"><BsCart3 /> Start Shopping</button>
        </div>

      </div>

    </div>
  )
}

export default Front