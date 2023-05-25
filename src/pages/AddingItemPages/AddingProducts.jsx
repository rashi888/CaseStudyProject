import React from 'react'
import {Link} from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"

function AddingProducts() {
    return (
        <>
            <div className="container-fluid my-5" style={{backgroundColor:'white'}}>

                <Link to="addp"  style={{ margin: "2%  0px ",padding:'1%', width: '20%' }} className="btn btn-primary">Add Product</Link>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Preview</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <th scope="row" >1</th>
                            <td >Larry</td>
                            <td >Larry</td>
                            <td><img src={b1} height="100px" width="100px"  /></td>

                            <td><a href=""  className="btn btn-danger">Delete</a></td>
                            <td><a href=""  className="btn btn-warning">Update</a></td>

                        </tr>

                        <tr >
                            <th scope="row" >2</th>
                            <td >Harry</td>
                            <td >Harry</td>
                            <td><img src={b1} height="100px" width="100px"  /></td>

                            <td><a href=""  className="btn btn-danger">Delete</a></td>
                            <td><a href=""  className="btn btn-warning">Update</a></td>

                        </tr>

                        <tr >
                            <th scope="row" >3</th>
                            <td >Carry</td>
                            <td >Carry</td>
                            <td><img src={b1} height="100px" width="100px"  /></td>

                            <td><a href=""  className="btn btn-danger">Delete</a></td>
                            <td><a href=""  className="btn btn-warning">Update</a></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AddingProducts