import React, { useCallback, useEffect } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContext';
import io, { Socket } from "socket.io-client";
import axios from 'axios';
import { RestaurantContext } from '../RestaurantContext/RestaurantContext';
import { getrestaurant } from '../RestaurantContext/Restaurantapicalls';
import { useContext, useState } from "react";
import styled from "styled-components"; 

import "./usersidebar.css";

const socket=io("https://mernnewclientapi.onrender.com", { transports: ['websocket', 'polling', 'flashsocket'] })
const Usersidebar = (props) => {
  const { user } = useContext(AuthContext);
  const { restaurants,dispatch } = useContext(RestaurantContext);


  const [orderrec,setorderrec]=useState(0)
  const [orderplacedcount,setorderplacedcount]=useState(0)
  

  ///console.log("the new postedby is")
 /// console.log(props.postedby)
 
  const Container=styled.div `
  width:230px;
  height:800px;
  background-color: black;
  font-size: 20px;
  color: white;
  padding-left:20px;
  margin-left:-60px;
  position:relative;
  
  @media only screen and (max-width: 600px) {
  
    display:none
     
    }
  `;
  
  const Montainer=styled.div `
  width:500px;
  height:60px;
  background-color: black;
  font-size: 12px;
  color: white;
  display:none;
  @media only screen and (max-width: 600px) {

overflow:auto;
    display:inline-flex;
  
     
    }
  `;
  
  const Nul=styled.ul `
  
  overflow-x:hidden;
white-space:nowrap; 
height: 1em;
width: 100%;
  
  
  `;





  
  useEffect(()=>{

    getrestaurant(dispatch)
    console.log(restaurants)
  
    let m=0
    function myorders(){
    restaurants.length!=0&&
  restaurants?.map((restaurant,index)=>{
  restaurant.postedby==user?.username&&
  (m=m+restaurant.orders.length)
 props.setpostedby(restaurant.postedby)
  console.log("the my restaurant is "+restaurant.name)
  console.log(m)
  //restaurant.postedby==user.username&& (m=m+restaurant[index].orders.length)
props.setrestaurantorders(m)
  
  })
  }
  myorders()
  },[dispatch])









  // useEffect(()=>{
  //   //console.log("SADfasfafdsaf")
  //           socket.emit('online',user)
    
  //       }) 

  // useEffect(()=>{
    
//})     


//setorderplacedcount(localStorage.getItem('orderplaced'))



   


  return (
  
   <>
    <Container>


     <li className="nav-item">

     <Link to= "/"className='mt-3' style={{marginTop:"10px"}}>Home</Link>

    </li>
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item mt-5">

      <Link to= "/notification"className='mt-5'>Notification</Link>
      <small>{props.count}</small>
      </li>
      <li className="nav-item dropdown mt-5">
      <Link to= "/orderplaced"className='mt-5'>orderplaced</Link>
  <small>{props.orderplace}</small>
      </li> 

      <li className="nav-item dropdown mt-5">
      <Link to= "/AccessRestaurant"className='mt-5'>orderrecieved</Link>
  <small>{props.restaurantorders}</small>
      </li> 

      <li className="nav-item mt-5">

      { user.isAdmin?<Link to= "/Allproducts"className='mt-5'>Allproducts</Link>:""}

</li>
    
    </ul>
    
    </Container>
    
    
<Montainer>


<div className="nav-item">

<Link to= "/" style={{marginTop:"10px"}}>Home</Link>

</div>


 <div className="nav-item">

 <Link to= "/notification">Notification</Link>
 <small>{props.count}</small>
 </div>
 <div className="nav-item dropdown ">
 <Link to= "/orderplaced">orderplaced</Link>
<small>{props.orderplace}</small>
 </div> 

 <div className="nav-item dropdown ">
 <Link to= "/AccessRestaurant">orderrecieved</Link>
<small>{props.restaurantorders}</small>
 </div> 

 <div className="nav-item" >

 { user.isAdmin?<Link to= "/Allproducts">Allproducts</Link>:""}

</div>

  </Montainer>
  </> 
    
  )
}

export default Usersidebar