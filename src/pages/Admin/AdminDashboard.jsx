import React,{useState,useEffect} from 'react'
import './AdminDashboard.css';
import { Link } from 'react-router-dom';
import BackToTop from '../../components/BackToTop/BackToTop';

function AdminDashboard() {

  const [data,setData]=useState([]);
  
  const fetchData=()=>{
    return fetch("http://localhost:8080/api/stats/admin")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="admin-dashboard">
        <h1 style={{ color: '#54b9c4', margin: '10px 10px 40px 10px' }}>Welcome to Admin Dashboard</h1>
        <div className="tiles-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <div className="tile-1">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-shopping-cart-fill"></i></div>
              <h5>Total Orders</h5>
            </div>
            <div className="total-orders">
              <h2 style={{marginTop:'20px'}}>{data.totalOrders}</h2>
              <p>New</p>
              {/* <h6>6,00,00</h6> */}
            </div>
          </div>
          <div className="tile-2">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-user-3-line"></i></div>
              <h5>Total Users</h5>
            </div>
            <div className="total-orders">
              <h2 style={{marginTop:'20px'}}>{data.totalUsers}</h2>
              <p>New</p>
              {/* <h6>32,000</h6> */}
            </div>
          </div>
          <div className="tile-3">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-user-3-fill"></i></div>
              <h5>Total Merchants</h5>
            </div>
            <div className="total-orders">
              <h2 style={{marginTop:'20px'}}>{data.totalMerchants}</h2>
              <p>New</p>
              {/* <h6>12,000</h6> */}
            </div>
          </div>
        </div>

        <div className="tiles-4" style={{ display: 'flex', alignItems: 'center', margin: '20px 0px' }}>
          <div className="tile-4" style={{ marginLeft: '250px' }}>
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-product-hunt-line"></i></div>
              <h5>Total Products</h5>
            </div>
            <div className="total-orders">
              <h2 style={{marginTop:'20px'}}>{data.totalProducts}</h2>
              <p>Today</p>
              {/* <h6>25,000</h6> */}
            </div>
          </div>
          <div className="tile-5">
            <div className="icon-and-orders">
              <div className="icon-prop">₹</div>
              <h5>Total Turnover</h5>
            </div>
            <div className="total-orders">
              <h2 style={{marginTop:'20px'}}>{data.totalTurnover}</h2>
              <p>Today</p>
              {/* <h6>25,000</h6> */}
            </div>
          </div>

        </div>



        <hr style={{ height: '0.5px', backgroundColor: 'black' }} />

        <div className="Items-route">
          <div className="user-merchant-one">

            <Link to="/userlist" className="users-page" onClick={scrollToTop}>
              <h5>View All Users</h5>
              <p>Manage and View all users from here.</p>
              {/* <Link to="/userlist"> <button className='admin-btns'> View All Users</button></Link> */}
            </Link>

            <Link to="/merchantlist" className="merchant-page" onClick={scrollToTop}>
              <h5>View All Merchant</h5>
              <p>View all merchant and manage all them from here.</p>
              {/* <Link to="/userlist"> <button className='admin-btns'> View All Users</button></Link> */}
            </Link>



            {/* <div className="users-page">
              <h5>View All Users</h5>
              <p>View all users and Update/Delete</p>
              <Link to="/userlist"> <button className='admin-btns'> View All Users</button></Link>
            </div> */}


            {/* <div className="merchant-page">
              <h5>View All Merchants</h5>
              <Link to="/merchantlist"> <button className='admin-btns'> View All Merchants</button></Link>
            </div> */}
          </div>

          <div className="category-product-two">
            <Link to="categoryadminlist" className="category-page" onClick={scrollToTop}>
              <h5>View All Categories</h5>
              <p>View all categories and manage them from here.</p>
              {/* <Link to="/userlist"> <button className='admin-btns'> View All Users</button></Link> */}
            </Link>

            <Link to="/productadminlist" className="product-page" onClick={scrollToTop}>
              <h5>View All Products</h5>
              <p>View all Products and manage all the products from here.</p>
              {/* <Link to="/userlist"> <button className='admin-btns'> View All Users</button></Link> */}
            </Link>

            {/* <div className="category-page">
              <h5>View All Categories</h5>
              <Link to="/merchantlist"> <button className='admin-btns'> View All Categories</button></Link>

            </div>
            <div className="product-page">
              <h5>View All Products</h5>
              <Link to="/merchantlist"> <button className='admin-btns'> View All Products</button></Link>

            </div> */}
          </div>
        </div>


      </div>



      {/* <div className="admin-dashboard" >
        <h1 style={{textAlign:'center'}}>Welcome to Admin Dashboard!</h1>

        <div className="row">
          <div className="col-sm-3 pt-3" >
            <div className="card-item-admin">
              <div className="card-body">
                <h4 className="card-title">View All Users</h4>
                <p className="card-text">View users details here</p>
                <Link to="/userlist" className="card-link btn btn-primary">View Users</Link>

              </div>
            </div>
          </div>


          <div className="col-sm-3 pt-3"  >
            <div className="card-item-admin" > 
              <div className="card-body">
                <h4 className="card-title">View All Merchant</h4>
                <p className="card-text">Manage all the products here.</p>
                <Link to="/merchantlist" className="card-link btn btn-primary">View Merchant</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item-admin" >
              <div className="card-body">
                <h4 className="card-title">View Categories</h4>
                <p className="card-text">View categories here. </p>
                <Link to="/categoryadminlist" className="card-link btn btn-primary">View Category</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item-admin" >
              <div className="card-body">
                <h4 className="card-title">View Products</h4>
                <p className="card-text">View products here.</p>
                <Link to="/productadminlist" className="card-link btn btn-primary">View Product</Link>

              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default AdminDashboard