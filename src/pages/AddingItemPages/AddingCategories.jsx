import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function AddingCategories() {
    const [product, setProduct] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/categories/")
            .then((response) => response.json())
            .then((data) => setProduct(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(product);

    return (
        <>
            <div className="container my-5" style={{ display: 'block', height: '100%' }}><Link to='/categoryadd' style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className=" d-block     btn btn-primary ">Add Category</Link>
            <Link to='/mdash' style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className=" d-block      btn btn-primary ">Back To DashBoard</Link>

                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {product.map((item) => {
                        return (<>
                            <tbody>
                                <tr >
                                    <th >{item.categoryId}</th>
                                    <td >{item.categoryTitle}</td>
                                    <td><Link className="btn btn-danger">Delete</Link></td>
                                    <td><Link className="btn btn-warning" style={{ padding: '5px 10px', borderRadius: '2px' }}>Update</Link></td>

                                </tr>
                            </tbody>
                        </>
                        );
                    })}


                </table>
            </div >
            {/* </div> */}
        </>
    )
}

export default AddingCategories