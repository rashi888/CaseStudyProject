import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"
import Swal from 'sweetalert2';
import { Spinner } from 'reactstrap'
import axios from 'axios';

function UserList() {
    const [isLoading, setIsLoading] = useState(false);

    const refresh = () => { window.location.reload(); }

    const deleteUser = (userId) => {
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
                        refresh();
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


    const [user, setUser] = useState([]);

    const fetchData = () => {
        setIsLoading(true);
        return fetch("http://localhost:8080/api/users/",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
       
            .then((response) => response.json())
            .then((data) => {setUser(data)
        
            setIsLoading(false);});
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>

               
                <Link to='/admindashboard' style={{ margin: "2%  10px ", padding: '1%', width: '20%' }} className="btn btn-primary">Back to Dashboard</Link>
                <h2 style={{ marginBottom: '20px', padding: '10px 20px', color: '#48c1cf', marginLeft: '20px' }}>All Users</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {isLoading ? (
          <Spinner animation="border" role="status" color='primary' style={{marginLeft:'600px'}}/>
        ) : (
          <>
           {user.map((item, index) => {
                        return (<>
                            <tbody>
                                <tr >
                                    <th scope="row" key={item.userId}> {index + 1}</th>
                                    <td >{item.name}</td>
                                    <td >{item.mobileNumber}</td>
                                    <td>{item.emailId}</td>
                                    <td><button className="btnn btn-danger" style={{ padding: '4px 7px', borderRadius: '5px', marginTop: '-7px' }} onClick={() => deleteUser(item.userId)}>Delete</button></td>
                                    <td><Link to={'/updateuser/' + item.UserId} className="btnn btn-warning" style={{ padding: '4px 7px', borderRadius: '5px', marginTop: '-7px' }}>Update</Link></td>

                                </tr >
                            </tbody>
                        </>
                        );
                    })}
          </>)}
                   
                </table>


                
            </div>
        </>
    )
}

export default UserList