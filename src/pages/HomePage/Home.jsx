import React from 'react'
import Cards from '../../components/CardsCaurosel/Cards'
// import Wrapper from './Wrapper'
// import Products from '../../components/Products'
import { SliderData } from '../../components/CardsCaurosel/SliderData'
import Electronic from '../../components/Items/Electronic'
// import Navy from './Navy'
import Items from '../../components/Items/Items'
import Adv1 from '../AdvertiseBanners/Adv1'
import Adv2 from '../AdvertiseBanners/Adv2'
import Adv3 from '../AdvertiseBanners/Adv3'
import Wrapper from '../Wrapper/Wrapper'
import Products from './Products'

function Home() {
    return (
        <>
            {/* <Products /> */}
            <Products />
            {/* <Navy/>  */}
            <Cards slides={SliderData} />;
            <Items />
            {/* <Wrapper /> */}
            <Wrapper />
            <Electronic />
            <Items />
            <Adv1 />
            <Items />
            <Adv2 />
            <Items />
            <Adv3 />
        </>
    )
}

export default Home