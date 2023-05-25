import React from 'react'
import { Link } from "react-router-dom"

function AdminDashboard() {
    return (
        <>
            <div class="jumbotron text-center">
                <h1 class="display-4">Welcome back, Admin</h1>
                <p>Easily manage your data from this admin <mark>CMS</mark></p>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 pt-3 my-3" >
                        <div class="cardy " style={{ backgroundColor: 'white', boxShadow: "2px 1px 5px #888888", borderRadius: '5%' }}>
                            <div class="card-body">
                                <h4 class="card-title">Categories</h4>
                                <p class="card-text">Manage the categories section here.</p>
                                <Link to="category" class="card-link btn btn-primary">Manage</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 pt-3 my-3" >
                        <div class="cardy" style={{ backgroundColor: 'white', boxShadow: "2px 1px 5px #888888", borderRadius: '5%' }}>
                            <div class="card-body">
                                <h4 class="card-title">Products</h4>
                                <p class="card-text">Manage all the products here.</p>
                                <Link class="card-link btn btn-primary">Manage</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default AdminDashboard