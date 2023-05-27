import axios from "axios";
import React, { useState } from 'react'

function Products() {
    const [items, setItems] = useState([])

    const prod = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f1d86d699b544660834d843ac9946d3f")
            .then((response) => {
                // console.log(response)
                setItems(response.data.articles)
            })
    }
    return (
        <>
            {/* <div className="container my-3" style={{color:'yellowgreen'}} >
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={prod}> View Products</button>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    {
                        items.map((value) => {
                            return (
                                <div className="col-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={value.urlToImage} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href="#" className="btn btn-primary">More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>


        </>
    )
}

export default Products