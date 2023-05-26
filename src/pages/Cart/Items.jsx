import React, { useContext } from 'react'
import "./AddItem.css"
import { GrFormAdd } from 'react-icons/gr'
import { MdDelete } from "react-icons/md"
import { HiMinusSm } from "react-icons/hi"
import { CartContext } from './AddItem'

export const Items = ({ id, description, title, img, price, quantity }) => {

    const { removeItem, increment, decrement } = useContext(CartContext)

    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="title">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    <HiMinusSm className='fas fa-minus minus' onClick={() => decrement(id)} />
                    <input type="text" placeholder={quantity} />
                    <GrFormAdd className='fas fa-plus add' onClick={() => increment(id)} />
                </div>

                <div className="price">
                    <h3>{price}</h3>
                </div>

                <div className="remove-item">
                    <MdDelete onClick={() => removeItem(id)} />
                </div>
            </div>
            <hr />
        </>
    )
}
