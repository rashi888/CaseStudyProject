import React,{useState} from 'react'


function ProductsAdd() {

    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[file,setFile]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");

    async function addProduct(){
        console.log(name,description,file,price);
        const formData=new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);
        let result=await fetch("http://localhost:8080/api/category/categoryId/product",{
            method:'POST',
            body:formData
        });
        alert("Data has been saved")
    }

    return (
        <>
            <div className="containerr" style={{margin:'3% 7%',border:'0.3px solid lightgray',padding:'2%'}}>
                <h3>Add a new Product</h3>
                <form enctype="multipart/form-data">
                    <div className="row">
                        <div className="col-sm-5">

                            <input type="hidden" name="id" />
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} required name="name" id="name"
                                    placeholder="Enter name" />

                            </div>
                            <div className="form-group">
                                <label for="category">Select Category</label>
                                <select className="form-control" onChange={(e)=>setName(e.target.value)} id="category" name="category">
                                    <option />
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="price">Price</label>
                                <input type="number" className="form-control"  onChange={(e)=>setPrice(e.target.value)} required name="price" id="price"
                                    placeholder="Price" />
                            </div>
                            
                            <div className="form-group">
                                <label for="description">Product Description</label>
                                <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)} rows="5" name="description" id="description"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <p>Product Image</p>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" onChange={(e)=>setFile(e.target.files[0])} name="productImage" accept="image/jpeg, image/png" id="productImage" />
                                <label className="custom-file-label" for="productImage">Choose file</label>
                            </div>
                            <div className="form-group">
                                <img src="#" id="imgPreview" height="100px" width="100px" style={{marginTop: "20px"}} alt=" " />
                            </div>
                            <input type="hidden" name="imgName"  />
                            <button onClick={addProduct} type="submit" className="btn btn-primary">Add product</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ProductsAdd