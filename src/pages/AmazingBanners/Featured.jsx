import React from 'react'
import first from "../../assets/Featured brands/first.jpg"
import second from "../../assets/Featured brands/second.jpg"
import third from "../../assets/Featured brands/third.jpg"
import fourth from "../../assets/Featured brands/fourth.jpg"
import fifth from "../../assets/Featured brands/fifth.jpg"
import sixth from "../../assets/Featured brands/sixth.jpg"

function Featured() {
  return (
    <>
    <div className="featured-container" style={{margin:'50px auto'}}>
      <h1 style={{margin:'40px 20px',textAlign:'center' }}>Featured Brands</h1>
      {/* <p style={{margin:'3px 20px',textAlign:'center' }}>Show some love to your favorite labels</p> */}
      <div className="one-img" style={{display:'flex',margin:'50px auto'}}>
        <img src={third} alt=""  height="50%" width="50%"/>
        <img src={second} alt=""  height="50%" width="50%"/>
      </div>
      <div className="two-img" style={{display:'flex',margin:'50px 20px'}}>
        <img src={fifth} alt=""  height="50%" width="50%"/>
        <img src={fourth} alt=""  height="50%" width="50%"/>
      </div>
      <div className="third-img" style={{display:'flex',margin:'50px 20px'}}>
        <img src={first} alt=""  height="50%" width="50%"/>
        <img src={sixth} alt=""  height="50%" width="50%"/>
      </div>
    </div>
    </>
  )
}

export default Featured