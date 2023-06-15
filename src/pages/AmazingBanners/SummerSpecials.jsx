import React from 'react'
import mens from "../../assets/summer specials/mens.png"
import womens from "../../assets/summer specials/womens.png"
import summerspecial from "../../assets/summer specials/summerspecials.png"
import axios from "axios";

import { useNavigate } from "react-router-dom";

function SummerSpecials() {
  const navigate = useNavigate();


  const refresh = () => window.location.reload(true)


  const srch = (search) => (e) => {
      axios.get('http://localhost:8080/api/products/search/' + search, {
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
          }
      })
          .then(response => {
              console.log(response.data);

              navigate("/search", { state: { searchdata: response.data } });
              refresh();

          })
          .catch(error => {
              console.log(error);
          });

  }


  return (
    <>
      <div className="summer-container" style={{ margin: '40px auto',padding:'0 4rem' }}>
        {/* <img src={summerspecial} alt="" width="65%" height="180px" style={{ marginLeft:'22%' }} /> */}
        <img src={summerspecial} alt="" width="46%"  style={{ marginLeft:'28%',marginBottom:'10px' }} />
        {/* <h1 style={{margin:'40px 20px',textAlign:'center' }}>Summer Specials</h1> */}
        <div className="img-container-menwo" style={{ display: 'flex',padding:' 0 5px' }}>
          <img onClick={srch("casual")} src={mens} alt="" height="50%" width="50%" className='imgFearured1'/>
          <img onClick={srch("ethnic")} src={womens} alt="" height="50%" width="50%" className='imgFearured1'/>
        </div>

      </div>
    </>
  )
}

export default SummerSpecials