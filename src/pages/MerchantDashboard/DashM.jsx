import React from 'react'
import './DashM.css';
import { Link } from 'react-router-dom';

function DashM() {
  return (
    <>
      <div className="merchant-dashboard" >
        <h1 >Welcome to Merchant Page</h1>

        <div className="row">
          <div className="col-sm-3 pt-3" >
            <div className="card-item">
              <div className="card-body">
                <h4 className="card-title">Categories</h4>
                <p className="card-text">Manage the categories section here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, tenetur.</p>
                <Link to="/categoryadd" className="card-link btn btn-primary">Add Category</Link>

              </div>
            </div>
          </div>


          <div className="col-sm-3 pt-3"  >
            <div className="card-item" > 
              <div className="card-body">
                <h4 className="card-title">Products</h4>
                <p className="card-text">Manage all the products here.</p>
                <Link to="/productadd" className="card-link btn btn-primary">Add Product</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View Categories List</h4>
                <p className="card-text">View categories here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum tempora molestiae natus est perferendis tenetur, iste debitis sint nihil.</p>
                <Link to="/categorylist" className="card-link btn btn-primary">View Category</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View All Products</h4>
                <p className="card-text">View products here.</p>
                <Link to="/productlist" className="card-link btn btn-primary">View Product</Link>

              </div>
            </div>
          </div>

          <div className="col-sm-3 pt-3" >
            <div className="card-item" >
              <div className="card-body">
                <h4 className="card-title">View My Products</h4>
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

export default DashM