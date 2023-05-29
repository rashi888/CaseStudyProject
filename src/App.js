import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Products from './components/Products';
import ProductView from './pages/ViewSingleProduct/ProductsView';
import ProductsView from './pages/ProductsView/ProductsView';
// import Mobiles from './pages/Mobiles';
// import Front from './pages/Front';
// import AdBanner from './components/AdBanner/AdBanner';

// import MultiCarouselEffect from './components/MultiCarouselEffect';
// import Merchant from './pages/Merchant';
// import AdminDashboard from './pages/Admin/AdminDashboard';


// import MobilesCate from './pages/MobilesCate';
// import CartView from "./components/Cart/CartView"

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navy from './components/Navy/Navy';
import Cart from './pages/MorePages/Cart';
import Error from './pages/MorePages/Error';

// import Homepage from './components/HomePage/Homepage';
// import UserProfile from './pages/Userprofile/UserProfile';

import MSignup from './pages/MerchantSignUp/MSignup';
import DashM from './pages/MerchantDashboard/DashM';
import AdBanner from './pages/AdvertiseBanners/AdBanner';


// import Cards from './components/Cards';
import Electronic from './components/Items/Electronic';
import MobilesCate from './pages/MorePages/MobilesCate';
import Products from './pages/HomePage/Products';
import CartPage from './components/CartPage/CartPage';
import SearchData from './pages/SearchData/SearchData';
import Tiles from './components/Tiles/Tiles';
import BannerMain from './components/SlickCarousel/BannerMain';
import ProductUpdate from './pages/Update/ProductUpdate';
import BackToTop from './components/BackToTop/BackToTop';
import OrderHistory from './components/OrderHistory/OrderHistory';
import CategoryUpdate from './pages/Update/CategoryUpdate';
import User from './pages/Userprofile/User';
// import AddItem from './pages/Cart/AddItem';



import ProductList from './pages/AddingItemPages/ProductList';
import CategoryList from './pages/AddingItemPages/CategoryList';
import AddProduct from './pages/AddingItemPages/AddProduct';
import AddCategory from './pages/AddingItemPages/AddCategory';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Adv1 from './pages/AdvertiseBanners/Adv1';
import Adv2 from './pages/AdvertiseBanners/Adv2';
import Adv3 from './pages/AdvertiseBanners/Adv3';
import Allproducts from './pages/AllProductsPage/Allproducts';
import AddItem from './pages/Cart/AddItem';
import Checkout from './pages/CheckoutPage/Checkout';
import Homepage from './pages/HomePage/Homepage';
import Home from './pages/HomePage/Home';


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

       
        {/* <Route path='home' Component={Homepage} /> */}
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/cart" Component={Cart} />
        <Route path="/error" Component={Error} />
        <Route path="/mobcat" Component={MobilesCate} />
        <Route path="/products" Component={Products} />
        <Route path='/productView' Component={ProductView} />

       

        {/* <Route path="homepage" Component={Homepage} /> */}
       
      


        <Route path='/Grocery' Component={() => <Allproducts api={groceryApi} />} />
        <Route path='/Mobile' Component={() => <Allproducts api={mobileApi} />} />
        <Route path='/Fashion' Component={() => <Allproducts api={fashionApi} />} />
        <Route path='/Electronics' Component={() => <Allproducts api={electronicsApi} />} />
        <Route path='/Home' Component={() => <Allproducts api={homeApi} />} />
        <Route path='/Beauty' Component={() => <Allproducts api={beautyApi} />} />
        <Route path='/search' Component={() => <SearchData />} />



        {/* Merchant Dashboard Field  */}
        <Route path='/msignup' Component={MSignup} />
        <Route path='/mdash' Component={DashM} />

        <Route path="/updateproduct/:id" Component={ProductUpdate} />
        <Route path='/orderhistory' Component={OrderHistory} />
        <Route path="/updatecategory/:id" Component={CategoryUpdate} />

        <Route path="/sec" Component={AddItem} />
        <Route path="/elctro" Component={Electronic} />


        <Route path="/mcategory" Component={MobilesCate} />
        <Route path="/prody" Component={Products} />
        <Route path='/userCart' Component={CartPage} />
        <Route path='/cartview' Component={AddItem} />

        <Route path='/tiles' Component={Tiles} />
        <Route path='/bannermain' Component={BannerMain} />
        <Route path='/user' Component={User} />




        <Route path="/productlist" Component={ProductList} />
        <Route path="/categorylist" Component={CategoryList} />
        <Route path="/productadd" Component={AddProduct} />
        <Route path="/categoryadd" Component={AddCategory} />
        <Route path="/admindashboard" Component={AdminDashboard} />
        <Route path="/adbanner" Component={AdBanner} />
        <Route path="/adv1" Component={Adv1} />
        <Route path="/adv2" Component={Adv2} />
        <Route path="/adv3" Component={Adv3} />
        <Route path='/allproducts' Component={() => <Allproducts api={allproductsApi} />} />
        {/* <Route path='/allproducts' Component={() => <ProductsView api={allproductsApi} />} /> */}
        <Route path="/addtocart" Component={AddItem} />
        <Route path="/checkout" Component={Checkout} />
        <Route path='/' Component={Homepage} />
        <Route path='/homee' Component={Home} />
      </Routes>
      <Footer />


      <BackToTop />
    </>
  );
}

export default App;
