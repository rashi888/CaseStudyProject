import React from 'react'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <>
            <div className="cart" style={{ width: "80%", height: "35em", margin: '80px 150px',textAlign:'center'}}>
                <img src={cart} alt="" style={{ margin: '-65px 180px ' }} />
                <h5 style={{marginTop:'-7%',fontWeight:'600'}}>ADD ITEMS TO CART AND DO SHOPPING WITH EASE!!!</h5>
              <Link to="/home">  <button type="button" class="btn btn-success" style={{marginTop:'3%', padding: '15px 30px'}}>Continue Shopping</button></Link>
            </div>
        </>
    )
}

export default Cart