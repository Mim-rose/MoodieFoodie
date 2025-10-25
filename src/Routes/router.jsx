import React from 'react'
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../pages/Home';
import Popular from '../pages/Popular';
import NavMenu from '../pages/NavMenu';
import CategoryPage from '../pages/CategoryPage';
import ProductDetails from '../pages/ProductDetails';
import AllProductsPage from '../pages/AllProductsPage';
import Order from '../pages/Order';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Secret from '../pages/Shared/Secret';
import PrivateRoute from './PrivateRoute';
import SearchResults from '../pages/Shared/SearchResults';
import DashboardLayout from '../Layout/DashboardLayout';
import ProfileView from '../userDashboard/ProfileView';
import CartView from '../userDashboard/CartView';
import OrderHistory from '../userDashboard/OrderHistory';
import CouponManager from '../userDashboard/CouponManager';
import AdminRoute from '../pages/adminDashboard/AdminRoute';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout';
import AdminUsers from '../pages/adminDashboard/AdminUsers';
import AdminOrders from '../pages/adminDashboard/AdminOrders';
import AdminCoupons from '../pages/adminDashboard/AdminCoupons';
import AdminInventory from '../pages/adminDashboard/AdminInventory';
import AdminAnalytics from '../pages/adminDashboard/AdminAnalytics';
import CheckoutPage from '../pages/CheckoutPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home>,

        },

         {
  path: "/popular",
  element: (
    <PrivateRoute>
      <Popular />
    </PrivateRoute>
  ),
},
    
        {
          path:"/NavMenu",
          element:<NavMenu></NavMenu>
        },
        {
          path:"/category/:categoryName",
          element:<CategoryPage></CategoryPage>
        },
        {
          path:"/products/:id" ,
          element:<ProductDetails></ProductDetails>

        },
        {
          path:"/products",
          element:<AllProductsPage></AllProductsPage>
        },
        {
  path: "/order",
  element: (
    <PrivateRoute>
      <Order />
    </PrivateRoute>
  ),
},
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        },
        {
          path: "/secret",
          element: <PrivateRoute> <Secret></Secret>    </PrivateRoute>
        },
        {
          path: "/search",
          element: <SearchResults></SearchResults>
        },
        {

  path:'/checkout',
  element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>

}
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>  <DashboardLayout></DashboardLayout> </PrivateRoute>,
    children: [
         {
      index: true,
      element: <ProfileView /> // or any default view you prefer
    },
 {
       path: "profile",
       element: <ProfileView></ProfileView>
      },
      {
        path: "cart",
        element:<CartView></CartView>
      },
      {
        path:"orders",
        element:<OrderHistory></OrderHistory>
      },
      {
        path:"coupons",
        element: <CouponManager></CouponManager>
      }
    ]
  },
{

path: '/admin',
element: <AdminRoute> <AdminDashboardLayout/></AdminRoute>,
children: [

{

path: 'users', element: <AdminUsers></AdminUsers>

},

{

path:'orders', element: <AdminOrders></AdminOrders>

},

{

  path: 'coupons', element: <AdminCoupons></AdminCoupons>

},

{
    path: 'inventory', element: <AdminInventory></AdminInventory>

},

{

  path: 'analytics', element: <AdminAnalytics></AdminAnalytics>,
}



]



}


]);

export default router;