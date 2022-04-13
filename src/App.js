import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import './App.css';
import Topbar from './components/topbar/Topbar';
import Productpost from './Pages/Admin/Productpost';
import Restaurantpost from './Pages/Admin/Restaurantpost';
import Home from './Pages/Home/Home';
import Products from './Pages/Product/Products';
import Restaurants from './Pages/Restaurant/Restaurants';
import Register from './Pages/Register/Register'
import { useContext, useState } from "react";
import Newsidebar from './components/newsidebar/Newsidebar';
import Sidebar from './components/sidbar/Sidebar';
import { AuthContext } from "./components/AuthContext/AuthContext";
import Login from './Pages/Login/Login';

import Singleitem from './Pages/Singleitem/Singleitem'
import SingleRestaurant from './Pages/SingleRestaurant/SingleRestaurant';
import Shopper from './Pages/Shopper/Shopper';
import Shoppost from './Pages/Admin/Shoppost'
import Restaurantacc from './Pages/Restaurantacc/Restaurantacc';
import Usersidebar from './components/Usersidebar/Usersidebar';
import Notification from './components/Notification/Notification';
import Orderplaced from './components/Orderplaced/Orderplaced';
import Logout from './Pages/Logout/Logout';
const App = () => {
   const { user } = useContext(AuthContext);
const [price,setprice]=useState(0)
const [company,setcompany]=useState("")
const [category,setcategory]=useState("")
const [isproduct,setisproduct]=useState(false)
const [isrestaurant,setisrestaurant]=useState(false)
const [isother,setisother]=useState(false)
const [city,setcity]=useState("")
const [rating,setrating]=useState("")
const [type,settype]=useState("")


const parentcall=(childprice,childcompany,childcategory)=>{

   setprice(childprice)
   setcompany(childcompany)
   setcategory(childcategory)
  settype('product')
}

const myparentcall=(childcity,childrating)=>{

   setcity(childcity)
   setrating(childrating)
   settype('restaurant')
  
}





  return (
<>
   <Router>
   
   {user?<Topbar/>:""}
   
   <div className='container'>
      <div className='row'>
<div className='col-md-4'>
{isrestaurant?<Newsidebar mynewcallback={myparentcall} />:""}
{isproduct?<Sidebar newcallback={parentcall} />:""}
{isother?<Usersidebar/>:""}
</div>

   
 <div className='col-md-8'>
   <Routes>
   {!user?<Route exact path= "/Login"element={<Login/>}/>:""}
   <Route exact path= "/Logout"element={user?<Logout/>:<Login/>}/>
   <Route exact path= "/Register"element={<Register/>}/>

   </Routes>

   
<Routes>




   <Route exact path= "/"element={user?<Home Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} />: <Login/>}/>

   <Route exact path= "/Restaurants"element={user?<Restaurants City={city} Rating={rating} Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   
   <Route exact path= "/Products"element={user?<Products Price={price} Company={company} Category={category}  Type={type}  setIsproduct={setisproduct} setIsrestaurant={setisrestaurant} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/Productpost"element={user?<Productpost Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/Restaurantpost"element={user?<Restaurantpost Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/Shops"element={user?<Shoppost Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct}setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/AccessShop"element={user?<Shopper Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/AccessRestaurant"element={user?<Restaurantacc Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>

   <Route path="/productitem" element={<Singleitem />} />
   <Route path="/Restaurantitem" element={<SingleRestaurant />} />
   <Route exact path="/orderplaced" element={<Orderplaced />} />
   <Route exact path="/notification" element={<Notification />} />

</Routes>
</div>

</div>
   </div>
   </Router>
 
   </>
  )
};

export default App;
