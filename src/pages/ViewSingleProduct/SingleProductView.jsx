import React, { useState, useEffect } from 'react'
import './SingleProductView.css';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import singleprod from "../../assets/MoreImgs/shopease single product view2.png"

function SingleProductView() {

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



  const addtocart = (id) => (e) => {
    console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    const url = "http://localhost:8080/api/cart/addToCart";
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
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


  };

  const changeImage = (item) => (e) => {
    console.log(item);
    setImage("http://localhost:8080/api/products/image/" + item);
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
            <h6 style={{ marginTop: '15px', textAlign: 'start' }}>Extra ₹{data.productMRP - data.productPrice} off</h6>
            <div className="pp" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

              <h1 style={{}}>₹{data.productPrice} <h6>M.R.P. <del>₹{data.productMRP}</del> <span style={{ color: 'darkgreen' }}>{(((data.productMRP - data.productPrice) * 100) / data.productMRP).toFixed(2)}% off</span> </h6></h1>
            </div>
            {/* <hr style={{ border: '1px solid gray' }} />
            <h6 style={{ fontWeight: 400 }}>Description</h6>
            <div dangerouslySetInnerHTML={{ __html: data.productDescription }}></div> */}
            <img src={singleprod} height="40%" width="70%" style={{display:'flex',alignItems:'center'}}/>
            <div className="btn-add-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginLeft: '-30px' }}>
              <Link onClick={addtocart} to="/"><button style={{ backgroundColor: '#33bbca', borderRadius: '5px', fontSize: '20px' }}>Add to cart</button></Link>
              <Link> <button style={{ backgroundColor: '#33bbca', borderRadius: '5px', fontSize: '20px' }}>Buy Now</button> </Link>
            </div>

          </div>
        </div>

        <div className="single-product-bottom">
          <hr style={{ border: '1px solid gray' }} />
          {/* <h6 style={{ fontWeight: 400 }}>Description</h6> */}
          <h2 style={{ marginBottom: '20px' }}>Product Description</h2>
          <div dangerouslySetInnerHTML={{ __html: data.productDescription }} ></div>
        </div>
      </div>












      {/* <div className="prod1" >
        <div className="imgMain">
          <div className="image-big" >
            <img height="400px" src={"http://localhost:8080/api/products/image/" + data.productPhoto[0]} alt="" />
          </div>
          <div className="image-small" >
            {
              data.productPhoto.map((item) => {
                return (
                  <div className="im1">
                    <img height="100px" src={"http://localhost:8080/api/products/image/" + item} alt="" />
                  </div>
                )
              }
              )
            }
          </div>
        </div>
        <div className="prodDetails">
          <h2>{data.productName}</h2>
          <h6 style={{ lbackgroundColor: 'yellow', marginTop: '15px', textAlign: 'start' }}>Extra {data.productMRP - data.productPrice} off</h6>
          <div className="pp" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <h1>₹{data.productPrice} <h6><del>{data.productMRP}</del> <span style={{ color: 'darkgreen' }}>{(((data.productMRP - data.productPrice) * 100) / data.productMRP).toFixed(2)}%</span> </h6></h1>
          </div>
          <hr style={{ border: '1px solid gray' }} />
          <h6 style={{ fontWeight: 400 }}>Description</h6>
          <div dangerouslySetInnerHTML={{ __html: data.productDescription }}></div>

          <div className="btn-add-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginLeft: '-30px' }}>
            <Link onClick={addtocart} to="/"><button style={{ backgroundColor: '#33bbca', borderRadius: '5px', fontSize: '20px' }}>Add to cart</button></Link>
            <Link> <button style={{ backgroundColor: '#33bbca', borderRadius: '5px', fontSize: '20px' }}>Buy Now</button> </Link>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default SingleProductView