import axios from 'axios'
import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { AuthContext } from "../AuthContext/AuthContext";
import io, { Socket } from "socket.io-client";
import {Link} from "react-router-dom"
import { getrestaurant, updaterestaurant } from '../RestaurantContext/Restaurantapicalls';
import { RestaurantContext } from '../RestaurantContext/RestaurantContext';
///const socket=io.connect("http://localhost:8800")
const Foodorder = ({itemname,itemprice,itemimage,restaurantid,newdata,socket,setrestaurantorders,setpostedby}) => {
const {restaurants,dispatch}=useContext(RestaurantContext)
    const mylink="https://mernnewproject.herokuapp.com/api/images/"+itemimage

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

    //console.log(res.data.restaurant.postedby)
   // console.log(res.data.id)
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
<div className='border bg-light'>

    <div style={{display:'flex'}}>

    <img src={mylink} className="card-img-top" style={{height:"30px",width:"40px",borderRadius:'30px'}} alt="..."/>
<span>{itemname}</span><br></br>
<span className='ml-5' style={{marginLeft:"300px"}}>{itemprice}</span>
</div>

<label style={{display:ready?'block':'none'}}>quantiity</label>

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



<button onClick={enterquantity}>enterquantity</button>
<button className='btn btn-primary' onClick={handleSubmit}>order</button>











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