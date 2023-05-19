import React from 'react'
import "../styles/UserProfile.css"
import { Link } from 'react-router-dom'
import { BiUserCircle } from "react-icons/bi"
import { RiShoppingCartFill } from "react-icons/ri"
import { RiHeartLine } from "react-icons/ri"
import { RiSettings2Fill } from "react-icons/ri"
import { FiPower } from "react-icons/fi"

const UserProfile = () => {
    return (
        <>
            <div className="container">
                <div className="leftSidebar">
                    <img id='userImg' src="https://tse3.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&P=0" alt="" />
                    <Link> <h6 className='headings'> <BiUserCircle id='icon1' />  My Account</h6></Link>
                    <Link><h6 className='headings'> <RiShoppingCartFill id='icon2' /> Order History</h6></Link>
                    <Link to="/cart"><h6 className='headings'> <RiHeartLine id='icon3' />Wishlist</h6></Link>
                    <Link><h6 className='headings'> <RiSettings2Fill id='icon4' /> Preferences</h6></Link>
                    <Link><h6 className='headings'> <FiPower id='icon5' /> Log Out</h6></Link>
                </div>
                <div className="rightSidebar">
                    <h2>User Profile</h2>
                    <label for="name" className="form-label label">User Name</label>
                    <input type="text" className="form-control input" id='name' placeholder='Your Name' />

                    <label for="email" className="form-label label">Email Address</label>
                    <input type="email" className="form-control input" id='email' placeholder='Type Email' />

                    <label for="number" className="form-label label">Mobile Number</label>
                    <input type="text" className="form-control input" id='number' placeholder='Mobile Number' />

                    <label for="address1" className="form-label label">Home Address1</label> <br />
                    <textarea name="address1" id="address1" cols="55" rows="3"></textarea> <br />

                    <label for="address2" className="form-label label">Home Address2</label> <br />
                    <textarea name="address2" id="address2" cols="55" rows="3"></textarea> <br />

                    <label for="city" className="form-label label">City</label>
                    <input type="text" className="form-control input" id='city' placeholder='City' />
                    <label for="postal" className="form-label label">Postal Code</label>
                    <input type="text" className="form-control input" id='postal' placeholder='Postal Code' />
                    <label for="country" className="form-label label">Country</label>
                    <input type="text" className="form-control input" id='country' placeholder='Country' />


                    <button type="button" className="btn btn-primary mt-5">Save Changes</button>
                </div>
            </div>
        </>
    )
}

export default UserProfile