import React from 'react'
import mens from "../../assets/summer specials/mens.png"
import womens from "../../assets/summer specials/womens.png"
import summerspecial from "../../assets/summer specials/summerspecials.png"

function SummerSpecials() {
  return (
    <>
      <div className="summer-container" style={{ margin: '40px auto',padding:'0 4rem' }}>
        {/* <img src={summerspecial} alt="" width="65%" height="180px" style={{ marginLeft:'22%' }} /> */}
        <img src={summerspecial} alt="" width="46%"  style={{ marginLeft:'28%',marginBottom:'10px' }} />
        {/* <h1 style={{margin:'40px 20px',textAlign:'center' }}>Summer Specials</h1> */}
        <div className="img-container-menwo" style={{ display: 'flex',padding:' 0 5px' }}>
          <img src={mens} alt="" height="50%" width="50%" />
          <img src={womens} alt="" height="50%" width="50%" />
        </div>

      </div>
    </>
  )
}

export default SummerSpecials