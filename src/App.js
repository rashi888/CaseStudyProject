import './App.css';
import { Routes, Route } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Products from './components/Products';
import ProductsView from './pages/ProductsView';
// import Mobiles from './pages/Mobiles';
// import UserProfile from './pages/UserProfile';
import Front from './pages/Front';
import AdBanner from './pages/AdBanner';
import AddItem from './pages/AddItem';
import MultiCarouselEffect from './components/MultiCarouselEffect';
import Merchant from './pages/Merchant';
import AdminDashboard from './components/AdminDashboard';
import AddingCategories from './pages/AddingCategories';
import AddingProducts from './pages/AddingProducts';
import Checkout from './pages/Checkout';
import ProductsAdd from './pages/ProductsAdd';
import CategoryAdd from './pages/CategoryAdd';
import MobilesCate from './pages/MobilesCate';

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
import Mobiles from './pages/Mobiles/Mobiles';
// import Homepage from './components/HomePage/Homepage';
import CarouselPage from './pages/Caurosel/CarouselPage';
import UserProfile from './pages/Userprofile/UserProfile';
import CardPage from './pages/Cards/CardPage';
import Homepage from './pages/HomePage/Homepage';

function App() {

  return (
    <>
      <Navbar />
      <Navy />
      <Routes>
        {/* Sorted  */}
        <Route path='home' Component={Home} />
        <Route path="login" Component={Login} />
        <Route path="signup" Component={Signup} />
        <Route path="cart" Component={Cart} />
        <Route path="error" Component={Error} />



        {/* unsorted  */}
        <Route path="mobcat" Component={MobilesCate} />
        <Route path="products" Component={Products} />
        <Route path='productsView' Component={ProductsView} />
       
        <Route path="userProfile" Component={UserProfile} />
        <Route path="front" Component={Front} />
        <Route path="adbanner" Component={AdBanner} />
        <Route path="addtocart" Component={AddItem} />
        <Route path="multicau" Component={MultiCarouselEffect} />
        <Route path="merchant" Component={Merchant} />
        <Route path="merchantD" Component={Merchant} />
        <Route path="adv1" Component={Adv1} />
        <Route path="adv2" Component={Adv2} />
        <Route path="adv3" Component={Adv3} />
        <Route path="homepage" Component={Homepage} />
        <Route path="Carousel" Component={CarouselPage} />


        <Route path="admindashboard" Component={AdminDashboard} />
        <Route path="categorylist" Component={AddingCategories} />
        <Route path="productlist" Component={AddingProducts} />
        <Route path="productadd" Component={ProductsAdd} />
        <Route path="categoryadd" Component={CategoryAdd} />
        <Route path="checkout" Component={Checkout} />

        <Route path='cardpage' Component={CardPage} />
        <Route path='mobiles' Component={Mobiles} />
        
      </Routes>
      <Footer />

    </>
  );
}

export default App;
