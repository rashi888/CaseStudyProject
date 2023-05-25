import React from 'react'

function Checkout() {
    return (
        <>
            <div className="containerr mt-3">
                <section className="mt-5 mb-4" style={{margin:'5%' }}>
                    <div className="row" >
                        <div className="col-lg-8 mb-4">
                            <div className="wish-list pb-1" style={{ margin:'5% 3%' }}>
                                <div className="card-body" style={{backgroundColor:'white',borderRadius:'3px',padding:'20px',boxShadow:"10px 10px 10px lightgray"}}>

                                    <h5 className="mb-2">Billing details</h5>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="md-form md-outline mb-0 mb-lg-4">
                                                <label for="firstName">First name</label>
                                                <input type="text" id="firstName" required className="form-control mb-0 mb-lg-2" />
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="md-form md-outline">
                                                <label for="lastName">Last name</label>
                                                <input type="text" id="lastName" required className="form-control" />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="d-flex flex-wrap">
                                        <div className="select-outline position-relative w-100">
                                            <label>Country - <strong>INDIA</strong></label>


                                        </div>
                                    </div>
                                    <div className="md-form md-outline mt-2">
                                        <label for="form14">Address (Line 1)</label>
                                        <input type="text" required id="form14" placeholder="House number and street name" className="form-control" />
                                    </div>
                                    <div className="md-form md-outline mt-2">
                                        <label for="form15">Address (Line 2)</label>
                                        <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)"
                                            className="form-control" />
                                    </div>


                                    <div className="md-form md-outline mt-3">
                                        <label for="form16">Postcode / ZIP</label>
                                        <input type="text" maxlength="6" minlength="6" required id="form16" className="form-control" />
                                    </div>


                                    <div className="md-form md-outline mt-2">
                                        <label for="form17">Town / City</label>
                                        <input type="text" required id="form17" className="form-control" />

                                    </div>


                                    <div className="md-form md-outline mt-2">
                                        <label for="form18">Phone</label>
                                        <input type="number" minlength="10" maxlength="10" required id="form18" className="form-control" />
                                    </div>


                                    <div className="md-form md-outline mt-2">
                                        <label for="form19">Email address</label>
                                        <input type="email" required id="form19" className="form-control" />
                                    </div>

                                    <div className="md-form md-outline mt-2">
                                        <label for="form76">Additional information</label>
                                        <textarea id="form76" className="md-textarea form-control" rows="4"></textarea>
                                    </div>



                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">

                            <div className="cardy mb-4" style={{ border: "0.3px solid lightgray",margin:'10% 1%',padding:'2% 5%' }}>
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
                                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light" style={{marginLeft:'0%'}}>Pay Now</button>
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

export default Checkout