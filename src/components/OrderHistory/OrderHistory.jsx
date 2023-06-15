import React from 'react'
import "./OrderHistory.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function OrderHistory() {

    const [order, setOrder] = React.useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/order/userOrders/" + localStorage.getItem("userId"), {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((response) => response.json())
            .then((data) => setOrder(data['content']));
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(order);

    return (
        <>
            <div class="container-fluid">
                <h1 >Order History</h1>
                <Link to="/" style={{ margin: '20px 0px', color: 'white', alignItems: 'right', marginLeft: '80%' }} class="btn btn-primary">Place New Order</Link>
                <table class="table" style={{ backgroundColor: 'white' }}>
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Order Id.</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Shipping Address</th>
                            <th scope="col">Order Method</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>

                    {order.map((item, index) => {

                        return (
                            <>
                                <tbody>
                                    <tr >
                                        <th scope="row" >{item.orderId}</th>
                                        <td >{item.orderDate}</td>
                                        <td>{item.shippingAddress}</td>
                                        <td>{item.paymentMethod}</td>
                                        <td >{item.totalPrice}</td>
                                        <td > <span style={{ backgroundColor: 'green', padding: '8px', borderRadius: '5px', color: 'white' }}>{item.orderStatus}</span> </td>
                                    </tr>
                                </tbody>
                            </>
                        );
                    })}

                </table>
            </div>


        </>
    )
}

export default OrderHistory