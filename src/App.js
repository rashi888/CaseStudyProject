import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';

//Components
import BackToTop from './components/BackToTop/BackToTop';
import CartPage from './components/CartPage/CartPage';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import BannerMain from './components/MainBannerCarousel/BannerMain';
import Navbar from './components/Navbar/Navbar';
import Navy from './components/Navy/Navy';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Signup from './components/Signup/Signup';
import Tiles from './components/Tiles/Tiles';

// Pages 
import ProductList from './pages/AddingItemPages/ProductList';
import CategoryList from './pages/AddingItemPages/CategoryList';
import UserList from './pages/Admin/UserList';
import MerchantList from './pages/Admin/MerchantList';
import AddProduct from './pages/AddingItemPages/AddProduct';
import AddCategory from './pages/AddingItemPages/AddCategory';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Allproducts from './pages/AllProductsPage/Allproducts';
import AddItem from './pages/Cart/AddItem';
import Checkout from './pages/CheckoutPage/Checkout';
import Homepage from './pages/HomePage/Homepage';
import DashM from './pages/MerchantDashboard/DashM';
import MSignup from './pages/MerchantSignUp/MSignup';
import Cart from './pages/MorePages/Cart';
import Error from './pages/MorePages/Error';
import MobilesCate from './pages/MorePages/MobilesCate';
import ProductsView from './pages/ProductsView/ProductsView';
import SearchData from './pages/SearchData/SearchData';
import ProductUpdate from './pages/Update/ProductUpdate';
import CategoryUpdate from './pages/Update/CategoryUpdate';
import User from './pages/Userprofile/User';
import SingleProductView from './pages/ViewSingleProduct/SingleProductView';
// import AddressPage from './pages/CheckoutPage/AddressPage';
import PopupPage from './pages/CheckoutPage/PopupPage';
import OrderPage from './pages/CheckoutPage/OrderPage';
import Orders from './pages/CheckoutPage/Orders';
import Address from './pages/CheckoutPage/Address';
import Aboutus from './pages/AdditionalPages/Aboutus';
import Faq from './pages/AdditionalPages/Faq';
import ReturnPolicy from './pages/AdditionalPages/ReturnPolicy';
import TermsAndCondition from './pages/AdditionalPages/TermsAndCondition';
import MyOrders from './pages/MerchantDashboard/MyOrders';
import CategoryListAdmin from './pages/Admin/CategoryListAdmin';
import ProductListAdmin from './pages/Admin/ProductListAdmin';
import MyProductList from './pages/AddingItemPages/MyProductList';
import AddressUser from './pages/Userprofile/AddressUser';
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom';
import NoOrders from './pages/MorePages/NoOrders';
import NoResultFound from './pages/MorePages/NoResultFound';



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
        <Route path='/userCart' Component={CartPage} />
        <Route path="/login" Component={Login} />
        <Route path='/bannermain' Component={BannerMain} />
        <Route path='/orderhistory' Component={OrderHistory} />
        <Route path="/signup" Component={Signup} />
        <Route path='/tiles' Component={Tiles} />
        <Route path='/inbuiltcartview' Component={AddItem} />

        <Route path='/category/:id' Component={() => <Allproducts api={"http://localhost:8080/api/category/" + useParams().id + "/products"} />} />
        <Route path='/Grocery' Component={() => <Allproducts api={groceryApi} title="Grocery" />} />
        <Route path='/Mobile' Component={() => <Allproducts api={mobileApi} title="Mobile" />} />
        <Route path='/Fashion' Component={() => <Allproducts api={fashionApi} title="Fashion" />} />
        <Route path='/Electronics' Component={() => <Allproducts api={electronicsApi} title="Electronics" />} />
        <Route path='/Home' Component={() => <Allproducts api={homeApi} />} title="Home" />
        <Route path='/Beauty' Component={() => <Allproducts api={beautyApi} title="Beauty" />} />

        <Route path='/search' Component={() => <SearchData />} />

        <Route path="/productlist" Component={ProductList} />
        <Route path="/myproductlist" Component={MyProductList} />
        <Route path="/categorylist" Component={CategoryList} />
        <Route path="/productadd" Component={AddProduct} />
        <Route path="/categoryadd" Component={AddCategory} />
        <Route path="/admindashboard" Component={AdminDashboard} />
        <Route path="/userlist" Component={UserList} />
        <Route path="/merchantlist" Component={MerchantList} />
        <Route path="/categoryadminlist" Component={CategoryListAdmin} />
        <Route path="/productadminlist" Component={ProductListAdmin} />
        <Route path='/allproducts' Component={() => <Allproducts api={allproductsApi} />} />
        {/* <Route path='/allproducts' Component={() => <ProductsView api={allproductsApi} />} /> */}
        <Route path="/addtocart" Component={AddItem} />
        <Route path="/checkout" Component={Checkout} />
        {/* <Route path="/addresspage" Component={AddressPage} /> */}
        <Route path="/address" Component={Address} />
        <Route path="/orderpage" Component={OrderPage} />
        <Route path="/orders" Component={Orders} />
        <Route path="/popup" Component={PopupPage} />

        <Route path="/aboutus" Component={Aboutus} />
        <Route path="/faq" Component={Faq} />
        <Route path="/termsandconditions" Component={TermsAndCondition} />
        <Route path="/returnpolicy" Component={ReturnPolicy} />


        <Route path='/' Component={Homepage} />
        <Route path='/mdash' Component={DashM} />
        <Route path='/morders' Component={MyOrders} />
        <Route path='/msignup' Component={MSignup} />
        <Route path="/cart" Component={Cart} />
        <Route path="/error" Component={Error} />
        <Route path="/noResultFound" Component={NoResultFound} />
        <Route path="/mobcat" Component={MobilesCate} />
        <Route path='/productView' Component={ProductsView} />
        <Route path="/updateproduct/:id" Component={ProductUpdate} />
        <Route path="/updatecategory/:id" Component={CategoryUpdate} />
        <Route path='/user' Component={User} />
        <Route path='/addressuser' Component={AddressUser} />
        <Route path='/singleproductview/:id' Component={SingleProductView} />

        <Route path='/norders' Component={NoOrders} />
      </Routes>
      <Footer />

      <ScrollToBottom />
      <BackToTop />
    </>
  );
}

export default App;
