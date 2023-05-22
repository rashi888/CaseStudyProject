import React, { useState, useEffect } from 'react'
import axios from 'axios'



function ProductsAdd() {
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("");

    const [data, setData] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productPhoto: "",
    });


    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/category/product/" + categoryId, data)
            .then((resp) => {
                console.log(resp);
                console.log("success log");
                alert("Product added successfully!");
            })
            .catch((error) => {
                console.log(error);

            });
    };



    const fetchData = async () => {
        const response = await fetch("http://localhost:8080/api/categories/");
        const data = await response.json();
        return setCategory(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(category);

    return (
        <>
            <div className="containerr" style={{ margin: '3% 7%', border: '0.3px solid lightgray', padding: '2%' }}>
                <h3>Add a new Product</h3>
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
                                <label for="category">Select Category</label>
                                <select className="form-control" onChange={(e) => setCategoryId(e.target.value)} id="categoryId" name="categoryId">
                                    <option value="">Select Category</option>
                                    {category.map((item) => {
                                        return (
                                            <option value={item.categoryId}>{item.categoryTitle}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="productPrice">Price</label>
                                <input type="number" className="form-control" onChange={(e) => handleChange(e, "productPrice")}
                                    value={data.productPrice} required name="productPrice" id="productPrice"
                                    placeholder="Price" />
                            </div>

                            <div className="form-group">
                                <label for="productDescription">Product Description</label>
                                <textarea className="form-control" onChange={(e) => handleChange(e, "productDescription")}
                                    value={data.productDescription} rows="5" name="productDescription" id="productDescription"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <p>Product Image</p>
                            {/* <div className="custom-file">
                                <input type="file" className="custom-file-input" onChange={(e)=>setProductPhoto(e.target.files[0])} name="productPhoto" accept="image/jpeg, image/png" id="productPhoto" />
                                <label className="custom-file-label" for="productImage">Choose file</label>
                            </div> */}
                            <input type="text" onChange={(e) => handleChange(e, "productPhoto")}
                                value={data.productPhoto} name="productPhoto" id="" />

                            <button type="submit" className="btn btn-primary">Add product</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ProductsAdd