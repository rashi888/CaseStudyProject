import React from 'react'
import Items from '../../components/Items/Items'
import Tiles from '../../components/Tiles/Tiles'
import BannerMain from '../../components/MainBannerCarousel/BannerMain'
import "./HomePage.css"
import Items1 from '../../components/Items/Items1'
import Items3 from '../../components/Items/Items3'
import Items2 from '../../components/Items/Items2'
import Items4 from '../../components/Items/Items4'
import img13 from "../../assets/NewBannersImg/img13.png"
import GroceryCol from '../AmazingBanners/GroceryCol'
import SummerSpecials from '../AmazingBanners/SummerSpecials'
import Featured from '../AmazingBanners/Featured'
import BannersSmall from '../../components/MainBannerCarousel/BannersSmall'
import MsignBanner from '../AmazingBanners/MsignBanner'
import shoppy from "../../assets/NewBannersImg/img10.png"
import Items5 from '../../components/Items/Items5'
import Items6 from '../../components/Items/Items6'


function Homepage() {
    return (
        <>
            <BannerMain />
            <Items />
            <Items1 />
            <Featured/>
            <Items2 />
            <Items3 />
            <SummerSpecials/>
            <Tiles />
            <BannersSmall/>
            <Items4/>
            <img src={shoppy} height="100%" width="100%"/>
            <Items5 />
            <GroceryCol/>
            <Items6/>
            <MsignBanner/>
            <img src={img13} alt="" height="100%" width="100%" style={{margin:'5px 0px'}}/>
        </>
    )
}

export default Homepage