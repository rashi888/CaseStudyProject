import React, { useState, useEffect } from 'react'
import axios from 'axios'



function ImageAdd() {
    
    const [productPhoto, setProductPhoto] = useState(null);
    const [productId, setProductId] = useState("");

    const handleFileChange = (event) => {
        setProductPhoto(event.target.files[0]);
        console.log(event.target.files[0]);
    };



    const submitForm = (event) => {
        event.preventDefault();

      

        // axios.post("http://localhost:8080/api/products/img_upload/"+productId+1, productPhoto)


              // ---------------------------------------------

        // Create form data
    const formData = new FormData();
    formData.append('image', productPhoto);  // Add product image to form data')


    axios.post("http://localhost:8080/api/products/img_upload/"+productId, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((resp) => {
        console.log(resp);
        console.log("success log");
        alert("Product added successfully!");
    })
      






        // ------------------------------------------------
    };

    const fetchProduct = async () => {
        const response = await fetch("http://localhost:8080/api/products");
        const data = await response.json();
        console.log("product");
        const last=data["content"].length;
        console.log(data["content"][last-1]["productId"]);
        return setProductId(data["content"][last-1]["productId"]);
        
    };


   

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <div className="containerr" style={{ margin: '3% 7%', border: '0.3px solid lightgray', padding: '2%' }}>
                <h3>Add a new Product</h3>
                <form onSubmit={submitForm}>
                    <div className="row">
                        <div className="col-sm-5">
                        <div className="custom-file">
                                <input type="file" className="custom-file-input" onChange={handleFileChange} name="productPhoto" accept="image/jpeg, image/png" id="productPhoto" />
                                <label className="custom-file-label" for="productImage">Choose file</label>
                            </div>


                            <button type="submit" className="btn btn-primary">Add product</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ImageAdd