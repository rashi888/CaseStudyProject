import React, { useState, useEffect } from 'react'
import "./Allproducts.css"
import {Link} from "react-router-dom"
import icon from "../../assets/All_Icons/user icon.png"
// import img from "../../assets/MSignupImg/msignup.jpg"
import img from "../../assets/PhoneImgs/phone1.webp"
import {RiArrowDownSLine} from "react-icons/ri";
import Swal from 'sweetalert2';

function Allproducts(props) {
  const [product, setProduct] = useState([]);
  const [api, setApi] = useState(props.api);
  const [loading, setLoading] = useState(true);
  
  const fetchData = () => {
    return fetch(api)
      .then((response) => response.json())
      .then((data) => setProduct(data["content"]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);

  const addtocart = (id) => (e) => {
    console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    const url = "http://localhost:8080/api/cart/addToCart" ;
    const formdata = new FormData();
    setLoading(false);
    formdata.append("productId", id);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
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

    


  return (
    <>
      <div className="universal-page">
        <div className="heading-allproducts">
          <h2 style={{ marginBottom: '20px', padding: '10px 20px', fontWeight: '400', marginLeft: '20px' }}>All Products</h2>
          <div class="dropdown show">
            <Link class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border:'0.1px solid lightgray',backgroundColor:'white'}}>
            Sort by: <span style={{fontWeight:'500'}}>New Arrivals</span>
            </Link>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
             <Link class="dropdown-item" href="#">New Arrivals</Link>
              <Link class="dropdown-item" href="#">Price: Low to High</Link>
              <Link class="dropdown-item" href="#">Price: High to Low</Link>
            </div>
          </div>
          {/* <div className="sorting-div">
            <p className='sorting'>Sort by: <bold>New Arrivals</bold></p>
            <i className='sorting'><RiArrowDownSLine /></i>
            <div className="dropdown-sorting">
              <p>New Arrivals</p>
              <p>Price: Low to High</p>
              <p>Price: High to Low</p>
            </div>
          </div> */}
        </div>

        {/* <div>{loading? ( <div>Loading...</div>):( "hello" )}</div> */}

        

        {product.map((item) => {
          return (<>
            <div className="card-one" >
              <div className="img-section">
                <img src={"http://localhost:8080/api/products/image/" + item.productPhoto} alt="" height="100%" style={{ padding: '25px 70px' }} />
              </div>
              <div className="content-section">
                <h4 style={{ marginBottom: '20px' }} >{item.productName}</h4>
                <p style={{ margin: '10px 0px' }}> {item.productDescription}</p>
                {/* <h2 style={{ margin: '10px 0px' }}>₹ <span>12000</span></h2> */}

              </div>
              <div className="price-section">
                <h6>M.R.P ₹ <del>{item.productMRP}</del> </h6>
                <h2 style={{ margin: '15px 0px' }}>₹ {item.productPrice}</h2>
                <button onClick={addtocart(item.productId)} type='button' className='btn-price btn-warning' >Add to Cart</button>
              </div>
            </div>
          </>
          );
        })}


        
        <nav aria-label="Page navigation example" style={{ margin: '30px 20px', padding: '10px' }}>
          <ul class="pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <li class="page-item" style={{ backgroundColor: 'yellow' }}>
              <Link class="page-link" href="#" aria-label="Previous" style={{ fontSize: '24px' }}>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li class="page-item f-10"><Link class="page-link" href="#" style={{ fontSize: '24px' }}>1</Link></li>
            <li class="page-item"><Link class="page-link" href="#" style={{ fontSize: '24px' }}>2</Link></li>
            <li class="page-item"><Link class="page-link" href="#" style={{ fontSize: '24px' }}>3</Link></li>
            <li class="page-item">
              <Link class="page-link" href="#" aria-label="Next" style={{ fontSize: '24px' }}>
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Allproducts