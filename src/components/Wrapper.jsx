import React from "react"
import '../styles/Wrapper.css'

const Wrapper = () => {
   
    return (
        <>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
  />
  <div
    className="container-fluid bg-trasparent my-4 p-3"
    style={{ position: "relative" }}
  >
    <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
      <div className="col hp">
        <div className="card h-100 shadow-sm">
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
                ASUS TUF FX505DT Gaming Laptop- 15.6", 120Hz Full HD, AMD Ryzen
                5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4, 256GB
                PCIe SSD, RGB Keyboard, Windows 10 64-bit - FX505DT-AH51
              </a>
            </h5>
            <div className="d-grid gap-2 my-4">
              <a href="#" className="btn btn-warning bold-btn">
                add to cart
              </a>
            </div>
            <div className="clearfix mb-1">
             
            </div>
          </div>
        </div>
      </div>
      <div className="col hp">
        <div className="card h-100 shadow-sm">
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg"
              className="card-img-top"
              alt="product.title"
            />
          </a>
          <div className="label-top shadow-sm">
            <a className="text-white" href="#">
              razer
            </a>
          </div>
          <div className="card-body">
            <div className="clearfix mb-3">
              <span className="float-start badge rounded-pill bg-success">
                2.345$
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
                Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H
                6-Core, NVIDIA GeForce GTX 1660 Ti, 15.6" FHD 1080p 120Hz, 16GB
                RAM, 256GB SSD, CNC Aluminum, Chroma RGB Lighting, Black
              </a>
            </h5>
            <div className="d-grid gap-2 my-4">
              <a href="#" className="btn btn-warning bold-btn">
                add to cart
              </a>
            </div>
            <div className="clearfix mb-1">
              
            </div>
          </div>
        </div>
      </div>
      <div className="col hp">
        <div className="card h-100 shadow-sm">
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_SL1500_.jpg"
              className="card-img-top"
              alt="product.title"
            />
          </a>
          <div className="label-top shadow-sm">
            <a className="text-white" href="#">
              lenovo
            </a>
          </div>
          <div className="card-body">
            <div className="clearfix mb-3">
              <span className="float-start badge rounded-pill bg-success">
                1.020$
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
                Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen,
                AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX
                1660Ti, Windows 10, 82B1000AUS, Phantom Black
              </a>
            </h5>
            <div className="d-grid gap-2 my-4">
              <a href="#" className="btn btn-warning bold-btn">
                add to cart
              </a>
            </div>
            <div className="clearfix mb-1">
              
            </div>
          </div>
        </div>
      </div>
      <div className="col hp">
        <div className="card h-100 shadow-sm">
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/I/61Ze2wc9nyS._AC_SL1500_.jpg"
              className="card-img-top"
              alt="product.title"
            />
          </a>
          {/* <div class="label-top shadow-sm">Asus Rog</div>  */}
          <div className="label-top shadow-sm">
            <a className="text-white" href="#">
              msi
            </a>
          </div>
          <div className="card-body">
            <div className="clearfix mb-3">
              <span className="float-start badge rounded-pill bg-success">
                2.245$
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
                MSI GL66 Gaming Laptop: 15.6" 144Hz FHD 1080p Display, Intel
                Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD, Win10,
                Black (11UGK-001)
              </a>
            </h5>
            <div className="d-grid gap-2 my-4">
              <a href="#" className="btn btn-warning bold-btn">
                add to cart
              </a>
            </div>
            <div className="clearfix mb-1">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>

    )
}

export default Wrapper
