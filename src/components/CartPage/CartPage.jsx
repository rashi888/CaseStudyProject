import React from 'react'
import "./CartPage.css"
import axios from 'axios'

function CartPage() {

    const [cart, setCart] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        axios.get('http://localhost:8080/api/cart/viewCart')
            .then(res => {
                console.log(res)
                setCart(res.data)
                let sum = 0
                res.data.map(item => {
                    sum += item.product.price * item.quantity
                })
                setTotal(sum)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    return (
        <>
            <main>
                <div class="container-main">
                   
                    <section class="mt-5 mb-4">
                       
                        <div class="row">
                            <div class="col-lg-7">
                               
                                <div class="cardy-box wish-list mb-4" >
                                    <div class="cardy-box-body">

                                        <h5 class="mb-4">Cart (<span >2</span> items)</h5>

                                        <div class="row mb-4">
                                            <div class="col-md-5 col-lg-3 col-xl-3">
                                                <div class="mb-3 mb-md-0">
                                                    <img class="img-fluid w-100"

                                                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />

                                                </div>
                                            </div>
                                            <div class="col-md-7 col-lg-9 col-xl-9" >
                                                <div>
                                                    <div class="d-flex justify-content-between">
                                                        <div>
                                                            <h5 >Blue denim shirt</h5>
                                                            <p class="mb-2 text-uppercase small">Category: <span ></span></p>

                                                        </div>

                                                    </div>
                                                    <div class="mt-5 d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <a href="#!" type="button" class="cardy-box-link-secondary small text-uppercase mr-3"><i
                                                                class="fas fa-trash-alt mr-1"></i> Remove item </a>

                                                        </div>
                                                        <p class="mb-0"><span><strong>₹<span >29999</span></strong></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="mb-4" />

                                        <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                                            items to your cart does not mean booking them.</p>

                                    </div>
                                </div>




                            </div>

                            <div class="col-lg-4">
                                <div class="total-amt mb-4" >
                                    <div class="cardy-box-body">

                                        <h5 class="mb-3">The total amount </h5>

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Price (1 item)
                                                <span>₹<span  >19880</span></span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Delivery Charges
                                                <span>Free</span>
                                            </li>
                                            
                                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Secured Packaging Fee
                                                <span>₹99</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>The total amount</strong>
                                                    {/* <strong>
                                                        <p class="mb-0">(including VAT)</p>
                                                    </strong> */}
                                                </div>
                                                <span><strong>₹<span  >19979</span></strong></span>
                                            </li>
                                        </ul>

                                        <a h class="btn btn-block" style={{backgroundColor:'#34c3d3',color:'white',fontWeight:500}}>Checkout</a>

                                    </div>
                                </div>
                                <div class="cardy-box mb-4">
                                    <div class="cardy-box-body">

                                        <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            Add a discount code (optional)
                                            <span><i class="fas fa-chevron-down pt-1"></i></span>
                                        </a>

                                        <div class="collapse" id="collapseExample">
                                            <div class="mt-3">
                                                <div class="md-form md-outline mb-0">
                                                    <input type="text" id="discount-code" class="form-control font-weight-light"
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