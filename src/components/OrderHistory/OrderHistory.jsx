import React from 'react'

function OrderHistory() {
    return (
        <>
            <div class="container-fluid">
                <h1 style={{marginTop:'30px',marginBottom:'-10px'}}>Order History</h1>
                <a style={{ margin: '20px 0px', color: 'white', alignItems: 'right', marginLeft: '80%' }} class="btn btn-primary">Place New Order</a>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Order No.</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Placed By</th>
                            <th scope="col">Total</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row" >19865430</th>
                            <td >29/05/2023</td>
                            <td>Tata Pvt.</td>
                            <td>User Name</td>
                            <td >45,000</td>
                            <td > <span style={{ backgroundColor: 'green', padding: '8px', borderRadius: '5px', color: 'white' }}>Completed</span> </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr >
                            <th scope="row" >19865430</th>
                            <td >29/05/2023</td>
                            <td>Tata Pvt.</td>
                            <td>User Name</td>
                            <td >45,000</td>
                            <td > <span style={{ backgroundColor: 'green', padding: '8px', borderRadius: '5px', color: 'white' }}>Completed</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default OrderHistory