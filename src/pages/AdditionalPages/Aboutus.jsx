import React from 'react'
// import aboutus from "../../assets/AdsImg/aboutimg.png"
import aboutus from "../../assets/MoreImgs/about us.png"
import "./About.css"
import picture from "../../assets/NavbarImg/Picture5.png"
import logoo1 from "../../assets/NavbarImg/shopeaselogo11.png"

function Aboutus() {
  return (
    <>
      <div className="about-us" style={{ backgroundColor: 'white', margin: '30px 40px', padding: '30px 100px' }}>
{/* <img src={logoo} height="50%" width="50%" style={{backgroundColor:'#54b9c4',margin:'35px 0',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center'}}/> */}
<img src={logoo1} alt="" height="40%" width="40%" style={{margin:'0 0 60px 30%'}}/>
        <h1>
          <span>There  </span>
          <span>are  </span>
          <span>no  </span>
          <span>limits  </span>
          <span>to  </span>
          <span>what  </span>
          <span>you  </span>
          <span>can  </span>
          <span>accomplish,  </span>
          <span>except  </span>
          <span>the  </span>
          <span>limits  </span>
          <span>you  </span>
          <span>place  </span>
          <span>on  </span>
          <span>your  </span>
          <span>own  </span>
          <span>thinking.  </span>
        </h1>

        <img src={aboutus} width="100%" height="100%"/>
        <img src={picture} height="100%" width="100%" />
      </div>
    </>
  )
}

export default Aboutus