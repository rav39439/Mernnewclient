import React from 'react'


import { useState,useEffect } from 'react'

import axios from 'axios'



const Order = ({username,quantity,address,productname,phone,email,orderid,shopid,setarr,arr,userid}) => {

   // console.log(data)
    const handledelete=async(e)=>{

        e.preventDefault()
        const message={
      userid:e.target.userid.value,
          username:e.target.username.value,
          productname:e.target.productname.value,
      //email:e.target.email.value,
          quantity:e.target.quantity.value,
      message:`Your order has ${e.target.orderid.value} for ${e.target.productname.value} having quantity ${e.target.quantity.value} has been declined by ${e.target.shopid.value} `
          
      }


        try{
          const newres=await axios.put(`shop/removedata?${e.target.shopid.value?"shopid="+e.target.shopid.value:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}`)
          let alldata=newres.data.Orderrec
         console.log(alldata)
         console.log(arr)
          //  datac = {
          //   ...datac,
          //    Orderrec: alldata,
          //  };
          setarr(alldata);
        console.log(arr)
          
        }
        catch(err){
          console.log(err)
        }
        


        try{
          const res=await axios.put("/users/ordermessage",message)
      }
      catch(err){
          console.log(err)
      }







         }
        




console.log(username)
//const [productname,setproductname] =useState(order.productname)
//const [orderid,setorderid]=useState(order._id)

///const [data,setdata]=useState({})



    const handlemyClick=async(e)=>{
        e.preventDefault()
 
        console.log(e.target.shopid.value)
        console.log(e.target.orderid.value)
        console.log(e.target.productname.value)
        console.log(e.target.username.value)
        console.log(e.target.email.value)
        const message={
            username:e.target.username.value,
            productname:e.target.productname.value,
            userid:e.target.userid.value,
        email:e.target.email.value,
            quantity:e.target.quantity.value,
        message:`Your order has ${e.target.orderid.value} for ${e.target.productname.value} having quantity ${e.target.quantity.value} has been accepted by ${e.target.shopid.value} `
            
        }
     
//-------------------------------------------------order accepted-----------------------------------
// try{

//         const res=await axios.put(`/shop/accept?${e.target.shopid.value? "shopid="+e.target.shopid.value:""}&${e.target.productname.value? "productname="+
//     e.target.productname.value:""}&${e.target.orderid.value? "orderid="+e.target.orderid.value:""}&${e.target.address.value?"address="+e.target.address.value:""}&${e.target.phone.value?"phone="+e.target.phone.value:""}`)
//     setdata(res.data)

// }
// catch(err){
//     console.log(err)
// }
//------------------------------------------------------------------------------------------------
try{
    const res=await axios.put("/users/ordermessage",message)
}
catch(err){
    console.log(err)
}
    }
    
    
  return (
   
<div className='border'>

Your orders
<form onSubmit={handlemyClick}>
<input type='text' readOnly name="orderid"defaultValue={orderid}/>
<input type='text' readOnly name="shopid"defaultValue={shopid}/>
<input type='text' readOnly name="quantity"defaultValue={quantity}/>
<input type='text' readOnly name="address"defaultValue={address}/>
<input type='text' readOnly name="username"defaultValue={username}/>
<input type='text' readOnly name="email"defaultValue={email}/>
<input type='text' readOnly name="phone"defaultValue={phone}/>
<input type='text' readOnly name="userid"defaultValue={userid?userid:""}/>
<input type='text' readOnly name="productname"defaultValue={productname}/>


<button type='submit' className='btn btn-primary'>Accept</button> 
</form>
<form onSubmit={handledelete}>
<input type='text'style={{display:"none"}} name="username"value={username}/>

<input type='text'style={{display:"none"}} readOnly name="orderid"defaultValue={orderid?orderid:""}/>
<input type='text' style={{display:"none"}} readOnly name="shopid"defaultValue={shopid?shopid:""}/>
<input type='text' style={{display:"none"}} readOnly name="quantity"defaultValue={quantity?quantity:""}/>
<input type='text' style={{display:"none"}}  readOnly name="productname"defaultValue={productname?productname:""}/>
<input type='text' style={{display:"none"}} readOnly name="userid"defaultValue={userid?userid:""}/>


<button type='submit' className='btn btn-primary'>Delete</button> 
</form>
</div>



  )
}

export default Order