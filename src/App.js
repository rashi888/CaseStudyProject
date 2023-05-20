import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navy from './components/Navy';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart';
import Home from './components/Home';
import Products from './components/Products';
import ProductsView from './pages/ProductsView';
import Mobiles from './pages/Mobiles';
import UserProfile from './pages/UserProfile';
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

function App() {

  return (
    <>
      <Navbar />
      <Navy/>
      
      <Routes>
        <Route path='home' Component={Home} />
        <Route path="login" Component={Login} />
        <Route path="signup" Component={Signup} />
        <Route path="emptycart" Component={Cart} />

        <Route path="products" Component={Products} />
        <Route path='productsView' Component={ProductsView} />
        <Route path='mobiles' Component={Mobiles} />
        <Route path="userProfile" Component={UserProfile} />
        <Route path="front" Component={Front} />
        <Route path="adbanner" Component={AdBanner} />
        <Route path="addtocart" Component={AddItem} />
        <Route path="multicau" Component={MultiCarouselEffect} />
        <Route path="merchant" Component={Merchant} />
        <Route path="merchantD" Component={Merchant} />


        <Route path="admindashboard" Component={AdminDashboard} />
        <Route path="categorylist" Component={AddingCategories} />
        <Route path="productlist" Component={AddingProducts} />
        <Route path="productadd" Component={ProductsAdd} />
        <Route path="categoryadd" Component={CategoryAdd} />
        <Route path="checkout" Component={Checkout} />
        
      </Routes>
      <Footer />

    </>
  );
}

export default App;
