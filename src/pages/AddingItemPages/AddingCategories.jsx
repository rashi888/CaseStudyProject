import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function AddingCategories() {
    const [product, setProduct] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/category/1/products")
            .then((response) => response.json())
            .then((data) => setProduct(data["content"]));
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(product);

    return (
        <>
            <div className="container my-5" style={{ display: 'block', height: '400px' }}><Link style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className=" d-block     btn btn-primary ">Add Category</Link>

                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {product.map((item,index) => {
                        return (<>
                            <tbody>
                                <tr >
                                    <th key={item.category.categoryId}>{index+1}</th>
                                    <td >{item.category.categoryTitle}</td>
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