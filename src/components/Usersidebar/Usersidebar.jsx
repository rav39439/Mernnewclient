import React, { useCallback, useEffect } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContext';
import io, { Socket } from "socket.io-client";
import axios from 'axios';
import { RestaurantContext } from '../RestaurantContext/RestaurantContext';
import { getrestaurant } from '../RestaurantContext/Restaurantapicalls';
import { useContext, useState } from "react";
const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })
const Usersidebar = (props) => {
  const { user } = useContext(AuthContext);
  const { restaurants,dispatch } = useContext(RestaurantContext);


  const [orderrec,setorderrec]=useState(0)
  const [orderplacedcount,setorderplacedcount]=useState(0)

//console.log("the restaurants"+restaurants)
 
  
useEffect(()=>{

  getrestaurant(dispatch)
  console.log(restaurants)

  let m=0
  restaurants.length!=0&&
restaurants?.map((restaurant,index)=>{
restaurant.postedby==user.username&&
(m=m+restaurant.orders.length)
console.log("the my restaurant is "+restaurant.name)
console.log(m)
//restaurant.postedby==user.username&& (m=m+restaurant[index].orders.length)
setorderrec(m)

})

},[dispatch])









  // useEffect(()=>{
  //   //console.log("SADfasfafdsaf")
  //           socket.emit('online',user)
    
  //       }) 

  // useEffect(()=>{
    
//})     


//setorderplacedcount(localStorage.getItem('orderplaced'))



   


  return (
  
    
    <div className="sidebar"style={{color: "red",width:"200px",position:"relative",height:"800px",marginTop:"10px",
    backgroundColor:"#f1f1f1",paddingLeft:"50px",marginLeft:"-60px"}}>
      <a className="active" href="/Home">Home</a><br></br><br></br>
    
    
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
      <Link to= "/orderrecieved"className='mt-5'>orderrecieved</Link>
  <small>{orderrec}</small>
      </li> 

      <li className="nav-item mt-5">

<Link to= "/Allproducts"className='mt-5'>Allproducts</Link>

</li>
    
    </ul>
    
    </div>
    
    


    
  )
}

export default Usersidebar