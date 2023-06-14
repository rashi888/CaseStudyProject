import React,{useState,useEffect} from 'react'
import './DashM.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DashM() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const stat =()=>{
  axios.get("http://localhost:8080/api/stats/merchant/"+localStorage.getItem("userId"),{
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
    }
})
  .then((resp) => {
    console.log(resp["data"]);
    setData(resp["data"]);
  })
}

const [data, setData] = useState({
  myOrders: "",
  myTurnover: ""
});
useEffect(() => {
  stat();
}, []);





  return (
    <>
      <div className="merchant-dashboard" >
        <h1 style={{ color: 'gray', margin: '5px 10px 40px 10px' }}>Welcome to Merchant Page</h1>
        <div className="tiles-4" >
          <div className="tile-4" style={{margin:'auto',width:'400px'}}> 
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-shopping-cart-fill"></i></div>
              <h5>Total Orders</h5>
            </div>
            <div className="total-orders">
              <h2>{data.myOrders}</h2>
              {/* <p>New</p>
              <h6>6,00,00</h6> */}
            </div>
          </div>
          <div className="tile-2" style={{margin:'auto',width:'400px'}}>
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-user-3-line"></i></div>
              <h5>My Turnover</h5>
            </div>
            <div className="total-orders">
              <h2>{data.myTurnover}</h2>
              {/* <p>New</p>
              <h6>32,000</h6> */}
            </div>
          </div>
          </div>
        <div className="row">
          <div className="col-sm-3 pt-3" >
            <div className="card-item">
              <div className="card-body">
                <h4 className="card-title">Categories</h4>
                <p className="card-text">Manage the categories from here. </p>
                <Link to="/categoryadd" onClick={scrollToTop}  className="card-link btn btn-primary">Add Category</Link>

              </div>
            </div>
          </div>


          <div className="col-sm-3 pt-3"  >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">Products</h4>
                <p className="card-text">Manage all the products from here.</p>
                <Link to="/productadd" onClick={scrollToTop}  className="card-link btn btn-primary">Add Product</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View Categories List</h4>
                <p className="card-text">View all the categories here.</p>
                <Link to="/categorylist" onClick={scrollToTop}  className="card-link btn btn-primary">View Category</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View All Products</h4>
                <p className="card-text">View all the products here.</p>
                <Link to="/productlist" onClick={scrollToTop}  className="card-link btn btn-primary">View All Product</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View My Products</h4>
                <p className="card-text">View all my products here.</p>
                <Link to="/myproductlist" onClick={scrollToTop}  className="card-link btn btn-primary">View My Product</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3"  >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View My Orders</h4>
                <p className="card-text">View all the orders here.</p>
                <Link to="/morders" onClick={scrollToTop}  className="card-link btn btn-primary">View Orders</Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default DashM