import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./Navbar.css";
import profile from "../../assets/All_Icons/user.png"
import carts from "../../assets/All_Icons/carty.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logoo from "../../assets/NavbarImg/ShopEaseLogo1.png"

const Navbar = () => {

    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    const refresh = () => window.location.reload(true)


    const srch = () => {
        axios.get('http://localhost:8080/api/products/search/' + search,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then(response => {
                // console.log(response.data);
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
        // console.log(window.localStorage.getItem("role"))
        if (window.localStorage.getItem("role") === "MERCHANT") {
            menu = (
                <div className="profile">
                    <Link to="mdash" className="custom-link">DashBoard</Link>
                    <h6 className="center" onClick={logout}>LogOut</h6>
                </div>
            )
        } else if (window.localStorage.getItem("role") === "USER") {
            menu = (
                <div className="profile">
                    <Link to="user" style={{marginTop:'-40px'}}>My Profile</Link>
                    <Link to="orders" style={{marginTop:'-35px'}}>Orders</Link>
                    <h6 className="center" onClick={logout} style={{margin:'-15px'}}>LogOut</h6>
                </div>
            )
        }
        else if (window.localStorage.getItem("role") === "ADMIN") {
            menu = (
                <div className="profile">
                    <Link to="admindashboard" >DashBoard</Link>
                    <h6 className="center" onClick={logout}>LogOut</h6>
                </div>
            )
        }
        else {
            menu = (
                <div className="profile">
                    <Link to="login" >Login</Link>
                </div>
            )
        }
    }

    function verifylogin() {
        if (window.localStorage.getItem("token") === null) {
            navigate("/login");
        }

    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            srch();
        }
    };


    //Back To Top
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        console.clear();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div style={{zIndex:'1000'}}>

            <div className="navbars" >
                <div className="logos" onClick={scrollToTop}>

                    <Link to="/" onClick={scrollToTop}>
                        <img onClick={scrollToTop} src={logoo} alt="" className="logo" />
                    </Link>
                </div>
                <div className="searchBars">
                    <input
                        onKeyDown={handleKeyDown}
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
                        <div onClick={verifylogin}>
                            <img className="profileimg" src={profile} alt="" />
                             {menu}
                        </div>
                    </div>

                    <div className="cartdiv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px 0px' }}>
                        <Link to="/usercart" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 30px ', padding: '0' }}>
                            <p style={{ color: 'white', padding: '15px 0px 0px 0px' }}>Cart</p>
                            <img className="cartimg" src={carts} alt="" style={{ marginLeft: '-10px' }} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
