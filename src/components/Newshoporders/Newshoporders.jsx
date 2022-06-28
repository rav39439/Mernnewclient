import React from 'react'

import { useState,useEffect } from 'react'

import axios from 'axios'

import io, { Socket } from "socket.io-client";



const Newshoporders = ({price,username,address,quantity,email,userid,productname,phone,shoporderid,shopid,socket,handlerefresh}) => {
    const [data,setdata]=useState({})
    const handlemyClick=async(e)=>{
        e.preventDefault()
        console.log(e.target.shopid.value)
        console.log(e.target.orderid.value)
        console.log(e.target.productname.value)
        //console.log(newusers)
        const message={

            userid:e.target.userid.value,
            username:e.target.username.value,
            productname:e.target.productname.value,
        email:e.target.email.value,
            quantity:e.target.quantity.value,
        message:`Your order has ${e.target.orderid.value} has been accepted by ${e.target.shopid.value} `
            
        }
     

// try{

//   ///handlerefresh(e,newusers)

//         await axios.put(`/shop/accept?${e.target.shopid.value? "shopid="+e.target.shopid.value:""}&${e.target.productname.value? "productname="+
//     e.target.productname.value:""}&${e.target.orderid.value? "orderid="+e.target.orderid.value:""}`)
//    // setdata(res.data)

   
//   //  for (let i=0;i<newusers.length;i++){
  
    
//     // console("the page will refresh and you have to wait for sometime"+newusers[i])
// // }
// ///console.log(newusers)


   
// }
// catch(err){
//     console.log(err)
// }

try{
    const res=await axios.put("/users/ordermessage",message ,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
    console.log(res)
}
catch(err){
    console.log(err)
}
    }

   
       //
    
    





useEffect(()=>{
    socket.on('newrefresh',function(event){
window.onload()
    })
})


  return (
  <div className='border'style={{textAlign:"left"}}>

Your orders
<form onSubmit={handlemyClick}><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}></span><input type='hidden' readOnly name="orderid"value={shoporderid}/>
 <span style={{fontFamily:"initial",fontSize:"22px"}}></span><input type='hidden' readOnly name="shopid"value={shopid}/>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Quantity : </span><input type='text' readOnly name="quantity"value={quantity}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Address : </span><input type='text' readOnly name="address"value={address}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Username : </span><input type='text' readOnly name="username"value={username}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Email : </span><input type='text' readOnly name="email"value={email}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Phone : </span><input type='text' readOnly name="phone"value={phone}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Productname : </span><input type='text' readOnly name="productname"value={productname}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Price : </span><input type='text' readOnly name="price"value={price}/><br></br>
 <span style={{fontFamily:"initial",fontSize:"22px"}}>Userid : </span><input type='text' readOnly name="userid"value={userid}/><br></br>


<button type='submit' style={{display:"none"}}className='btn btn-primary'>Accept</button> 
</form>


<button type='submit' className='btn btn-primary'onClick={handlerefresh}>refresh</button> 


</div>
  )
}

export default Newshoporders