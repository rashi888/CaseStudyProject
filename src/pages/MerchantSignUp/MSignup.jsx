import React from 'react'
import "./MSignup.css"
import msignupimg from "../../assets/MSignupImg/msignup.jpg"

function MSignup() {
    return (
        <>
            <div className="msignup-container">
                <div className="leftImg">
                    <img src={msignupimg} alt="" />
                </div>

                <div className="rightCredantials">
                    <h2 style={{marginBottom:'20px',paddingLeft:'6px'}}>   Merchant Signup Page</h2>

                    <div className="name-email" style={{ display: 'flex' }}>
                        <div className="name" style={{ margin: '5px 20px 5px 0px' }}>
                            <label for="name" className="form-label label">Merchant Name</label>
                            <input type="text" className="form-control input" id='name' placeholder='Your Name' />
                        </div>
                        <div className="email">
                            <label for="email" className="form-label label">Email Address</label>
                            <input type="email" className="form-control input" id='email' placeholder='Type Email' />
                        </div>
                    </div>

                    <div className="address-phone" style={{  display: 'flex' }}>
                        <div className="number" style={{margin: '5px 20px 5px 0px' }}>
                            <label for="number" className="form-label label">Mobile Number</label>
                            <input type="text" className="form-control input" id='number' placeholder='Mobile Number' />
                        </div>

                        <div className="address1">
                            <label for="address1" className="form-label label">Home Address1</label> <br />
                            {/* <textarea name="address1" id="address1" cols="55" rows="3"></textarea> <br /> */}
                            <input type="text" className="form-control input" id='address1' placeholder='Home Address' />

                        </div>
                    </div>

                    <div className="city-postal" style={{  display: 'flex' }}>
                        <div className="city" style={{ margin: '5px 20px 5px 0px' }}>
                            <label for="city" className="form-label label">City</label>
                            <input type="text" className="form-control input" id='city' placeholder='City' />
                        </div>
                        <div className="postal">
                            <label for="postal" className="form-label label">Postal Code</label>
                            <input type="text" className="form-control input" id='postal' placeholder='Postal Code' />
                        </div>
                    </div>



                    {/* <label for="country" className="form-label label">Country</label>
                    <input type="text" className="form-control input" id='country' placeholder='Country' /> */}

                    <button type="button" className="btn-user-profile btn-primary mt-4" style={{marginLeft:'10px'}} >Save Changes</button>

                </div>
            </div>

        </>
    )
}

export default MSignup


