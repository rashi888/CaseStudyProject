import React, { useState, useEffect, useRef, useMemo } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import JoditEditor from 'jodit-react';



function AddProduct() {
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [productPhoto, setProductPhoto] = useState(null);
    const [productId, setProductId] = useState("");
    const [selectedImage, setSelectedImage] = useState([]);
    const userId = localStorage.getItem("userId");

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setProductPhoto(e.target.files);
        setSelectedImage(e.target.files[0].name);

    };

    const [data, setData] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        
        productMRP: "",
    });


    useEffect(() => {
        // console.log(data); 
    }, [data]);

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/category/" + categoryId + "/product/" + userId, data,{
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        }
    }
        )
            .then((resp) => {
                const proId = resp["data"]["productId"];

                const formData = new FormData();
                // formData.append('images', productPhoto);  // Add product image to form data')
                for (let i = 0; i < productPhoto.length; i++) {
                    formData.append('images', productPhoto[i]);
                }
                console.log(productPhoto);
                console.log(selectedImage)
                console.log(formData);


                axios.post("http://localhost:8080/api/products/multiImg_upload/" + proId, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": "Bearer " + localStorage.getItem("token"),
                    }
                }).then((resp) => {
                    console.log(resp);
                    console.log("success log");
                    // alert("Product added successfully!");
                })

                console.log(resp["data"]["productId"]);
                console.log("success log");
                Swal.fire({
                    title: "Success",
                    text: "Product Added Successfully",
                    icon: "success",
                });
                navigate("/mdash");
            })
            .catch((error) => {
                console.log(error);

            });
    };


    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/categories/",
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        });
        const data = await response.json();
        return setCategory(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(category);

    const editor = useRef(null)
    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }


    return (
        <>

            <div className="containerr" style={{ margin: '30px auto',width:'1100px',padding:'20px 40px', boxShadow: '10px 5px 10px lightgray', borderRadius: '2px',backgroundColor:'white' }}>
                <h2 style={{ marginBottom: '40px',color:'#54b9c4',textAlign:'center',marginTop:'20px' }}>Add a new Product</h2>
                <form onSubmit={submitForm} >
                    <div className="row" style={{width:'100%',margin:'auto',paddingLeft:'130px',paddingBottom:'30px'}}>
                        <div className="col-sm-5"  style={{marginLeft:'-25px',marginRight:'65px'}}>
                            <input type="hidden" name="id" />
                            <div className="form-group" >
                                <label for="productName">Name</label>
                                <input type="text" className="form-control" onChange={(e) => handleChange(e, "productName")}
                                    value={data.productName} required name="productName" id="productName"
                                    placeholder="Enter name" />

                            </div>
                            <div className="form-group">
                                <label for="category">Select Category</label>
                                <select className="form-control" onChange={(e) => setCategoryId(e.target.value)} id="categoryId" name="categoryId" required>
                                    <option value="">Select Category</option>
                                    {category.map((item) => {
                                        return (
                                            <option value={item.categoryId}>{item.categoryTitle}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="stock">Stock</label>
                                <input type="text" className="form-control" onChange={(e) => handleChange(e, "stock")}
                                    value={data.stock} required name="stock" id="stock"
                                    placeholder="Stock" />
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label for="productPrice">MRP</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productMRP")}
                                    value={data.productMRP} required name="productMRP" id="productMRP"
                                    placeholder="MRP" />
                            </div>
                            <div className="form-group">
                                <label for="productPrice">Price</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productPrice")}
                                    value={data.productPrice} required name="productPrice" id="productPrice"
                                    placeholder="Price" />
                            </div>
                            <p>Product Image</p>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" onChange={handleFileChange} name="productPhoto" value={data.productPhoto} accept="image/jpeg, image/png" id="productPhoto" multiple />
                                <label className="custom-file-label" for="productImage" > {selectedImage ? (
                                    <p style={{ fontWeight: 300 }}>{selectedImage}</p>
                                ) : (
                                    <p style={{ fontWeight: 300 }}>Choose image</p>
                                )}</label>
                                {/* {selectedImage && <p> {selectedImage}</p>} */}
                                {/* {selectedImage ? (<p>Selected Image:{selectedImage}</p>):( <p> Choose File</p> )} */}

                            </div>

                            {/* <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>Add product</button> */}


                            
                        </div>
                    </div>

                    <div className="form-group" style={{padding:'-5px 120px'}}>
                                <label for="productDescription">Product Description</label>
                                <JoditEditor
                                    // ref={editor}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        // Add more CSS properties as needed
                                    }}
                                    value={data.productDescription}
                                    // config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={(newContent) => setData({ ...data, productDescription: newContent })} // preferred to use only this option to update the content for performance reasons
                                    onChange={(newContent) => { }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '20px',marginLeft:'43%',marginBottom:'30px' }}>Add product</button>

                </form>
            </div>

        </>
    )
}

export default AddProduct