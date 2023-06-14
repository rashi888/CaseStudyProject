import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"
import Swal from 'sweetalert2';
import axios from 'axios';

function MerchantList() {

    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/users/",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(user);

    const deleteuser = (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this User!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',

        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("http://localhost:8080/api/users/" + userId,{
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token"),
                    }
                })


                    .then((resp) => {
                        console.log(resp["data"]);
                        console.log("success log");
                        Swal.fire({
                            title: "Success",
                            text: "User Deleted Successfully",
                            icon: "success",
                        });
                        window.location.reload();
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'User is safe :)',
                    'error'
                )
            }
        })
    }
    


    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>

                <Link to="/useradd" style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className="btn btn-primary">Add merchant</Link>
                <Link to='/admindashboard' style={{ margin: "2%  10px ", padding: '1%', width: '20%' }} className="btn btn-primary">Back to Dashboard</Link>
                <h2 style={{ marginBottom: '20px', padding: '10px 20px', color: '#48c1cf', backgroundColor: "white", marginLeft: '20px' }}>Merchants</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ width: '120px' }}>Merchant Id</th>
                            <th scope="col" style={{ width: '530px' }}>Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {user.map((item, index) => {
                        if (item.role === "MERCHANT")
                        return (<>
                            <tbody>
                                <tr >
                                    <th scope="row" style={{ width: '120px' }} key={item.userId}> {index + 1}</th>
                                    <td style={{ width: '530px' }}>{item.name}</td>
                                    <td >{item.mobileNumber}</td>
                                    <td>₹ {item.emailId}</td>
                                    <td><button className="btnn btn-danger" style={{ padding: '4px 7px', borderRadius: '5px', marginTop: '-7px' }} onClick={() => deleteuser(item.userId)}>Delete</button></td>
                                    <td><Link to={'/updateuser/' + item.userId} className="btnn btn-warning" style={{ padding: '4px 7px', borderRadius: '5px', marginTop: '-7px' }}>Update</Link></td>

                                </tr >
                            </tbody>
                        </>
                        );
                    })}
                </table>


                <nav aria-label="Page navigation example" style={{ margin: '30px 0px', padding: '10px' }}>
                    <ul class="pagination " >
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MerchantList