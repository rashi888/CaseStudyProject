import React from 'react'
// import Cards from './Cards'
// import Wrapper from './Wrapper'
// // import Products from './Products'
// import { SliderData } from './SliderData'
// import Electronic from './Electronic'
// import Navy from './Navy'
import Items from '../components/Items/Items'
import Adv1 from '../pages/AdvertiseBanners/Adv1'
import Adv2 from '../pages/AdvertiseBanners/Adv2'
import Adv3 from '../pages/AdvertiseBanners/Adv3'

function Home() {
    return (
        <>
            {/* <Products /> */}
            {/* <Navy/> */}
            {/* <Cards slides={SliderData} />; */}
            {/* <Items /> */}
            {/* <Wrapper /> */}
            {/* <Electronic /> */}
            <Items />
            <Adv1 />
            <Items />
            <Adv2/>
            <Items />
            <Adv3 />
        </>
    )
}

export default Home