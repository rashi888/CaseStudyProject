import React,{useState,useEffect} from 'react'


function ProductsAdd() {

    const[productName,setProductName]=useState("");
    const[productDescription,setProductDescription]=useState("");
    const[productPhoto,setProductPhoto]=useState("");
    const[productPrice,setProductPrice]=useState("");
    const[categoryId,setCategoryId]=useState("");
    const [category, setCategory] = useState([]);

    async function addProduct(){
        console.log(productName,productDescription,productPhoto,productPrice,categoryId);
        const formData=new FormData();
        formData.append('productPhoto',productPhoto);
        formData.append('productPrice',productPrice);
        formData.append('productName',productName);
        formData.append('productDescription',productDescription);
        formData.append('categoryId',categoryId);
        console.log(formData);
        let result=await fetch("http://localhost:8080/api/category/product"+categoryId,{
            method:'POST',
            body:formData
        });
        alert("Data has been saved")
    }

    


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
            <div className="containerr" style={{margin:'3% 7%',border:'0.3px solid lightgray',padding:'2%'}}>
                <h3>Add a new Product</h3>
                <form enctype="multipart/form-data">
                    <div className="row">
                        <div className="col-sm-5">

                            <input type="hidden" name="id" />
                            <div className="form-group">
                                <label for="ProductName">Name</label>
                                <input type="text" className="form-control" onChange={(e)=>setProductName(e.target.value)} required name="productName" id="productName"
                                    placeholder="Enter name" />

                            </div>
                            <div className="form-group">
                                <label for="category">Select Category</label>
                                <select className="form-control" onChange={(e)=>setCategoryId(e.target.value)} id="category" name="category">
                                    <option value="">Select Category</option>
                                    {category.map((item) => {
                                        return (
                                            <option value={item.categoryId}>{item.categoryTitle}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="price">Price</label>
                                <input type="number" className="form-control"  onChange={(e)=>setProductPrice(e.target.value)} required name="productPrice" id="productPrice"
                                    placeholder="Price" />
                            </div>
                            
                            <div className="form-group">
                                <label for="productDescription">Product Description</label>
                                <textarea className="form-control" onChange={(e)=>setProductDescription(e.target.value)} rows="5" name="productDescription" id="productDescription"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <p>Product Image</p>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" onChange={(e)=>setProductPhoto(e.target.files[0])} name="productPhoto" accept="image/jpeg, image/png" id="productPhoto" />
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