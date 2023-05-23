import React from 'react'
import "./UserProfile.css"
import { Link } from 'react-router-dom'
import { BiUserCircle } from "react-icons/bi"
import { RiShoppingCartFill } from "react-icons/ri"
import { RiHeartLine } from "react-icons/ri"
import { RiSettings2Fill } from "react-icons/ri"
import { FiPower } from "react-icons/fi"

import userIcon from "../../assets/All_Icons/user icon.png"

const UserProfile = () => {
    return (
        <>
            <div className="user-container">
                <div className="lifeside-user">
                    <img src={userIcon} alt="" />
                    <div className="myaccount">
                        <BiUserCircle id='icon1' />
                        <h6 className='headings'>My Account</h6>
                    </div>
                    <div className="myaccount">
                        <RiShoppingCartFill id='icon2' />
                        <h6 className='headings'> Order History</h6>
                    </div>
                    <div className="myaccount">
                        <RiHeartLine id='icon3' />
                        <h6 className='headings'>Wishlist</h6>
                    </div>
                    <div className="myaccount">
                        <RiSettings2Fill id='icon4' />
                        <h6 className='headings'> Preferences</h6>
                    </div>
                    <div className="myaccount">
                        <FiPower id='icon5' />
                        <h6 className='headings'> Log Out</h6>
                    </div>
                    {/* <h6>Order History</h6>
                    <h6>Wishlist</h6>
                    <h6>Preferences</h6>
                    <h6>Logout</h6> */}
                </div>
                <div className="rightside-user">
                   <div style={{display:'inline-block'}}> <h2>User Profile</h2></div>
                    <div className="name">
                        <label for="name" className="form-label label">User Name</label>
                        <input type="text" className="form-control input" id='name' placeholder='Your Name' />
                    </div>
                    <div className="email">
                        <label for="email" className="form-label label">Email Address</label>
                        <input type="email" className="form-control input" id='email' placeholder='Type Email' />
                    </div>
                    <div className="number">
                        <label for="number" className="form-label label">Mobile Number</label>
                        <input type="text" className="form-control input" id='number' placeholder='Mobile Number' />
                    </div>
                    <div className="address1">
                        <label for="address1" className="form-label label">Home Address1</label> <br />
                        <textarea name="address1" id="address1" cols="55" rows="3"></textarea> <br />
                    </div>

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
            {/* <div className="container">
                <div className="leftSidebar">
                    <img id='userImg' src={userIcon} alt="" />
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
            </div> */}
        </>
    )
}

export default UserProfile