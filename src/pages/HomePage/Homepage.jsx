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
import Cards from '../../components/CardsCaurosel/Cards'
import { SliderData } from '../../components/CardsCaurosel/SliderData'

function Homepage() {
    return (
        <>
            {/* <CardPage/> */}
            <Cards slides={SliderData} />;
            <Items />
            <Adv1 />
            {/* <Wrapper/> */}
            <Items />
            <Adv2 />
            <Items />
            <Adv3 />
        </>
    )
}

export default Homepage