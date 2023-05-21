import React from 'react'
import Cards from './Cards'
import Wrapper from './Wrapper'
import Products from './Products'
import { SliderData } from './SliderData'
import Electronic from './Electronic'
// import Navy from './Navy'

function Home() {
    return (
        <>
        <Products/>
        {/* <Navy/> */}
        <Cards slides={SliderData} />; 
        <Wrapper/>
        <Electronic/>
               
        </>
    )
}

export default Home