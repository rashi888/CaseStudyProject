import React from "react";
import "./CartPage.css";
import axios from "axios";
import HiMinusSm from "react-icons/hi";
import { BiMinus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = React.useState([]);
  const [tprice, setTprice] = React.useState(0);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/api/cart/viewCart?userId=${userId}`)
      .then((response) => {
        console.log(response.data);
        setCart(response.data.cartItem);
        setTprice(response.data.grandTotal);
        
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const decreaseQuantity = (id) => (e) => {
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    axios
      .post("http://localhost:8080/api/cart/removeFromCart", formdata)

      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const addQuantity = (id) => (e) => {
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    axios
      .post("http://localhost:8080/api/cart/addToCart", formdata)

      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const deletePoduct = (id) => (e) => {
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    axios
      .post("http://localhost:8080/api/cart/removeProductFromCart", formdata)

      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  if (cart.length === 0) {
    navigate("/cart");
  }

  const refresh = () => window.location.reload(true)

  const [data, setData] = useState({
    userId: userId,
    deliveryDetailsId: 1,
    paymentMethod: "COD",
  });

  const checkout = (event) => {
    console.log(data);
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/order/", data)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Success",
          text: "Order Placed Successfully",
          icon: "success",
        });
      })
      
      .catch((error) => {
        console.log(error);
      });

        refresh();
  };

  return (
    <>
      <main>
        <div className="container-main">
          <section className="mt-5 mb-4">
            <div className="row">
              <div className="col-lg-7">
                {cart.map((item) => {
                  return (
                    <>
                      <div className="cardy-box wish-list mb-4">
                        <div className="cardy-box-body">
                          <div className="row mb-4">
                            <div
                              onClick={deletePoduct(item.product.productId)}
                              className="Cross"
                            >
                              &#10006;
                            </div>
                            <div className="col-md-5 col-lg-3 col-xl-3">
                              <div className="mb-3 mb-md-0">
                                <img
                                  src={
                                    "http://localhost:8080/api/products/image/" +
                                    item.product.productPhoto
                                  }
                                  alt="img"
                                  className="img-fluid w-100"
                                />
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                              <div>
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <h5>{item.product.productName}</h5>
                                  </div>
                                </div>
                                <div className="mt-5  justify-content-between align-items-center">
                                  <div></div>
                                  <p className="mb-0">
                                    <span>
                                      <strong>
                                        Product Price - ₹
                                        <span>{item.product.productPrice}</span>
                                      </strong>
                                    </span>
                                  </p>
                                  <br />
                                  <p className="mb-0">
                                    <span>
                                      <strong>
                                        Quantity
                                        <div
                                          className="add-minus-quantity"
                                          style={{ marginTop: "-25px" }}
                                        >
                                          <BiMinus
                                            onClick={decreaseQuantity(
                                              item.product.productId
                                            )}
                                            className="fas fa-plus add"
                                          />
                                          <input
                                            type="text"
                                            placeholder={item.quantity}
                                          />
                                          <i
                                            class="ri-add-line"
                                            onClick={addQuantity(
                                              item.product.productId
                                            )}
                                          ></i>
                                        </div>
                                      </strong>
                                    </span>
                                  </p>
                                  <br />
                                  <p className="mb-0">
                                    <span>
                                      <strong>
                                        Total-₹
                                        <span>{item.totalProductPrice}</span>
                                      </strong>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="mb-4" />
                        </div>
                      </div>
                    </>
                  );
                })}
                <p className="text-primary mb-0">
                  <i className="fas fa-info-circle mr-1"></i> Do not delay the
                  purchase, adding items to your cart does not mean booking
                  them.
                </p>
              </div>

              <div className="col-lg-4">
                <div className="total-amt mb-4">
                  <div className="cardy-box-body">
                    <h5 className="mb-3">The total amount </h5>

                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Price
                        <span>
                          ₹<span>{tprice}</span>
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Delivery Charges
                        <span>Free</span>
                      </li>

                      {/* <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Secured Packaging Fee
                                                <span>₹99</span>
                                            </li> */}
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>The total amount</strong>
                          {/* <strong>
                                                        <p className="mb-0">(including VAT)</p>
                                                    </strong> */}
                        </div>
                        <span>
                          <strong>
                            ₹<span>{tprice}</span>
                          </strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                     to ="/address"
                      className="btn btn-block"
                      style={{
                        backgroundColor: "#34c3d3",
                        color: "white",
                        fontWeight: 500,
                      }}
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
                <div className="cardy-box mb-4">
                  <div className="cardy-box-body">
                    <a
                      className="dark-grey-text d-flex justify-content-between"
                      data-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Add a discount code (optional)
                      <span>
                        <i className="fas fa-chevron-down pt-1"></i>
                      </span>
                    </a>

                    <div className="collapse" id="collapseExample">
                      <div className="mt-3">
                        <div className="md-form md-outline mb-0">
                          <input
                            type="text"
                            id="discount-code"
                            className="form-control font-weight-light"
                            placeholder="Enter discount code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default CartPage;
