import './App.css';
import { Routes, Route } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/HomePage/Home';
// import Products from './components/Products';
import ProductView from './pages/ViewSingleProduct/ProductsView';
import ProductsView from './pages/ProductsView/ProductsView';
// import Mobiles from './pages/Mobiles';
// import UserProfile from './pages/UserProfile';
// import Front from './pages/Front';
// import AdBanner from './components/AdBanner/AdBanner';
import AddItem from './pages/Cart/AddItem';
// import MultiCarouselEffect from './components/MultiCarouselEffect';
// import Merchant from './pages/Merchant';
// import AdminDashboard from './pages/Admin/AdminDashboard';
import AddingCategories from './pages/AddingItemPages/AddingCategories';
import AddingProducts from './pages/AddingItemPages/AddingProducts';
import Checkout from './pages/CheckoutPage/Checkout';
import ProductsAdd from './pages/AddingItemPages/ProductsAdd';
import CategoryAdd from './pages/AddingItemPages/CategoryAdd';
// import MobilesCate from './pages/MobilesCate';
// import CartView from "./components/Cart/CartView"

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navy from './components/Navy/Navy';
import Cart from './pages/MorePages/Cart';
import Error from './pages/MorePages/Error';
import Adv1 from './pages/AdvertiseBanners/Adv1';
import Adv2 from './pages/AdvertiseBanners/Adv2';
import Adv3 from './pages/AdvertiseBanners/Adv3';
// import Homepage from './components/HomePage/Homepage';
import CarouselPage from './pages/Caurosel/CarouselPage';
import UserProfile from './pages/Userprofile/UserProfile';
import CardPage from './pages/Cards/CardPage';
import Homepage from './pages/HomePage/Homepage';
import MSignup from './pages/MerchantSignUp/MSignup';
import DashM from './pages/MerchantDashboard/DashM';
import AdBanner from './pages/AdvertiseBanners/AdBanner';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Allproducts from './pages/AllUniPage/Allproducts';
// import Cards from './components/Cards';
import Electronic from './components/Items/Electronic';
import MobilesCate from './pages/MorePages/MobilesCate';
import Products from './pages/HomePage/Products';
import CartPage from './components/CartPage/CartPage';
import SearchData from './pages/SearchData/SearchData';
import Tiles from './components/Tiles/Tiles';
import BannerMain from './components/SlickCarousel/BannerMain';
// import AddItem from './pages/Cart/AddItem';
// import Products from './components/Products';
// import ImageAdd from './pages/ImageAdd';
// import Mobiles from './pages/Mobiles';
// import ShoppingCart from './components/ShoppingCart/ShoppingCart';


function App() {
  const groceryApi = "http://localhost:8080/api/category/1/products";
  const mobileApi = "http://localhost:8080/api/category/2/products";
  const fashionApi = "http://localhost:8080/api/category/3/products";
  const electronicsApi = "http://localhost:8080/api/category/4/products";
  const homeApi = "http://localhost:8080/api/category/5/products";
  const beautyApi = "http://localhost:8080/api/category/6/products";
  const allproductsApi = "http://localhost:8080/api/products";
  return (
    <>
      <Navbar />
      <Navy />
      <Routes>
        {/* Sorted  */}
        <Route path='/' Component={Homepage} />
        {/* <Route path='/imageadd' Component={ImageAdd} /> */}
        <Route path='home' Component={Homepage} />
        <Route path="login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="cart" Component={Cart} />
        <Route path="error" Component={Error} />
        <Route path="/mobcat" Component={MobilesCate} />
        <Route path="products" Component={Products} />
        <Route path='productView' Component={ProductView} />
        <Route path="userProfile" Component={UserProfile} />
        {/* <Route path="front" Component={Front} /> */}
        <Route path="adbanner" Component={AdBanner} />
        <Route path="addtocart" Component={AddItem} />
        {/* <Route path="multicau" Component={MultiCarouselEffect} /> */}
        {/* <Route path="merchant" Component={Merchant} /> */}
        {/* <Route path="merchantD" Component={Merchant} /> */}
        <Route path="adv1" Component={Adv1} />
        <Route path="adv2" Component={Adv2} />
        <Route path="adv3" Component={Adv3} />
        <Route path="homepage" Component={Homepage} />
        <Route path="Carousel" Component={CarouselPage} />
        <Route path="admindashboard" Component={AdminDashboard} />
        <Route path="checkout" Component={Checkout} />
        <Route path='cardpage' Component={CardPage} />
        <Route path='/allproducts' Component={() => <Allproducts api={allproductsApi} />} />
        {/* <Route path='/allproducts' Component={() => <ProductsView api={allproductsApi} />} /> */}

        <Route path='/Grocery' Component={() => <Allproducts api={groceryApi} />} />
        <Route path='/Mobile' Component={() => <Allproducts api={mobileApi} />} />
        <Route path='/Fashion' Component={() => <Allproducts api={fashionApi} />} />
        <Route path='/Electronics' Component={() => <Allproducts api={electronicsApi} />} />
        <Route path='/Home' Component={() => <Allproducts api={homeApi} />} />
        <Route path='/Beauty' Component={() => <Allproducts api={beautyApi} />} />
        <Route path='search' Component={() => <SearchData />} />



        {/* Merchant Dashboard Field  */}
        <Route path='/msignup' Component={MSignup} />
        <Route path='/mdash' Component={DashM} />
        <Route path="/categorylist" Component={AddingCategories} />
        <Route path="/productlist" Component={AddingProducts} />
        <Route path="/productadd" Component={ProductsAdd} />
        <Route path="/categoryadd" Component={CategoryAdd} />

        <Route path="/sc" Component={AddItem} />
        <Route path="/elctro" Component={Electronic} />


        <Route path="/mc" Component={MobilesCate} />
        <Route path="/prody" Component={Products} />
        <Route path='/userCart' Component={CartPage}/>
        <Route path='/cartview' Component={AddItem}/>

        <Route path='/tiles' Component={Tiles}/>
        <Route path='/bm' Component={BannerMain}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
