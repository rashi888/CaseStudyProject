import React from 'react'
import Norder from "../../assets/MoreImgs/NoOrder2.png"

function NoOrders() {
    return (
        <>
            <div className="no-orders-container" style={{ width: '1200px', height: '500px', margin: '30px auto', backgroundColor: 'white', display: 'flex',boxShadow:'10px 10px 10px lightgray' }}>

                <div className="left-norder" style={{ width: '40%', height: '100%', textAlign:'center',paddingTop:'180px',marginLeft:'40px' }}>
                    <h3>NO ORDERS FOUND</h3>
                    <p>Looks like you haven't made your order yet</p>
                    <button className='btn btn-success'>Back To Home</button>
                </div>
                <div className="right-norder" style={{ width: '60%', height: '100%' }}>
                    <img src={Norder} alt="" width="100%" height="100%" />
                </div>
            </div>
        </>
    )
}

export default NoOrders