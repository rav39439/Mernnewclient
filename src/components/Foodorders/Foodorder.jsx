import axios from 'axios'
import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from "../AuthContext/AuthContext";
import io, { Socket } from "socket.io-client";
import useMediaquery from '../../Hooks/useMediaquery';
import styled from "styled-components"; 

import {Link} from "react-router-dom"
import { getrestaurant, updaterestaurant } from '../RestaurantContext/Restaurantapicalls';
import { RestaurantContext } from '../RestaurantContext/RestaurantContext';
///const socket=io.connect("http://localhost:8800")
const Foodorder = ({itemname,itemprice,itemimage,restaurantid,newdata,socket,setrestaurantorders,setpostedby,jmatches}) => {


    //const  matches= useMediaquery('(max-width: 600px)')
//console.log(matches)

const {restaurants,dispatch}=useContext(RestaurantContext)




    const mylink="https://mernnewproject.herokuapp.com/api/images/"+itemimage

    const Container=styled.div `
    width:600px;
    margin-left:-70px;
    height:700px;
    
    @media only screen and (max-width: 600px) {
    margin-top:20px;
      width:300px;
      margin-left:5px;
      height:250;
    
      }
    `;


    const { user } = useContext(AuthContext);

   



    useEffect(()=>{
        //console.log("SADfasfafdsaf")
                socket.emit('online',user)
        
            }) 


const [ready,setready]=useState(false)



const [quantity,setquantity]=useState(0)
const [newstyle,setnewstyle]=useState(true)
const price=itemprice
const productname=itemname
const name=user.username
const email=user.email
const userid=user._id
let html=``;
const [address,setaddress]=useState("")
const [phone,setphone]=useState("")

const status="pending"
let orderid=''
// console.log(itemprice)
// console.log(itemname)


useEffect(()=>{
    getrestaurant(dispatch)
    console.log(restaurants)
},[dispatch])

console.log(restaurants)


const enterquantity=()=>{
    if(!ready){
setready(true)
    }
    else{
        setready(false)
    }
}

const handleSubmit=async(e)=>{
    e.preventDefault()
 //const newitem=e.target.itemname
const data={
price,
name,
quantity,
address,
email,
restaurantid,
userid,
phone,
productname,
status,
orderid
}

console.log("sdaffffffffffffffffffffffffffffffffffffffffffffff"+restaurantid);

try{

    const res=await axios.put("/restaurants/setorder",data,
    {
       headers: {
          token:
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
     // updaterestaurant(res.data.restaurant,dispatch)
      console.log(res.data.restaurant)

    console.log(res.data.restaurant.postedby)
   console.log(res.data.id)
    setnewstyle(false)
   /// html=`<p>You have an order of item costing ${price} by ${name} have to deliverd at address ${address}</p>`
    socket.emit("orderpassed",data,res.data.restaurant.postedby,res.data.id)
    //res.data.restaurant.postedby==user.username &&
    //console.log(res.data.restaurant.orders.length)
    setpostedby(res.data.restaurant.postedby)
    setrestaurantorders(res.data.restaurant.orders.length)
setdata(res.data)



} catch(err){


}


try{

    const res=await axios.put("/users/orders",data,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
   
socket.emit("newnotification",res.data.orderplaced.length,user.username)

}
catch(err){
    console.log(err)
}


}


  return (
  
<>


{newstyle?


<div className='border bg-light'style={{width:'300px',overflow:'initial',fontSize:"16px",marginLeft:"70px"}}>

    <div style={{width:'300px',display:'block',flexDirection:'row'}}>



        
<img src={mylink} className="card-img-top" style={jmatches?{height:"70px",width:"80px",borderRadius:'20px',paddingBottom:"20px"}:{height:"80px",width:"70px",borderRadius:'10px',paddingBottom:"8px",fontSize:"12px"}} alt="..."/>
<label style={jmatches?{fontSize:"16px"}:{fontSize:"16px",paddingLeft:"10px"}}><b>itemname:</b></label>

<span style={{paddingLeft:"10px"}}>{itemname}</span>



<p className='' style={{paddingLeft:"80px"}}><b>price(per item):</b>{itemprice}</p>


<button style={{width:"80px",height:"50px"}} className="btn btn-primary"onClick={enterquantity}><span style={jmatches?{fontSize:"14px"}:{fontSize:"16px"}}>quantity</span></button>
<button style={{width:"60px",height:"50px",marginLeft:"30px"}} className="btn btn-primary" onClick={handleSubmit}><span style={jmatches?{fontSize:"14px"}:{fontSize:"16px"}}>order</span></button>
</div>






<label style={{display:ready?'block':'none'}}>quantity</label>

<input type="number" 
style={{display:ready?'block':'none'}}
onChange={(e)=>{
    setquantity(e.target.value)
}}
/>

<label style={{display:ready?'block':'none'}}>itemname</label>

<input type="text" 
style={{display:ready?'block':'none'}}
name='itemname'
defaultValue={itemname}

/>

<label style={{display:ready?'block':'none'}}>address</label>
<input type="text" 
style={{display:ready?'block':'none'}}
onChange={(e)=>{
    setaddress(e.target.value)
}}
/>


<label style={{display:ready?'block':'none'}}>phone</label>
<input type="text" 
style={{display:ready?'block':'none'}}
onChange={(e)=>{
    setphone(e.target.value)
}}
/>





</div>:
<div>
<p>Your order is placed. You will get notification from the showner soon regarding the acceptance 
    of your  order. Kindly keep checking the notification:
</p>
<p> <Link to= "/notification"className='mt-5'>Notification</Link></p>
</div>


}



</>


  )
}
export default Foodorder