import React from 'react'
import mens from "../../assets/summer specials/Mens.jpg"
import womens from "../../assets/summer specials/Womens.jpg"

function SummerSpecials() {
  return (
    <>
    <div className="summer-container" style={{margin:'40px auto' }}>
    <h1 style={{margin:'40px 20px',textAlign:'center' }}>Summer Specials</h1>
    <div className="img-container-menwo" style={{display:'flex'}}>
        <img src={mens} alt="" height="50%" width="50%"/>
        <img src={womens} alt="" height="50%" width="50%"/>
    </div>

    </div>
    </>
  )
}

export default SummerSpecials