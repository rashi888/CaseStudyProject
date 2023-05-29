import React from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
// import { FaUser } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";
// import profile from "../../assets/NavbarImg/profile.png";
// import carts from "../../assets/NavbarImg/cart1.png";
// import logoo from "../../assets/NavbarImg/logoo.png";

import profile from "../../assets/All_Icons/user.png"
import carts from "../../assets/All_Icons/carty.png"
// import logoo from "../../assets/NavbarImg/ShopEase1.png"
import logoo from "../../assets/NavbarImg/log.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const refresh = () => window.location.reload(true)
   

    const srch = () => {
        axios.get('http://localhost:8080/api/products/search/' + search)
        .then(response => {
            console.log(response.data);
            navigate("/search", { state: { searchdata: response.data } });
            refresh();

        })
        .catch(error => {
            console.log(error);
        });
    }

    const logout = () => {
        window.localStorage.clear();
        navigate("/login");
        refresh();
    }
    
    if (window.localStorage.getItem("token") === null) {
        var Name = "Login"
    }
    else {
        var Name = window.localStorage.getItem("name")
    }
    let menu;
    if (window.localStorage.getItem("token") != null) {
        menu = (
            <div className="profile">
            <h6>My Profile</h6>
            <h6 onClick={logout}>LogOut</h6>
        </div>
        )
    }

            
   



    return (
        <div>

            <div className="navbars  ">
                <div className="logos">

                    <Link to="/">
                        {/* <img src={logo} alt="" className="logo" /> */}
                        <img src={logoo} alt="" className="logo" />
                    </Link>
                </div>
                <div className="searchBars">
                    <input
                        className="inputSearchs"
                        type="search"
                        placeholder="Items to Search..."
                        aria-label="Search"
                        onChange={(e) => handleChange(e, "search")}
                value={search}
                name="search"
                id="search"
                    />
                    <div onClick={srch} className="searchIcons">
                        <BiSearch />
                    </div>
                </div>

                <div className="icons"  >
                    <div className="profilediv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <p style={{ color: 'white', padding: '15px 0px 0px 0px' }}> {Name}</p>
                        <Link to="/login">
                        <img className="profileimg" src={profile} alt="" />
                        {/* <div className="profile">
            <h6>My Profile</h6>
            <h6 onClick={logout}>LogOut</h6>
        </div> */}
        {menu}

                        
                        
                       


                            
                        </Link>
                    </div>


                    <div className="cartdiv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <p style={{ color: 'white', padding: '15px 0px 0px 0px' }}>Cart</p>
                        <Link to="/cart">
                            <img className="cartimg" src={carts} alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
