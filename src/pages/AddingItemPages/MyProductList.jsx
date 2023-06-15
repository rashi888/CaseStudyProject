import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"
import Swal from 'sweetalert2';
import { Spinner } from 'reactstrap'

function MyProductList() {

    const [isLoading, setIsLoading] = useState(false);
      const [totalpages, setTotalpages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortBy, setSortBy] = useState("productId");
  const [dir, setDir] = useState("DESC");

  const setpage = (item) => (e) => {
    console.log(item);
    setPageNumber(item - 1);
  };


    const deleteProduct = (id) => {
        fetch("http://localhost:8080/api/products/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        }).then(() => {
            Swal.fire({
                title: "Success",
                text: "Product Deleted Successfully",
                icon: "success",
            });
            fetchData();
        });
    };

    const [product, setProduct] = useState([]);

    const fetchData = () => {
        setIsLoading(true);
        const url =
      "http://localhost:8080/api/products/mId/"+localStorage.getItem("userId") +
      "?pageSize=10&pageNumber=" +
      pageNumber +
      "&sortBy=" +
      sortBy +
      "&sortDir=" +
      dir;
        return fetch(url,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setProduct(data["content"])
                setTotalpages(data["totalPages"]);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [
        pageNumber,
    ]);
    console.log(product);

    const page = [];

  for (let i = 1; i <= totalpages; i++) {
    page.push(i);
  }
  console.log(page);


    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>

                <Link to="/productadd" style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className="btn btn-primary">Add Product</Link>
                <Link to='/mdash' style={{ margin: "2%  10px ", padding: '1%', width: '20%' }} className="btn btn-primary">Back to Dashboard</Link>
                <h2 style={{ marginBottom: '20px', padding: '10px 20px', marginLeft: '10px' }}>All Products</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col" style={{width:'700px'}}>Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Delete</th> */}
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {isLoading ? (
                        <Spinner animation="border" role="status" color='primary' style={{marginLeft:'600px' }} />
                    ) : (
                        <>
                            {product.map((item, index) => {
                                return (<>
                                    <tbody>
                                        <tr >
                                            <th scope="row" key={item.productId}> {index + 1}</th>
                                            <td style={{width:'700px'}}>{item.productName}</td>
                                            <td >{item.category.categoryTitle}</td>
                                            <td>{item.stock}</td>
                                            <td>₹ {item.productPrice}</td>
                                            {/* <td><button className="btnn btn-danger" style={{ padding: '4px 7px', borderRadius: '5px',marginTop:'-7px' }} onClick={() => deleteProduct(item.productId)}>Delete</button></td> */}
                                            <td><Link to={'/updateproduct/' + item.productId} className="btnn btn-warning" style={{ padding: '4px 7px', borderRadius: '5px', marginTop: '-7px' }}>Update</Link></td>

                                        </tr >
                                    </tbody>
                                </>
                                );
                            })}
                        </>)}


                </table>


                <nav aria-label="Page navigation example" style={{ margin: '30px 20px', padding: '10px' }}>
          <ul class="pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <li class="page-item" style={{ backgroundColor: 'yellow' }}>
              <Link class="page-link" href="#" aria-label="Previous" style={{ fontSize: '24px' }}>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
             {page.map((item) => {
              return (
                <>
                  <li class="page-item f-10" onClick={setpage(item)}>
                    <Link
                      class="page-link"
                      onClick={setpage(item)}
                      href="#"
                      style={{ fontSize: "24px" }}
                    >
                      {item}
                    </Link>
                  </li>
                </>
              );
            })}
            <li class="page-item">
              <Link class="page-link" href="#" aria-label="Next" style={{ fontSize: '24px' }}>
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
            </div>
        </>
    )
}

export default MyProductList