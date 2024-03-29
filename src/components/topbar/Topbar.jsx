import React from 'react'
import "./topbar.css";
import {Link} from "react-router-dom"
import Sidebar from '../sidbar/Sidebar';
import { AuthContext } from '../AuthContext/AuthContext';
import { useContext, useState } from "react";
const Topbar = () => {


  const { user } = useContext(AuthContext);



  return (


<>

<div className='topbar'>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">

 <div className="container-fluid">


  <a className="navbar-brand" href="/">Mynewapp</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item ml-5">
      <Link to= "/Restaurants"className='ml-5'>Restaurants</Link>
      </li>
      <li className="nav-item dropdown ml-5">
      <Link to= "/Products"className='ml-5'>Products</Link>
      </li>
      <li className="nav-item dropdown ml-5">
     { user.isAdmin?<Link to= "/Restaurantpost"className='ml-5'>Postrestaurant</Link>:""}
      </li>
      <li className="nav-item dropdown ml-5">
     {user.isAdmin?<Link to= "/Productpost"className='ml-5'>PostProduct</Link>:""}
      </li>
      <li className="nav-item dropdown ml-5">
      <Link to= "/Register"className='ml-5'>Regsiter</Link>
      </li>
    
      <li className="nav-item dropdown ml-5">
     <Link to= "/Logout"className='ml-5'>Logout</Link>
   </li>
    
      <li className="nav-item dropdown ml-5">
      {user.isAdmin?<Link to= "/Shops"className='ml-5'>shoppost</Link>:""}
      </li>
      <li className="nav-item dropdown ml-5">
      <Link to= "/AccessShop"className='ml-5'>AcessShops</Link>
      </li>
      <li className="nav-item dropdown ml-5">
      <Link to= "/AccessRestaurant"className='ml-5'>AcessRestaurant</Link>
      </li>
    
    </ul>
    
    
  </div>
  </div>


  </div>
</nav>


</div>

</> 

 )
}

export default Topbar