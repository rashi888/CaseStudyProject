import React, { useState, useEffect, useRef, useMemo } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';



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
        fetchdata();
    }, []);

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8080/api/products/" + productId, data,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((resp) => {
                console.log(resp["data"]["productId"]);
                console.log("success log");
                Swal.fire({
                    title: "Success",
                    text: "Product Updated Successfully",
                    icon: "success",
                });
                if(localStorage.getItem("role")=="ADMIN")
                {
                navigate("/admindashboard");
                }else
                {
                    navigate("/mdash");
                }
            })

    }

    const fetchdata = () => {
        axios.get("http://localhost:8080/api/products/" + productId,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((resp) => {
                console.log(resp["data"]);
                setData(resp["data"]);
            })
    }

    const editor = useRef(null)
    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }












    return (
        <>

            <div className="containerr" style={{ margin: '3% 7%', padding: '20px 40px', boxShadow: '10px 5px 10px lightgray', borderRadius: '2px', backgroundColor: 'white' }}>
                <h2  style={{ marginBottom: '40px',color:'#54b9c4',textAlign:'center',marginTop:'20px' }}>Update Product</h2>
                <form onSubmit={submitForm}>
                    <div className="row" style={{width:'100%',margin:'auto',paddingLeft:'130px',paddingBottom:'30px'}}>
                        <div className="col-sm-5" style={{marginLeft:'-25px',marginRight:'65px'}}>
                            <input type="hidden" name="id" />
                            <div className="form-group">
                                <label for="productName">Name</label>
                                <input type="text" className="form-control" onChange={(e) => handleChange(e, "productName")}
                                    value={data.productName} required name="productName" id="productName"
                                    placeholder="Enter name" />

                            </div>
                            <div className="form-group">
                                <label for="productStock">Stock</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "stock")}
                                    value={data.stock} required name="productStock" id="productStock"
                                    placeholder="Stock" />
                            </div>

                        </div>
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label for="productPrice">Price</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productPrice")}
                                    value={data.productPrice} required name="productPrice" id="productPrice"
                                    placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <label for="productMRP">MRP</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productMRP")}
                                    value={data.productMRP} required name="productMRP" id="productMRP"
                                    placeholder="MRP" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group"  style={{padding:'0 120px'}}>
                        <label for="productDescription">Product Description</label>
                        <JoditEditor
                            // ref={editor}
                            value={data.productDescription}
                            // config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setData({ ...data, productDescription: newContent })} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => { }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '20px',marginLeft:'43%',marginBottom:'30px' }}>Update product</button>
                </form>
            </div>

        </>
    )
}

export default ProductUpdate