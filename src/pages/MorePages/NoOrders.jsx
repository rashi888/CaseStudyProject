import React from 'react'
import {Link} from "react-router-dom"
import Norder from "../../assets/MoreImgs/Norder3.png"

function NoOrders() {
    return (
        <>
            <div className="no-orders-container" style={{ width: '1250px', height: '550px', margin: '30px auto', backgroundColor: 'white', display: 'flex',boxShadow:'10px 10px 10px lightgray',borderRadius:'5px' }}>

                <div className="left-norder" style={{ width: '45%', height: '100%', textAlign:'center',paddingTop:'180px',padding:'180px 50px',backgroundColor:'rgb(250, 250, 250)' }}>
                    {/* <h3>NO ORDERS FOUND</h3> */}
                    <h3 style={{marginBottom:'25px',color:'gray'}}>Looks like you haven't made any order yet</h3>
                  <Link to="/">  <button className='btn btn-success'> Continue Shopping</button></Link>
                </div>
                <div className="right-norder" style={{ width: '55%', height: '100%' }}>
                    <img src={Norder} alt="" width="100%" height="100%" />
                </div>
            </div>
        </>
    )
}

export default NoOrders