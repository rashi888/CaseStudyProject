import React from 'react'
import foodEssential from "../../assets/Grocery/foodEssentials.webp"
import Atta4 from "../../assets/Grocery/Atta4.webp"
import Atta2 from "../../assets/Grocery/Atta2.webp"
import Atta3 from "../../assets/Grocery/Atta3.webp"
import personalcare from "../../assets/Grocery/personalcare.webp"
import Gillete from "../../assets/Grocery/Gillete.webp"
import Veet from "../../assets/Grocery/veet.webp"
import Himher from "../../assets/Grocery/Himher.webp"
import herbals from "../../assets/Grocery/herbals.webp"
import Shampoo from "../../assets/Grocery/shampoo.webp"
import oralcare from "../../assets/Grocery/oralcare.webp"
import cleaning from "../../assets/Grocery/cleaning.webp"
import detergent from "../../assets/Grocery/detergent.webp"
import household from "../../assets/Grocery/Household.webp"
import freshners from "../../assets/Grocery/freshers.webp"
import axios from "axios";
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom";


function GroceryCol() {
    const navigate = useNavigate();


    const refresh = () => window.location.reload(true)


    const srch = (search) => (e) => {
        axios.get('http://localhost:8080/api/products/search/' + search, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then(response => {
                console.log(response.data);

                navigate("/search", { state: { searchdata: response.data } });
                refresh();

            })
            .catch(error => {
                console.log(error);
            });

    }

    const navig = (arg) => {
        navigate("category/" + arg)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <>
            <div className="grocery-cont-images" style={{ width: '1230px', margin: '40px auto' }}>
                <img src={foodEssential} alt="" width="100%" />
                <div className="first-img-col" style={{ display: 'flex' }}>
                    <img onClick={srch("spices")} src={Atta4} alt="" height="70%" width="70%" style={{ marginRight: '15px' }} />
                    <div className="twoimg-sec" style={{ display: 'flex', flexDirection: 'column' }}>
                        <img onClick={srch("spices")} src={Atta2} alt="" height="50%" width="100%" style={{ marginBottom: '10px' }} />
                        <img onClick={srch("spices")} src={Atta3} alt="" height="50%" width="100%" />
                    </div>
                </div>
                <img src={personalcare} alt="" width="100%" />
                <div className="second-img-col" style={{ display: 'flex', margin: '0px 10px' }}>
                    <img onClick={srch("Shampoo")} src={Shampoo} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img onClick={srch("Oral Care")} src={oralcare} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img onClick={srch("Herbals And Natural")} src={herbals} alt="" height="34%" width="32%" style={{ marginRight: '15px' }} />
                </div>
                <div className="third-img-col" style={{ display: 'flex', margin: '0px 10px' }}>
                    <img onClick={srch("Personal care forhim")} src={Gillete} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={Himher} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img onClick={srch("Personal care forher")} src={Veet} alt="" height="34%" width="31.5%" style={{ marginRight: '15px' }} />

                </div>
                <img src={household} alt="" width="100%" />
                <div className="fourth-img-col" style={{ display: 'flex', margin: '0px 5px' }}>
                    <img onClick={srch("Detergents")} src={detergent} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img onClick={srch("Repellants and Freshners")} src={freshners} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img onClick={srch("Cleaning Essentials")} src={cleaning} alt="" height="34%" width="32%" style={{ marginRight: '15px' }} />

                </div>


            </div >
        </>
    )
}

export default GroceryCol