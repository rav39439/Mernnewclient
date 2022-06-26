import React, { useEffect } from 'react'
import { useLocation ,useParams} from 'react-router-dom'
import { useState,useContext } from 'react'
import { AuthContext } from '../../components/AuthContext/AuthContext';
import {Link} from "react-router-dom"
import styled from "styled-components"; 
import './singlerest.css'
import useMediaquery from '../../Hooks/useMediaquery';
import { useNavigate } from 'react-router';
import Foodorder from '../../components/Foodorders/Foodorder';
import io, { Socket } from "socket.io-client";

import { RestaurantContext } from '../../components/RestaurantContext/RestaurantContext'
import { getrestaurant } from '../../components/RestaurantContext/Restaurantapicalls'
const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const SingleRestaurant = (props) => {
  const matches = useMediaquery('(max-width: 600px)')

  const Container=styled.div `
  border:1px solid black;
  margin-top:100px;
  background-color:#87CEFA;
  width:600px;
  margin-left:-70px;
  height:750px;
  
  @media only screen and (max-width: 600px) {
  margin-top:20px;
    width:300px;
    margin-left:0px;
    height:250;
  
    }
  `;
  const {restaurants,dispatch}=useContext(RestaurantContext)

  useEffect(() => {
    props.setIsrestaurant(true)
    props.setIsproduct(false)
    props.setisother(false)
  }, [props.Type]);

  
   
  const [fooditems,setfooditems]=useState([])
  const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const newproduct=location.state.data.image
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
            //console.log(restaurants)
        },[dispatch])
    
       // console.log(restaurants)
    

    const handleClick=()=>{

location.state.data.fooditems.map(function(item,index){
  arraynew.push(item)

})

setarr(arraynew)

}



//console.log(matches)

  return (

<>
 



    <Container>
  <img src={mylink} className="card-img-top" style={location.state.amatches?{height:"300px",width:"295px"}:{height:"500px",width:"600px"}} id="Iimage"alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><span style={{fontFamily:"inherit",fontSize:"20px"}}><b>Restaurantname :</b></span>{location.state.data.name}</h5>
    <p className="card-text"><span style={{fontFamily:"inherit",fontSize:"20px"}}><b>Details :</b></span>{location.state.data.details}</p>
    <p className="card-text"><span style={{fontFamily:"inherit",fontSize:"20px"}}><b>City :</b></span>{location.state.data.city}</p>
    <p className="card-text" style={{display:"none"}}><span><b></b></span>{location.state.staff}</p>
    <p className="card-text"><span style={{fontFamily:"inherit",fontSize:"20px"}}><b>Rating :</b></span>{location.state.data.rating}</p>
    <p className="card-text"><span style={{fontFamily:"inherit",fontSize:"20px"}}><b>Location :</b></span>{location.state.data.location}</p>

  </div>
  </Container>
 

  
  <div style={location.state.amatches?{}:{marginLeft:"-70px"}}>
  <button type='submit' className='btn btn-primary mt-4'onClick={handleClick}>see Fooditems</button> 
<h3>Fooditems offered</h3>
{arr.map((data,index) => (
       <Foodorder itemname={data.itemname} itemprice={data.itemprice} itemimage={data.itemimage} restaurantid={location.state._id} newdata={index} socket={socket} setrestaurantorders={props.setrestaurantorders} setpostedby={props.setpostedby} jmatches={location.state.amatches} />
      ))}

</div>








  



</>
  )
}

export default SingleRestaurant