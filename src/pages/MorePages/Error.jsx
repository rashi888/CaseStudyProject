import React from 'react'
// import img404 from "../../assets/MoreImgs/190.jpg"
import img404 from "../../assets/MoreImgs/Img404.png"
import {Link} from "react-router-dom"

function Error() {
    return (
        <>
            <div className="error-container" style={{  margin: '0.6rem', textAlign: 'center', padding: '1rem',display:'flex',justifyContent:'center',alignItems:'center' }}>
                <img src={img404} alt="errorpage 404" style={{ height: '50%', width: '50%',margin:'0%' }} />
                {/* <h1 style={{top:'0%'}}>OPPS! Page Not Found</h1> */}
                {/* <h5>Sorry the page you are looking for doesn't exist. </h5> */}
                <div className="btns" >

                <Link to="/home"> <button type="button" class="btn btn-primary" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px'}}>Return To Home Page</button></Link> 
                <button type="button" class="btn btn-dark" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px'}}>Report an Issue</button>
                </div>
            </div>
        </>
    )
}

export default Error