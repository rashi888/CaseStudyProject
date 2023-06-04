import React from 'react'
import Adv1 from '../AdvertiseBanners/Adv1'
import Adv2 from '../AdvertiseBanners/Adv2'
import Adv3 from '../AdvertiseBanners/Adv3'
import Items from '../../components/Items/Items'
// import CardPage from '../Cards/CardPage'
// import Products from '../Products'
// import Wrapper from '../../pages/Wrapper/Wrapper'
// import CarouselPage from '../../pages/Caurosel/CarouselPage'
// import Wrapper from '../Wrapper'
// import Cards from '../../components/CardsCaurosel/Cards'
// import { SliderData } from '../../components/CardsCaurosel/SliderData'
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
import img14 from "../../assets/NewBannersImg/img14.png"
import BannersSmall from '../../components/MainBannerCarousel/BannersSmall'


function Homepage() {
    return (
        <>
            {/* <CardPage/> */}
            {/* <Cards slides={SliderData} />; */}
            <BannerMain />
            <Items />
            <Adv1 />
            <GroceryCol/>
            <Items1 />
            <Tiles />
            <BannersSmall/>
            <Featured/>
            <Items />
            {/* <Wrapper/> */}
            <Items2/>
            <SummerSpecials/>
            <Items4/>
            <Adv2 />
            <Items3 />
            <Items />
            <img src={img14} alt="" height="100%" width="100%" style={{margin:'40px 0px'}}/>
            <img src={img13} alt="" height="100%" width="100%" style={{margin:'40px 0px'}}/>

        </>
    )
}

export default Homepage