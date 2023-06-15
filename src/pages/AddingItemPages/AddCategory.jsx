import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function AddCategory() {
    const [categoryTitle, setCategoryTitle] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const navigate = useNavigate();

    const [data, setData] = useState({
        categoryTitle: "",
        categoryDescription: "",

    });

    useEffect(() => {
        // console.log(data);
    }, [data]);

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/categories/", data,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((resp) => {
                console.log(resp["data"]["categoryId"]);
                console.log("success log");
                Swal.fire({
                    title: "Success",
                    text: "Category Added Successfully",
                    icon: "success",
                });
                if(localStorage.getItem("role")=="ADMIN")
                {
                navigate("/admindashboard");
                }else{

                    navigate("/mdash");
                }
                
            })
    }

    


    return (
        <>
            <div className="containerr" style={{width:'800px', margin: "2% auto", backgroundColor: 'white', boxShadow: '5px 10px 30px lightgray', borderRadius: '4px', padding: '10px 80px' }}>
            <h2 style={{ marginBottom: '40px',color:'#54b9c4',marginTop:'20px' }}>Add a Category</h2>
               
                <div className="row">
                    <div className="col-sm-4">
                        <form onSubmit={submitForm}>
                            <input type="hidden" name="id" />
                            <div className="form-group">
                                <label for="name"> Category Title</label>
                                <input type="text" className="form-control" required name='categoryTitle' placeholder="Enter name" 
                                onChange={(e) => handleChange(e, "categoryTitle")} value={data.categoryTitle}
                                 />
                            </div>
                            <div className="form-group">
                                <label for="description">Category Description</label>
                                <textarea className="form-control" rows="5" name="categoryDescription" id="categoryDescription"
                                    onChange={(e) => handleChange(e, "categoryDescription")} value={data.categoryDescription}
                                
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Category</button>
                            <Link to='/mdash' style={{ margin: "15px  0px ", padding: '3%', width: '75%' }} className=" d-block btn btn-primary ">Back To DashBoard</Link>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCategory