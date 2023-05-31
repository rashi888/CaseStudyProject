import React from 'react'
import "./OrderHistory.css"
import axios from 'axios';

function OrderHistory() {

    const [order, setOrder] = React.useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/order/userOrders/" + localStorage.getItem("userId"))
            .then((response) => response.json())
            .then((data) => setOrder(data));
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(order);

    

    return (
        <>
            <div class="container-fluid">
                <h1 >Order History</h1>
                <a style={{ margin: '20px 0px', color: 'white', alignItems: 'right', marginLeft: '80%' }} class="btn btn-primary">Place New Order</a>
                <table class="table" style={{backgroundColor:'white'}}>
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Order Id.</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Order Method</th>
                            <th scope="col">Price</th>
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