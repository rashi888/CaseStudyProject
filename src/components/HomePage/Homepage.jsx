import React from 'react'
import Adv1 from '../../pages/AdvertiseBanners/Adv1'
import Adv2 from '../../pages/AdvertiseBanners/Adv2'
import Adv3 from '../../pages/AdvertiseBanners/Adv3'
import Items from '../Items/Items'
import Products from '../Products'
import Wrapper from '../../pages/Wrapper/Wrapper'
// import Wrapper from '../Wrapper'

function Homepage() {
    return (
        <>
        <Items/>
        <Adv1/>
        {/* <Wrapper/> */}
        <Items/>
        <Adv2/>
        <Items/>
        <Adv3/>
        </>
    )
}

export default Homepage