import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardy from "../../components/CardMaterialUi/Cardy"
import groce from "../../assets/CardyImgs/Grocery1.png"
import cosmo from "../../assets/CardyImgs/Cosmetics.png"
import electro from "../../assets/CardyImgs/Electronics.png"
import mob from "../../assets/CardyImgs/Mob1.png"
import hom from "../../assets/CardyImgs/home3.png"
import fashion from "../../assets/CardyImgs/fashion1.jpg"
import {Link} from "react-router-dom"

function Groupcard() {

    const [card1, setCard1] = useState([]);
    const [card2, setCard2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const groceryResponse = await axios.get("http://localhost:8080/api/category/1/products");
                const mobileResponse = await axios.get("http://localhost:8080/api/category/2/products");
                const fashionResponse = await axios.get("http://localhost:8080/api/category/3/products");
                const electronicsResponse = await axios.get("http://localhost:8080/api/category/4/products");
                const homeResponse = await axios.get("http://localhost:8080/api/category/5/products");
                const beautyResponse = await axios.get("http://localhost:8080/api/category/6/products");

                const groceryData = groceryResponse.data;
                const mobileData = mobileResponse.data;
                const fashionData = fashionResponse.data;
                const electronicsData = electronicsResponse.data;
                const homeData = homeResponse.data;
                const beautyData = beautyResponse.data;

                const card1 = [
                    {
                        title: 'Grocery',
                        image: groce,
                        description: 'Discover the convenience of online grocery shopping in our Grocery category. We have all the essentials you need, from pantry staples to fresh produce. Our selection includes a variety of options, including organic and international products.',
                        path: '/grocery',
                        data: groceryData,
                    },
                    {
                        title: 'Mobile',
                        image: mob,
                        description: 'Stay connected on the go with our Mobile category. Choose from a wide range of smartphones to find the perfect device for your needs. Whether you love photography, gaming, or productivity, we have a mobile companion that suits your lifestyle.',
                        path: '/mobile',
                        data: mobileData,
                    },
                    {
                        title: 'Fashion',
                        image: fashion,
                        description: 'Step up your style game with our Fashion category. Whether you are shopping for men, women, or kids, we have the latest trends and classic pieces to suit every taste. Explore a wide range of clothing, accessories, and shoes to express your personal style.',
                        path: '/fashion',
                        data: fashionData,
                    },

                ];
                const card2 = [
                    {
                        title: 'Electronics',
                        image: electro,
                        description: 'Explore our Electronics category and discover a world of technology. From smartphones to laptops, TVs, and audio systems, we have a variety of devices to keep you connected and entertained. Find the latest features and high-quality electronics from top brands.',
                        path: '/electronics',
                        data: electronicsData,
                    },
                    {
                        title: 'Home',
                        image: hom,
                        description: 'Welcome to our Home category, where you will find everything you need to make your house feel cozy and stylish. From furniture to decorations, we have a wide range of items that will help you create a comfortable and beautiful living space.',
                        path: '/home',
                        data: homeData,
                    },
                    {
                        title: 'Beauty',
                        image: cosmo,
                        description: 'Treat yourself to our Beauty category, where you will find a selection of skincare, makeup, haircare, and fragrances. We offer products for all skin types and preferences, helping you look and feel your best. Discover trusted brands and indulge in self-care.',
                        path: '/beauty',
                        data: beautyData,
                    },
                ];


                setCard1(card1);
                setCard2(card2);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);





    return (
        <>
            <div className="groupcard">
                <h2 style={{ color: 'black', margin: '20px', marginBottom: '30px' }}>Categories We Offer</h2>
                <div className="first-one-group" style={{ display: 'flex', marginBottom: '30px' }}>
                    {card1.map((card, index) => (
                        <Link key={index} to={card.path} style={{ textDecoration: 'none' }}>
                            <Cardy title={card.title} description={card.description} image={card.image} />
                        </Link>
                    ))}
                </div>
                <div className="second-one-group" style={{ display: 'flex', marginBottom: '20px' }}>
                    {card2.map((card, index) => (
                        <Link key={index} to={card.path} style={{ textDecoration: 'none' }}>
                            <Cardy title={card.title} description={card.description} image={card.image} />
                        </Link>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Groupcard
