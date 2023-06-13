import React, { useContext } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Items } from './Items'
// import {products} from "./Product";
import { CartContext } from './AddItem';

const ContextCart = () => {

    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext)
    return (
        <>
            {/* heading part */}
            <div className="heading">
                <div className="continue-shopping">
                    <AiOutlineArrowLeft className='arrow-icon' />
                    <h5>continue shopping</h5>
                </div>
                <div className="cart-icon">
                    <FaShoppingCart className='carty' />
                    <p>{totalItem}</p>
                </div>
            </div>
            <hr />

            {/* main heading  */}
            <section className='main-cart-section'>
                <h2 className='heading2'>Shopping cart</h2>
                <p className='total-items'> You have <span className='total-items-count'>{totalItem}</span> items in your cart</p>

                {/* All items added to cart  */}
                <div className="cart-items">
                    <div className="cart-items-container">
                        {/* items below 1 */}
                        <Scrollbars>
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id}{...curItem} />
                                })
                            }

                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total: <span>{totalAmount}</span></h3>
                    <button>Checkout</button>
                    <button className='clear-cart' onClick={clearCart}>Clear cart</button>
                </div>
            </section>
        </>
    )
}

export default ContextCart