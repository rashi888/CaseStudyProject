import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';



function ProductUpdate() {
    const { id } = useParams();
    const productId = id;
    console.log(productId);

    const [data, setData] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productPhoto: "",
        productMRP: "", 
    });

    const navigate = useNavigate();

    

    useEffect(() => {
        // console.log(data);
    }, [data]);

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8080/api/products/" + productId, data)
            .then((resp) => {
                console.log(resp["data"]["productId"]);
                console.log("success log");
                Swal.fire({
                    title: "Success",
                    text: "Product Updated Successfully",
                    icon: "success",
                });
                navigate("/mdash");
            })
    }



    





        return (
        <>

            <div className="containerr" style={{ margin: '3% 7%', padding: '20px 40px', boxShadow: '10px 5px 10px lightgray', borderRadius: '2px', backgroundColor: 'white' }}>
                <h3 style={{ marginBottom: '10px' }}>Add a new Product</h3>
                <form onSubmit={submitForm}>
                    <div className="row">
                        <div className="col-sm-5">

                            <input type="hidden" name="id" />
                            <div className="form-group">
                                <label for="productName">Name</label>
                                <input type="text" className="form-control" onChange={(e) => handleChange(e, "productName")}
                                    value={data.productName} required name="productName" id="productName"
                                    placeholder="Enter name" />

                            </div>
                            
                            <div className="form-group">
                                <label for="productPrice">Price</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productPrice")}
                                    value={data.productPrice} required name="productPrice" id="productPrice"
                                    placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <label for="productPrice">MRP</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productMRP")}
                                    value={data.productMRP} required name="productMRP" id="productMRP"
                                    placeholder="MRP" />
                            </div>

                            <div className="form-group">
                                <label for="productDescription">Product Description</label>
                                <textarea className="form-control" onChange={(e) => handleChange(e, "productDescription")}
                                    value={data.productDescription} rows="5" name="productDescription" id="productDescription"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            {/* <p>Product Image</p>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" onChange={handleFileChange} name="productPhoto" value={data.productPhoto} accept="image/jpeg, image/png" id="productPhoto" />
                                <label className="custom-file-label" for="productImage" > {selectedImage ? (
                                    <p style={{ fontWeight: 300 }}>{selectedImage}</p>
                                ) : (
                                    <p style={{ fontWeight: 300 }}>Choose image</p>
                                )}</label>
                            
                            </div> */}

                            <button type="submit" className="btn btn-primary" style={{marginTop:'20px'}}>Update product</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ProductUpdate