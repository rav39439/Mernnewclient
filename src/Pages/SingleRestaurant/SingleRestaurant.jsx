import React, { useEffect } from 'react'
import { useLocation ,useParams} from 'react-router-dom'
import { useState,useContext } from 'react'
import { AuthContext } from '../../components/AuthContext/AuthContext';
import {Link} from "react-router-dom"

import { useNavigate } from 'react-router';
import Foodorder from '../../components/Foodorders/Foodorder';
import io, { Socket } from "socket.io-client";

import { RestaurantContext } from '../../components/RestaurantContext/RestaurantContext'
import { getrestaurant } from '../../components/RestaurantContext/Restaurantapicalls'
const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const SingleRestaurant = (props) => {



  const {restaurants,dispatch}=useContext(RestaurantContext)

  useEffect(() => {
    props.setIsrestaurant(true)
    props.setIsproduct(false)
    props.setisother(false)
  }, [props.Type]);

  
   
  const [fooditems,setfooditems]=useState([])
  const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const newproduct=location.state.image
    const mylink="https://mernnewproject.herokuapp.com/api/images/"+newproduct
    const[arr,setarr]=useState([])
    let obj={}
    const arraynew=[]



    useEffect(()=>{
      //console.log("SADfasfafdsaf")
              socket.emit('online',user)
      
          })


          useEffect(()=>{
            getrestaurant(dispatch)
            console.log(restaurants)
        },[dispatch])
    
        console.log(restaurants)
    
         

    //const product = location;
    ///const data=JSON.stringify(location.state)
    //setfooditems([...fooditems,location.state.fooditems])
   //console.log(location)


    const handleClick=()=>{

// location.state.fooditems.map(({itemname,itemprice},index)=>{
// obj={
//   itemname:itemname,
//   itemprice:itemprice
// }
// arr.push(obj)
// })

location.state.fooditems.map(function(item,index){
  arraynew.push(item)
 


})

setarr(arraynew)

//console.log(arraynew)
}





  return (

<>
 



    <div className="card mb-3" style={{width:"600px", height:"700px",marginLeft:"-80px",marginTop:"5px"}}>
  <img src={mylink} className="card-img-top" style={{height:"500px",width:"600px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{location.state.name}</h5>
    <p className="card-text">{location.state.details}</p>
    <p className="card-text">{location.state.city}</p>
    <p className="card-text">{location.state.staff}</p>
    <p className="card-text">{location.state.rating}</p>
    <p className="card-text">{location.state.location}</p>

  </div>

  <div>
  <button type='submit' className='btn btn-primary'onClick={handleClick}>see orders</button> 

<h3>Fooditems offered</h3>
{arr.map((data,index) => (
       <Foodorder itemname={data.itemname} itemprice={data.itemprice} itemimage={data.itemimage} restaurantid={location.state._id} newdata={index} socket={socket} setrestaurantorders={props.setrestaurantorders} />
      ))}

</div>

</div>






  



</>
  )
}

export default SingleRestaurant