import React from 'react'
import first from "../../assets/Featured brands/fb1.png"
import second from "../../assets/Featured brands/fb2.png"
import third from "../../assets/Featured brands/fb3.png"
import fourth from "../../assets/Featured brands/fb4.png"
import fifth from "../../assets/Featured brands/fb5.png"
import sixth from "../../assets/Featured brands/fb6.png"
import featured from "../../assets/Featured brands/featuredTitle.png"
import "./amazingbanners.css"

function Featured() {
  return (
    <>
    <div className="featured-container" style={{margin:'50px auto',padding:'0 3rem'}}>
    <img src={featured} alt="" width="46%"  style={{ marginLeft:'28%',marginBottom:'10px' }} />
      <div className="one-img" style={{display:'flex',margin:'50px auto',justifyContent:'space-around'}}>
        <img src={third} alt=""  height="45%" width="45%" className='imgFearured1'/>
        <img src={second} alt=""  height="45%" width="45%" className='imgFearured1'/>
      </div>
      <div className="two-img" style={{display:'flex',margin:'50px 20px',justifyContent:'space-around'}}>
        <img src={fifth} alt=""  height="45%" width="45%" className='imgFearured1'/>
        <img src={fourth} alt=""  height="45%" width="45%" className='imgFearured1'/>
      </div>
      <div className="third-img" style={{display:'flex',margin:'50px 20px',justifyContent:'space-around'}}>
        <img src={first} alt=""  height="45%" width="45%" className='imgFearured1'/>
        <img src={sixth} alt=""  height="45%" width="45%" className='imgFearured1'/>
      </div>
    </div>
    </>
  )
}

export default Featured