import React from 'react'
import "./CartPage.css"
import axios from 'axios'

function CartPage() {

    const [cart, setCart] = React.useState([])
    const [total, setTotal] = React.useState(0)

    const userId = localStorage.getItem("userId")
   

    const fetchData = () => {
        axios.get(`http://localhost:8080/api/cart/viewCart?userId=${userId}`)
            .then((response) => {
                console.log(response.data)
                setCart(response.data.cartItem)
                setTotal(response.data.total)
            }
            )
            .catch((error) => console.log(error))


    }

    React.useEffect(() => {
        fetchData()
    }, [])



    



    




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
                               
                                <div className="cardy-box wish-list mb-4" >
                                    <div className="cardy-box-body">


                                        <div className="row mb-4">
                                            <div className="col-md-5 col-lg-3 col-xl-3">
                                                <div className="mb-3 mb-md-0">
                                                    <img src={"http://localhost:8080/api/products/image/"+item.product.productPhoto} alt="img" className="img-fluid w-100" />

                                                </div>
                                            </div>
                                            <div className="col-md-7 col-lg-9 col-xl-9" >
                                                <div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h5 >{item.product.productName}</h5>

                                                        </div>

                                                    </div>
                                                    <div className="mt-5  justify-content-between align-items-center">
                                                        <div>
                                                            <a href="#!" type="button" className="cardy-box-link-secondary small text-uppercase mr-3"><i
                                                                className="fas fa-trash-alt mr-1"></i> Remove item </a>

                                                        </div>
                                                        <p className="mb-0"><span><strong>Product Price - ₹<span >{item.product.productPrice}</span></strong></span></p><br/>
                                                        <p className="mb-0"><span><strong>Quantity<span >{item.quantity}</span></strong></span></p><br />
                                                        <p className="mb-0"><span><strong>Total-₹<span >{item.totalProductPrice}</span></strong></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="mb-4" />

                                        

                                    </div>
                                </div>
                                </>
                                    )
                                })}
                                <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                                            items to your cart does not mean booking them.</p>




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