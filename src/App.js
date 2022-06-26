import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import axios from 'axios';
import { RestaurantContext } from './components/RestaurantContext/RestaurantContext';
import { getrestaurant } from './components/RestaurantContext/Restaurantapicalls';
import './App.css';
import useMediaquery from './Hooks/useMediaquery';
import Topbar from './components/topbar/Topbar';
import Productpost from './Pages/Admin/Productpost';
import Restaurantpost from './Pages/Admin/Restaurantpost';
import Home from './Pages/Home/Home';
import Products from './Pages/Product/Products';
import Restaurants from './Pages/Restaurant/Restaurants';
import Register from './Pages/Register/Register'
import { useContext, useState , useEffect} from "react";
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
import Allproducts from './components/newAdmin/Allproducts';
import Updateproduct from './components/Updateproduct/Updateproduct';
const App = () => {
  // let user={}
   const { user } = useContext(AuthContext);
   const { restaurants,dispatch } = useContext(RestaurantContext);
const [postedby,setpostedby]=useState("")
const [price,setprice]=useState(0)
const [myuser,setmyuser]=useState(user)
//console.log(myuser)
const matches=useMediaquery('(max-width: 600px)');
const [orderrec,setorderrec]=useState(0)
const [neworders,setneworders]=useState(0)
const [restaurantorders,setrestaurantorders]=useState(0)
const [company,setcompany]=useState("")
const [category,setcategory]=useState("")
const [isproduct,setisproduct]=useState(false)
const [isrestaurant,setisrestaurant]=useState(false)
const [isother,setisother]=useState(false)
const [city,setcity]=useState("")
const [rating,setrating]=useState("")
const [type,settype]=useState("")
const [orderplace,setorderplaced]=useState(0)
const [count,setcount]=useState(0)

const parentcall=(childprice,childcompany,childcategory)=>{

   setprice(childprice)
   setcompany(childcompany)
   setcategory(childcategory)
  settype('product')
}



//console.log("the is")
//console.log(orderrec)




useEffect(()=>{


   const countread=async()=>{
   
    // console.log(user._id)
   //  console.log(user.username)
  
     let userdetails={
       userid:user._id,
       username:user.username
     }
   
     try{
       const res= await axios.post("users/getuser",userdetails ,
       {
          headers: {
             token:
             "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
           },
         })

   let p=0
      // console.log(res)
       res.data.orderplaced.map((elem,index)=>{
         
            p+=1;
          
          })
          setorderplaced(p)
         //console.log(count)
     }
     catch(err){
       console.log(err)
     }
     }
   user?countread():setorderplaced(0)



   })



   useEffect(()=>{


      const countread=async()=>{
      
       
      
        let userdetails={
          userid:user._id,
          username:user.username
        }
      
        try{
          
          const res= await axios.post("users/getuser",userdetails ,
          {
             headers: {
                token:
                "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
              },
            })
    
    
      let p=0
         // console.log(res)
          res.data.notification.map((elem,index)=>{
             if(elem.read=='unread'){
               p+=1;
             }
             })
            setcount(p)
           // console.log(count)
        }
        catch(err){
          console.log(err)
        }
        }

      user?countread():setcount(0)
      })



      
      
     












const myparentcall=(childcity,childrating)=>{

   setcity(childcity)
   setrating(childrating)
   settype('restaurant')
  
}





  return (
<>
   <Router>
 

   {myuser?<Topbar/>:""}
   
   <div className='container'>
      <div className='row'>

         {myuser?
<div className='col-md-4'>



{isrestaurant?<Newsidebar mynewcallback={myparentcall} />:""}
{isproduct?<Sidebar newcallback={parentcall} />:""}
{isother?<Usersidebar orderplace={orderplace} count={count} orderrec={orderrec} restaurantorders={restaurantorders} setrestaurantorders={setrestaurantorders} postedby={postedby} setpostedby={setpostedby} />:""}

</div>
:""}
   
 <div className='col-md-8'>
   <Routes>
   <Route exact path= "/"element={!myuser?<Login setuser={setmyuser}/>:<Home setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>}/>

   <Route exact path= "/Logout"element={myuser?<Logout Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct}setisother={setisother} setmyuser={setmyuser}/>:<Login/>}/>
   <Route exact path= "/Register"element={<Register/>}/>

   </Routes>

   
<Routes>




   <Route exact path= "/Home"element={user?<Home Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} />: <Login/>}/>

   <Route exact path= "/Restaurants"element={user?<Restaurants City={city} Rating={rating} Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} hmatches={matches}/>:<Login/>}/>
   
   <Route exact path= "/Products"element={user?<Products Price={price} Company={company} Category={category}  Type={type}  setIsproduct={setisproduct} setIsrestaurant={setisrestaurant} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/Productpost"element={user?<Productpost Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/Restaurantpost"element={user?<Restaurantpost Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/Shops"element={user?<Shoppost Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct}setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/AccessShop"element={user?<Shopper Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>
   <Route exact path= "/AccessRestaurant"element={user?<Restaurantacc Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother}/>:<Login/>}/>

   <Route path="/productitem" element={user?<Singleitem Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} />:""} />
   <Route path="/updateproduct" element={user?<Updateproduct Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} />:""} />
   <Route path="/Restaurantitem" element={user?<SingleRestaurant Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} setneworders={setneworders} setrestaurantorders={setrestaurantorders} setpostedby={setpostedby} />:""} />
   <Route exact path="/orderplaced" element={user?<Orderplaced Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} setorderplaced={setorderplaced} />:""} />
   <Route exact path="/notification" element={user?<Notification Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} setcount={setcount} />:""} />
   <Route exact path="/Allproducts" element={user?<Allproducts Type={type} setIsrestaurant={setisrestaurant} setIsproduct={setisproduct} setisother={setisother} />:""} />
</Routes>
</div>

</div>
   </div>
   </Router>
 
   </>
  )
};

export default App;
