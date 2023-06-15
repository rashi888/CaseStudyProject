import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Spinner } from 'reactstrap'

function CategoryListAdmin() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const deletecategory = (id) => {
        fetch("http://localhost:8080/api/categories/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(() => {
            Swal.fire({
                title: "Success",
                text: "Category Deleted Successfully",
                icon: "success",
            });

            fetchData();
        });
    };
    

    const fetchData = () => {
        setIsLoading(true);
        return fetch("http://localhost:8080/api/categories/",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((response) => response.json())
            .then((data) => {setProduct(data)
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(product);

    return (
        <>
            <div className="container my-5" style={{backgroundColor:'white', display: 'block', height: '100%' }}><Link to='/categoryadd' style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className=" d-block     btn btn-primary ">Add Category</Link>
                <Link to='/admindashboard' style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className=" d-block btn btn-primary ">Back To DashBoard</Link>

                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>

                    {isLoading ? (
                        <Spinner animation="border" role="status" color='primary' style={{ marginLeft: '600px' }} />
                    ) : (
                        <>
                            {product.map((item, index) => {
                                return (<>
                                    <tbody>
                                        <tr >
                                            <th >{item.categoryId}</th>
                                            <td >{item.categoryTitle}</td>
                                            <td><Link className="btn btn-danger" style={{ padding: '5px 10px', borderRadius: '2px' }} onClick={() => deletecategory(item.categoryId)}>Delete</Link></td>
                                            <td><Link className="btn btn-primary" style={{ padding: '5px 10px', borderRadius: '2px' }} to={"/updatecategory/" + item.categoryId}>Update</Link></td>
                                        </tr>
                                    </tbody>
                                </>
                                );
                            })}
                        </>)}



                </table>
            </div >
            {/* </div> */}
        </>
    )
}

export default CategoryListAdmin