import React from 'react'
import cart from '../../assets/MoreImgs/cart.png'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <>
            {/* // <> border:"0.3px solid lightgray", */}

            <div className="cart" style={{ width: "80%", margin: '2% 10%', textAlign: 'center' }}>
                <img src={cart} alt="" style={{ margin: '0% 2%', marginTop: "-10%", height: '120%', width: "80%" }} />
                <h5 style={{ marginTop: '-14%', fontWeight: '600' }}>ADD ITEMS TO CART AND DO SHOPPING WITH EASE!!!</h5>
                <Link to="/home">  <button type="button" class="btn btn-success" style={{ marginTop: '3%', padding: '8px 25px' }}>Continue Shopping</button></Link>
            </div>
        </>
    )
}

export default Cart