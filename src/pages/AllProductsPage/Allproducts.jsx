import React, { useState, useEffect,useDeps } from "react";
import "./Allproducts.css";
import { Link } from "react-router-dom";
import icon from "../../assets/All_Icons/user icon.png";
// import img from "../../assets/MSignupImg/msignup.jpg"
import img from "../../assets/PhoneImgs/phone1.webp";
import { RiArrowDownSLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Spinner } from "reactstrap";
import { useLocation } from 'react-router'

function Allproducts(props) {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [api, setApi] = useState(props.api);
  const [isLoading, setIsLoading] = useState(false);
  const [totalpages, setTotalpages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortBy, setSortBy] = useState("productId");
  const [dir, setDir] = useState("DESC");

  const setpage = (item) => (e) => {
    // console.log(item);
    setPageNumber(item - 1);
  };

  if(api !== props.api){
    setApi(props.api);
    setPageNumber(0);

  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 

  const fetchData = () => {
    setIsLoading(true);
    scrollToTop();
    const url =
      api +
      "?pageSize=10&pageNumber=" +
      pageNumber +
      "&sortBy=" +
      sortBy +
      "&sortDir=" +
      dir;
     
    fetch(url,{
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
      }
  })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProduct(data ["content"]);
      

  
    setTotalpages(data["totalPages"]);
    setProduct(data["content"]);
    setIsLoading(false);
      })
  };
 
  

  useEffect(() => {
    fetchData();
  }, [
    api,
    pageNumber,
    sortBy,
    dir,
    location.key
  ]);
  // console.log(product);
  // console.log(totalpages);
  const page = [];

  for (let i = 1; i <= totalpages; i++) {
    page.push(i);
  }
  // console.log(page);

  const addtocart = (id) => (e) => {
    // console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    if(userId === null){
      Swal.fire({
        text: "Please Login to Add Product to Cart",
        icon: "info",
      });
    }
    else{
    
    const url = "http://localhost:8080/api/cart/addToCart";
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        Swal.fire({
          title: "Success",
          text: "Product Added to Cart Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

  const viewProduct = (id) => (e) => {
    // console.log(e.target.value);
    window.location.href = "/singleproductview/" + id;
  };

  return (
    <>
      <div className="universal-page">
        <div className="heading-allproducts">
          <h2
            style={{
              marginBottom: "20px",
              padding: "10px 20px",
              fontWeight: "400",
              marginLeft: "20px",
            }}
          >
            {props.title}
          </h2>
          <div class="dropdown show" style={{marginBottom:'25px',right:'25px'}}>
            <Link
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                border: "0.1px solid lightgray",
                backgroundColor: "white",
              }}
            >
              Sort by: <span style={{ fontWeight: "500" }}>Sort By</span>
            </Link>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setSortBy("productId");
                }}
              >
                New Arrivals
              </Link>
              <Link
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setSortBy("productPrice");
                  setDir("ASC");
                  
                }}
              >
                Price: Low to High
              </Link>
              <Link
                class="dropdown-item"
                href="#"
                onClick={() => {
                  setSortBy("productPrice");
                  setDir("DESC");
                }}
              >
                Price: High to Low
              </Link>
            </div>
          </div>
        
        </div>

     

        {isLoading ? (
          <Spinner
            animation="border"
            role="status"
            color="primary"
            style={{ marginLeft: "50%" }}
          />
        ) : (
          <>
            {product.map((item) => {
              return (
                <>
                  <div className="card-one">
                    <div className="img-section">
                      <img
                        onClick={viewProduct(item.productId)}
                        src={
                          "http://localhost:8080/api/products/image/" +
                          item.productPhoto[0]
                        }
                        alt=""
                        height="100%"
                        style={{ padding: "25px 70px" }}
                      />
                    </div>
                    <div className="content-section">
                      <h4 style={{ marginBottom: "20px" }}>
                        {item.productName}
                      </h4>
                      <div
                      className="desc-mobile"
                        dangerouslySetInnerHTML={{
                          __html: item.productDescription,
                        }}
                      ></div>
                      {/* <h2 style={{ margin: '10px 0px' }}>₹ <span>12000</span></h2> */}
                    </div>
                    <div className="price-section">
                      <h6>
                        M.R.P ₹ <del>{item.productMRP}</del>{" "}
                      </h6>
                      <h2 style={{ margin: "15px 0px" }}>
                        ₹ {item.productPrice}
                      </h2>
                      <button
                        onClick={addtocart(item.productId)}
                        type="button"
                        className="btn-price btn-warning"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}

        <nav
          aria-label="Page navigation example"
          style={{ margin: "30px 20px", padding: "10px" }}
        >
          <ul
            class="pagination"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li class="page-item" style={{ backgroundColor: "yellow" }}>
              <Link
                class="page-link"
                href="#"
                aria-label="Previous"
                style={{ fontSize: "24px" }}
              >
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
              <Link
                class="page-link"
                href="#"
                aria-label="Next"
                style={{ fontSize: "24px" }}
              >
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Allproducts;
