import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function CategoryAdd() {
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
        axios.post("http://localhost:8080/api/categories/", data)
            .then((resp) => {
                console.log(resp["data"]["categoryId"]);
                console.log("success log");
                Swal.fire({
                    title: "Success",
                    text: "Category Added Successfully",
                    icon: "success",
                });
                navigate("/mdash");
                
            })
    }

    


    return (
        <>
            <div className="containerr" style={{ margin: "2% 20%", backgroundColor: 'white', boxShadow: '5px 10px 30px lightgray', borderRadius: '4px', padding: '2%' }}>
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
                            <Link to='/mdash' style={{ margin: "2%  0px ", padding: '1%', width: '55%' }} className=" d-block      btn btn-primary ">Back To DashBoard</Link>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryAdd