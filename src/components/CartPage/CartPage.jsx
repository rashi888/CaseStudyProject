import React from 'react'
import "./CartPage.css"

function CartPage() {

    const [cart, setCart] = React.useState([])
    const [total, setTotal] = React.useState(0)

    const userId = localStorage.getItem("userId")
    const formdata = new FormData();
    formdata.append("userId", userId);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/cart/getCart", {
            method: "GET",
            body: formdata,
        })
            .then((response) => response.json())
            .then((data) => {
                setCart(data)
                console.log(data)
            });
    };

    React.useEffect(() => {
        fetchData();
    }, []);




    




    return (
        <>
            <main>
                <div className="container-main">
                   
                    <section className="mt-5 mb-4">
                       
                        <div className="row">
                            <div className="col-lg-7">
                               
                                <div className="cardy-box wish-list mb-4" >
                                    <div className="cardy-box-body">

                                        <h5 className="mb-4">Cart (<span >2</span> items)</h5>

                                        <div className="row mb-4">
                                            <div className="col-md-5 col-lg-3 col-xl-3">
                                                <div className="mb-3 mb-md-0">
                                                    <img className="img-fluid w-100"

                                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />

                                                </div>
                                            </div>
                                            <div className="col-md-7 col-lg-9 col-xl-9" >
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h5 >Blue denim shirt</h5>
                                                            <p className="mb-2 text-uppercase small">Category: <span ></span></p>

                                                        </div>

                                                    </div>
                                                    <div className="mt-5 d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <a href="#!" type="button" className="cardy-box-link-secondary small text-uppercase mr-3"><i
                                                                className="fas fa-trash-alt mr-1"></i> Remove item </a>

                                                        </div>
                                                        <p className="mb-0"><span><strong>₹<span >29999</span></strong></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mb-4" />

                                        <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                                            items to your cart does not mean booking them.</p>

                                    </div>
                                </div>




                            </div>

                            <div className="col-lg-4">
                                <div className="total-amt mb-4" >
                                    <div className="cardy-box-body">

                                        <h5 className="mb-3">The total amount </h5>

                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Price (1 item)
                                                <span>₹<span  >19880</span></span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Delivery Charges
                                                <span>Free</span>
                                            </li>
                                            
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Secured Packaging Fee
                                                <span>₹99</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>The total amount</strong>
                                                    {/* <strong>
                                                        <p className="mb-0">(including VAT)</p>
                                                    </strong> */}
                                                </div>
                                                <span><strong>₹<span  >19979</span></strong></span>
                                            </li>
                                        </ul>

                                        <a h className="btn btn-block" style={{backgroundColor:'#34c3d3',color:'white',fontWeight:500}}>Checkout</a>

                                    </div>
                                </div>
                                <div className="cardy-box mb-4">
                                    <div className="cardy-box-body">

                                        <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            Add a discount code (optional)
                                            <span><i className="fas fa-chevron-down pt-1"></i></span>
                                        </a>

                                        <div className="collapse" id="collapseExample">
                                            <div className="mt-3">
                                                <div className="md-form md-outline mb-0">
                                                    <input type="text" id="discount-code" className="form-control font-weight-light"
                                                        placeholder="Enter discount code" />
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
    )
}

export default CartPage