import React from 'react'
import {Link} from "react-router-dom"
import NoResult from "../../assets/MoreImgs/noresult3.png"

function NoResultFound() {
  return (
    <div className="no-results-found-container" style={{ width: '1250px', height: '550px', margin: '30px auto', backgroundColor: 'white', display: 'flex', boxShadow: '10px 10px 10px lightgray', borderRadius: '5px' }}>

      <div className="left-noresult" style={{ width: '45%', height: '100%', textAlign: 'center', paddingTop: '180px', padding: '180px 50px', backgroundColor: 'white' }}>
        {/* <h3>NO ORDERS FOUND</h3> */}
        <h3 style={{ marginBottom: '20px', color: 'gray' }}>Oops! Looks like we missed this.</h3>
        <p style={{color:'gray'}}>Unable to find what you are searching for</p>
        <Link to="/">  <button className='btn btn-success'> Continue Shopping</button></Link>
      </div>
      <div className="right-noresult" style={{ width: '55%', height: '100%' ,paddingTop:'80px'}}>
        <img src={NoResult} alt="" height="68%" style={{margin:'auto'}}/>
      </div>
    </div>
  )
}

export default NoResultFound