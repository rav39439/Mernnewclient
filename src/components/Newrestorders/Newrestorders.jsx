import React, { useState } from 'react'


import axios from 'axios'
import io, { Socket } from "socket.io-client";


const Newrestorders = ({price,name,address,quantity,email,restaurantid,phone,userid,status,orderid,productname}) => {

    const [ordernew,setneworder]=useState({
        address:address,
        email:email,
    name:name,
    phone:phone,
    price:price,
    quantity:quantity,
    restaurantid:restaurantid,
    status:status,
    userid:userid,
    orderid:orderid,
    productname:productname
      })


    const handleSubmit=async(e)=>{
        e.preventDefault()
    // console.log(e.target.name.value)
    // console.log(e.target.phone.value)
    // console.log(e.target.email.value)
    const newdata={
    
      myrestaurantid:e.target.restaurantid.value,
      myorderid:e.target.orderid.value
    }
    
      
        try{
      const res=await axios.put("restaurants/updateorder",newdata ,
      {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })
      let alldata=res.data

      let l=alldata.length
      console.log(alldata[l-1])
      console.log(alldata[l-1].status)
    setneworder({...ordernew,...alldata[l-1]})
   
        }
      catch(err){
      console.log(err)
      
      }
    
    
    try{
    const res=await axios.put(`/users/notification?${e.target.quantity.value? "quantity="+e.target.quantity.value:""}&${e.target.price.value? "price="+e.target.price.value:""}
    &${e.target.userid.value? "userid="+e.target.userid.value:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}&${e.target.productname.value?"productname="+e.target.productname.value:""}`,
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


  return (
      <>
    <form onSubmit={handleSubmit}>
    <div className='border bg-light mt-3'>
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Price : </span><input type="text"readOnly name="price"value={price}/><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Email : </span><input type="text" readOnly name="email"value={email}/><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Productname : </span><input type="text" readOnly name="productname"value={productname}/><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Userid : </span><input type="text" readOnly name="userid"value={userid}/><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Name : </span><input type="text" readOnly name="name"value={name}/><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>restaurantid : </span><input type="hidden" readOnly name="restaurantid"value={restaurantid}/><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Quantity : </span><input type="text" readOnly name="quantity"value={quantity}/><br /><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Address : </span><input type="text" readOnly name="address"value={address}/><br /><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Phone : </span><input type="text" readOnly name="phone"value={phone}/><br /><br/>
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Status : </span><input type="text" readOnly name="status" value={ordernew.status?ordernew.status:status}/><br /><br />
    <span style={{fontFamily:"initial",fontSize:"22px"}}>Orderid : </span><input type="text" readOnly name="orderid" value={orderid}/><br /><br />
    <button type='submit' className='btn btn-primary'>Accept</button> 

    </div>
    </form>




    
    </>
  )
}

export default Newrestorders