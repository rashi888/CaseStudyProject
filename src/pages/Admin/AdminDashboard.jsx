import React from 'react'
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <>
      <div className="admin-dashboard" >
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
                <Link to="/categorylist" className="card-link btn btn-primary">View Category</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item-admin" >
              <div className="card-body">
                <h4 className="card-title">View Products</h4>
                <p className="card-text">View products here.</p>
                <Link to="/productlist" className="card-link btn btn-primary">View Product</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard