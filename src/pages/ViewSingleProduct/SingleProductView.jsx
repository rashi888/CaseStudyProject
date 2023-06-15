import React, { useState, useEffect } from 'react'
import './SingleProductView.css';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import singleprod from "../../assets/MoreImgs/shopease single product view2.png"
import { useNavigate } from 'react-router-dom';

function SingleProductView() {

  const navigate = useNavigate();

  const [image, setImage] = useState([]);

  const { id } = useParams();
  const productId = id;
  console.log(productId);

  const [data, setData] = useState(
    {
      "productId": 0,
      "productName": "",
      "productDescription": "",
      "productPrice": 0,
      "productMRP": 0,
      "productPhoto": [],
    }

  );

  const fetchdata = () => {
    axios.get("http://localhost:8080/api/products/" + productId,{
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
      }
  })
      .then((resp) => {
        console.log(resp["data"]);
        setData(resp["data"]);
        console.log("length of product");
        const lengthofproduct = resp.data.productPhoto.length;
        console.log(lengthofproduct);
        setImage("http://localhost:8080/api/products/image/" + resp.data.productPhoto[0]);
      })
  }

  useEffect(() => {
    fetchdata();

  }, []);

  console.log(data);


  const addtocart = (e) => {
    console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    

    if(userId==null){
      Swal.fire({
       
        text: "Please Login First",
        icon: "info",
      });

    }else{
    const url = "http://localhost:8080/api/cart/addToCart";
    const formdata = new FormData();
    formdata.append("productId", productId);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
      
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        
    }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "Product Added to Cart Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      }
      );
    }


  };

  const buynow = () => {

    let userId = localStorage.getItem("userId");
   if(userId==null){
    Swal.fire({
      text: "Please Login First",
      icon: "info",
    });
  }
    else{
    const url = "http://localhost:8080/api/order/buyNow";
    const formdata = new FormData();
    formdata.append("productId", productId);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
    }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
      }
      );
      
    }
  };

   

        


  const changeImage = (item) => (e) => {
    console.log(item);
    setImage("http://localhost:8080/api/products/image/" + item);
  }

  let menu;
  if (data.stock==0)
  {
    menu = (
      <div className="btn-add-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginLeft: '-30px' }}>
        <button className="btn btn-danger" style={{ width: '200px', height: '50px', borderRadius: '5px', fontSize: '20px', fontWeight: 'bold', cursor: 'not-allowed' }} disabled>Out of Stock</button>
      </div>
    )
  }
  else{
    menu = (
      <div className="btn-add-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginLeft: '-30px' }}>
        <button className="btn btn-success" style={{ width: '200px', height: '50px', borderRadius: '5px', fontSize: '20px', fontWeight: 'bold',marginRight:'30px' }} onClick={addtocart}>Add to Cart</button>
        <button className="btn btn-success" style={{ width: '200px', height: '50px', borderRadius: '5px', fontSize: '20px', fontWeight: 'bold' }} onClick={buynow}>Buy Now</button>
      </div>
    )
  }

  return (
    <>
      <div className="container-main-product">

        <div className="single-product-top">
          <div className="left-for-images">
            <div className="left-of-left">
              {
                data.productPhoto.map((item) => {
                  return (
                    <div className="image-group">
                      <img  src={"http://localhost:8080/api/products/image/" + item} onClick={changeImage(item)} height="83px" />
                    </div>
                  )
                }
                )
              }
            </div>
            <div className="right-of-left">
              <img src={image} setImage={"http://localhost:8080/api/products/image/" + data.productPhoto[0]} height="106%" width="106%" />
            </div>
          </div>
          <div className="right-for-content">

            <h2>{data.productName}</h2>
            <hr style={{ border: '1px solid gray' }} />
            <h6 style={{ marginTop: '15px', textAlign: 'start' }}>Extra ₹{data.productMRP - data.productPrice} off</h6>
            <div className="pp" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

              <h1 style={{}}>₹{data.productPrice} <h6>M.R.P. <del>₹{data.productMRP}</del> <span style={{ color: 'darkgreen' }}>{(((data.productMRP - data.productPrice) * 100) / data.productMRP).toFixed(2)}% off</span> </h6></h1>
            </div>
            {/* <hr style={{ border: '1px solid gray' }} />
            <h6 style={{ fontWeight: 400 }}>Description</h6>
            <div dangerouslySetInnerHTML={{ __html: data.productDescription }}></div> */}
              <hr style={{ border: '0.05px solid gray',margin:'0',padding:'0' }} />
            <img src={singleprod} height="40%" width="70%" style={{display:'flex',alignItems:'center',marginLeft:'10%'}}/>
  
            <div className="btn-add-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginLeft: '-30px' }}>
              {menu}
              </div>

          </div>
        </div>

        <div className="single-product-bottom">
          <hr style={{ border: '1px solid gray' }} />
          <h2 style={{ marginBottom: '20px' }}>Product Description</h2>
          <div dangerouslySetInnerHTML={{ __html: data.productDescription }} ></div>
        </div>
      </div>
    </>
  )
}

export default SingleProductView