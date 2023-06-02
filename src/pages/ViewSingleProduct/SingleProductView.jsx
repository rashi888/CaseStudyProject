import React,{useState,useEffect} from 'react'
import './SingleProductView.css';
import img1 from '../../assets/PhoneImgs/phone1.webp';
import img2 from '../../assets/PhoneImgs/phone2.webp';
import mainImg from "../../assets/PhoneImgs/phone2.webp"
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import axios from 'axios';


function SingleProductView() {

  const { id } = useParams();
  const productId = id;
  console.log(productId);

  const [data, setData] = useState([]);

  const fetchdata = () => {
    axios.get("http://localhost:8080/api/products/" + productId)
      .then((resp) => {
        console.log(resp["data"]);
        setData(resp["data"]);
      })
  }

  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data);



  const addtocart = (id) => (e) => {
    console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    const url = "http://localhost:8080/api/cart/addToCart" ;
    const formdata = new FormData();
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

      <div className="prod1" >
        <div className="imgMain">
          <div className="image-big" ><img height="400px" src={"http://localhost:8080/api/products/image/"+data.productPhoto} alt="" /></div> 
          <div className="image-small" >
            <div className="im1"><img src={"http://localhost:8080/api/products/image/"+data.productPhoto} alt="" height='100px' width='100px'/></div>
          
        
          </div>
        </div>
        <div className="prodDetails">
          <h2>{data.productName}</h2>
          <h5 style={{fontWeight:400,marginTop:'15px'}}>4.21,143 Ratings & 99 Reviews</h5>
          <h6 style={{lbackgroundColor:'yellow',marginTop:'15px',textAlign:'start'}}>Extra ₹4000 off</h6>
          <div className="pp" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

          <h1>₹{data.productPrice} <h6><del>₹18,999</del> <span style={{ color: 'darkgreen' }}>21% off</span> </h6></h1>
          <h6 style={{marginRight:'150px'}}>+ ₹49 Secured Packaging Fee</h6>
          </div>
          {/* <h6>Available offers</h6> */}
          <hr style={{border:'1px solid gray'}} />
          <p>{data.productDescription}</p>
          <div className="btn-add-div" style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginLeft:'-30px'}}>
         <Link onClick={addtocart} to="/"><button style={{backgroundColor:'#33bbca',borderRadius:'5px',fontSize:'20px'}}>Add to cart</button></Link> 
         <Link> <button  style={{backgroundColor:'#33bbca',borderRadius:'5px',fontSize:'20px'}}>Buy Now</button> </Link>
           </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductView