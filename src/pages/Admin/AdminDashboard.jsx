import React from 'react'
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <>
      <div className="admin-dashboard">
        <h1 style={{ color: '#54b9c4', margin: '10px 10px 40px 10px' }}>Welcome to Admin Dashboard</h1>
        <div className="tiles-4">
          <div className="tile-1">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-shopping-cart-fill"></i></div>
              <h5>Total Orders</h5>
            </div>
            <div className="total-orders">
              <h2>690</h2>
              <p>New</p>
              <h6>6,00,00</h6>
            </div>
          </div>
          <div className="tile-2">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-user-3-line"></i></div>
              <h5>Total Users</h5>
            </div>
            <div className="total-orders">
              <h2>1200</h2>
              <p>New</p>
              <h6>32,000</h6>
            </div>
          </div>
          <div className="tile-3">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-user-3-fill"></i></div>
              <h5>Total Merchants</h5>
            </div>
            <div className="total-orders">
              <h2>200</h2>
              <p>New</p>
              <h6>12,000</h6>
            </div>
          </div>
          {/* <div className="tile-3">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-line-chart-line"></i></div>
              <h5>Sales</h5>
            </div>
            <div className="total-orders">
              <h2>90%</h2>
              <p>Growth</p>
              <h6>34,000</h6>
            </div>
          </div> */}
          <div className="tile-4">
            <div className="icon-and-orders">
              <div className="icon-prop"><i class="ri-product-hunt-line"></i></div>
              <h5>Total Products</h5>
            </div>
            <div className="total-orders">
              <h2>₹14000</h2>
              <p>Today</p>
              <h6>25,000</h6>
            </div>
          </div>

        </div>
        <div className="tile-5">
          <div className="icon-and-orders">
            <div className="icon-prop">₹</div>
            <h5>Total Turnover</h5>
          </div>
          <div className="total-orders">
            <h2>₹14000</h2>
            <p>Today</p>
            <h6>25,000</h6>
          </div>
        </div>
        <hr style={{ height: '0.5px', backgroundColor: 'black' }} />

        <div className="Items-route">
          <div className="user-merchant-one">

            <div className="users-page">
              <h5>View All Users</h5>
              <Link to="/userlist"> <button className='admin-btns'> View All Users</button></Link>
            </div>
            <div className="merchant-page">
              <h5>View All Merchants</h5>
              <Link to="/merchantlist"> <button className='admin-btns'> View All Merchants</button></Link>
            </div>
          </div>

          <div className="category-product-two">
            <div className="category-page">
              <h5>View All Categories</h5>
              <Link to="/merchantlist"> <button className='admin-btns'> View All Categories</button></Link>

            </div>
            <div className="product-page">
              <h5>View All Products</h5>
              <Link to="/merchantlist"> <button className='admin-btns'> View All Products</button></Link>

            </div>
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