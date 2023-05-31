import React from 'react'
import Dropdown from './Dropdown'

function AddressPage() {
    return (
        <>
            <div className="containerr mt-3">
                <section className="mt-5 mb-4" style={{ margin: '5%' }}>
                    <div className="row" >
                        <div className="col-lg-8 mb-4">
                            <div className="wish-list pb-1" style={{ margin: '5% 3%' }}>
                                <div className="card-body" style={{ backgroundColor: 'lightgray', borderRadius: '3px', padding: '20px', boxShadow: "10px 10px 10px lightgray" }}>


                                    <div className="delivery-address" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h2>2. Address</h2>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offers"></div>
                                    <div className="items-and-delivery"></div>


                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">

                            <div className="cardy mb-4" style={{ border: "0.3px solid lightgray", margin: '10% 1%', padding: '2% 5%' }}>
                                <div className="card-body">

                                    <h5 className="mb-3">The total amount </h5>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Amount Payable
                                            <span>₹<span ></span></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>The total amount of</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>₹<span></span></strong></span>
                                        </li>
                                    </ul>

                                    <form action="" method="post"  >
                                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light" style={{ marginLeft: '0%' }}>Pay Now</button>
                                    </form>

                                </div>
                            </div>
                            <div className="cardy mb-4" style={{ border: "0.3px solid lightgray" }}>
                                <div className="card-body">

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
        </>
    )
}


export default AddressPage