import React ,{useState,useEffect}from 'react'


function Wrapper() {

    const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8080/api/products?pageNumber=0&pageSize=5&sortBy=productId&sortDir=desc")
      .then((response) => response.json())
      .then((data) => setProduct(data["content"]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);

  return (
    <>
    {product.map((item) => {
        return (<>
    <div className="container-fluid">
        <div className="row">
            <div className="col" style={{backgroundColor:'pink'}}>

                <div className="box">
                    <a href="#">
                    <img
                      src="https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg"
                      className="card-img-top"
                      alt="product.title"
                    />
                    </a>

                    <div className="label-top shadow-sm">
                    <a className="text-white" href="#">
                      asus
                    </a>
                  </div>

                  <div className="card-body">
                    <div className="clearfix mb-3">
                      <span className="float-start badge rounded-pill bg-success">
                        1.245$
                        {/* {item.productPrice} */}
                      </span>
                      <span className="float-end">
                        <a
                          href="#"
                          className="small text-muted text-uppercase aff-link"
                        >
                          reviews
                        </a>
                      </span>
                    </div>
                    <h5 className="card-title">
                      <a target="_blank" href="#">
                        Lorem ipsum dolor sit amet.
                        {/* {item.productDescription} */}
                      </a>
                    </h5>
                    <div className="d-grid gap-2 my-4">
                      <a href="#" className="btn btn-warning bold-btn">
                        add to cart
                      </a>
                    </div>
                    <div className="clearfix mb-1"></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
        );
      })}
    </>
  )
}

export default Wrapper