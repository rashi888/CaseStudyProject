import React from 'react'
import foodEssential from "../../assets/Grocery/foodEssentials.webp"
import Atta1 from "../../assets/Grocery/Atta1.webp"
import Atta2 from "../../assets/Grocery/Atta2.webp"
import Atta3 from "../../assets/Grocery/Atta3.webp"
import personalcare from "../../assets/Grocery/personalcare.webp"
import Gillete from "../../assets/Grocery/Gillete.webp"
import Veet from "../../assets/Grocery/veet.webp"
import Himher from "../../assets/Grocery/Himher.webp"
import Shampoo from "../../assets/Grocery/shampoo.webp"
import oralcare from "../../assets/Grocery/oralcare.webp"
import cleaning from "../../assets/Grocery/cleaning.webp"
import household from "../../assets/Grocery/Household.webp"
import freshners from "../../assets/Grocery/freshers.webp"

function GroceryCol() {
    return (
        <>
            <div className="grocery-cont-images" style={{ width: '1230px', margin: '40px auto' }}>
                <img src={foodEssential} alt="" width="100%" />
                <div className="first-img-col" style={{ display: 'flex' }}>
                    <img src={Atta2} alt="" height="70%" width="70%" style={{ marginRight: '15px' }} />
                    <div className="twoimg-sec" style={{ display: 'flex', flexDirection: 'column' }}>
                        <img src={Atta3} alt="" height="50%" width="100%" style={{ marginBottom: '10px' }} />
                        <img src={Atta1} alt="" height="50%" width="100%" />
                    </div>
                </div>
                <img src={personalcare} alt="" width="100%" />
                <div className="second-img-col" style={{ display: 'flex', margin: '0px 10px' }}>
                    <img src={Shampoo} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={oralcare} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={cleaning} alt="" height="34%" width="32%" style={{ marginRight: '15px' }} />
                </div>
                <div className="third-img-col"  style={{ display: 'flex', margin: '0px 10px' }}>
                    <img src={Gillete} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={Himher} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={Veet} alt="" height="34%" width="31.5%" style={{ marginRight: '15px' }} />

                </div>
                <img src={household} alt="" width="100%" />
                <div className="fourth-img-col"  style={{ display: 'flex', margin: '0px 5px' }}>
                    <img src={freshners} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={cleaning} alt="" height="33%" width="33%" style={{ marginRight: '15px' }} />
                    <img src={Shampoo} alt="" height="34%" width="32%" style={{ marginRight: '15px' }} />

                </div>


            </div>
        </>
    )
}

export default GroceryCol