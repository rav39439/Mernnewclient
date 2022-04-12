import React, { useState } from 'react'


import axios from 'axios'
import io, { Socket } from "socket.io-client";


const socket=io.connect("https://mernnewproject.herokuapp.com")

const Foodrecieve = ({name,price,email,phone,status,restaurantid,userid,address,quantity,orderid,arrah,setarrah,productname}) => {

  const arra=[]

  const handledelete=async(e)=>{

    e.preventDefault()
    const message={
      userid:e.target.userid.value,
      username:e.target.name.value,
    productname:e.target.productname.value,
  email:e.target.email.value,
      quantity:e.target.quantity.value,
     
  message:`Your order has ${e.target.orderid.value}  for product ${productname} having quantity ${e.target.quantity.value} has been declined by ${e.target.restaurantid.value} `
      
  }


    try{
      const newres=await axios.put(`restaurants/aremovedata?${e.target.restaurantid.value?"restaurantid="+e.target.restaurantid.value:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}`,
      {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })
      let alldata=newres.data.orders
     console.log(alldata)
     //setarr(alldata)
     //console.log(arr)
      //  datac = {
      //   ...datac,
      //    Orderrec: alldata,
      //  };
      setarrah(alldata);
    console.log(arrah)
      
    }
    catch(err){
      console.log(err)
    }
    


    try{
      const res=await axios.put("/users/ordermessage",message,
      {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })
  }
  catch(err){
      console.log(err)
  }

     }




const [updatedorder,setorder]=useState({name,price,email,phone,status,restaurantid,userid,address,quantity,orderid,productname})
  //const [updatedstatus,setstatus]=useState(status)
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
_id:orderid

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

  //   try{
  // await axios.put(`/restaurants/updateorder?${e.target.orderid.value? "orderid="+e.target.orderid.value:""}
  // &${e.target.restaurantid.value? "restaurantid="+e.target.restaurantid.value:""}`)

  //   }
  // catch(err){
  // console.log(err)
  // }
  try{
    const res=await axios.put("restaurants/updateorder",newdata)
    let alldata=res.data
    //console.log(alldata[0])
    let l=alldata.length
    //console.log(alldata[l-1].status)
alldata.map((elem,index)=>{
  arra.push(elem)
})
console.log(arra)
    setarrah(arrah)
    //setneworder({...ordernew,...alldata[l-1]})
  //console.log(ordernew)
  
  
  
  
      }
    catch(err){
    console.log(err)
    
    }

    try{
      const res=await axios.put(`/users/notification?${e.target.quantity.value? "quantity="+e.target.quantity.value:""}&${e.target.price.value? "price="+e.target.price.value:""}
      &${e.target.userid.value? "userid="+e.target.userid.value:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}&${e.target.productname.value?"productname="+e.target.productname.value:""}`)
      console.log(res)
      }
      catch(err){
          console.log(err)
      }
      
      }
      
  return (
      <>
      <div>
  

</div>
   <form onSubmit={handleSubmit}>
    <div className='border bg-light mt-3'>
    <input type="text"readOnly name="price"defaultValue={price}/><br />
    <input type="text" readOnly name="email"defaultValue={email}/><br />
    <input type="text" readOnly name="userid"defaultValue={userid}/><br />
    <input type="text" readOnly name="name"defaultValue={name}/><br />
    <input type="text" readOnly name="restaurantid"value={restaurantid}/><br />
    <input type="text" readOnly name="quantity"defaultValue={quantity}/><br /><br />
    <input type="text" readOnly name="address"defaultValue={address}/><br /><br />
    <input type="text" readOnly name="phone"defaultValue={phone}/><br /><br/>
    <input type="text" readOnly name="status" defaultValue={status}/><br /><br />
    <input type="text" readOnly name="orderid" defaultValue={orderid}/><br /><br />
    <input type="text" readOnly name="productname" defaultValue={productname}/><br /><br />
    <button type='submit' className='btn btn-primary'>Accept</button> 

    </div>
    </form>
    <form onSubmit={handledelete}>
<input type='text'style={{display:"none"}} readOnly name="userid"value={userid}/>

<input type='text'style={{display:"none"}} readOnly name="orderid"defaultValue={orderid?orderid:""}/>
<input type='text' style={{display:"none"}} readOnly name="restaurantid"defaultValue={restaurantid?restaurantid:""}/>
<input type="text" style={{display:"none"}} readOnly name="email"defaultValue={email}/><br />
<input type="text" style={{display:"none"}} readOnly name="name"defaultValue={name}/><br />
<input type="text" style={{display:"none"}} readOnly name="userid"defaultValue={userid}/><br />

<input type='text' style={{display:"none"}} readOnly name="quantity"defaultValue={quantity?quantity:""}/>
<input type='text' style={{display:"none"}}  readOnly name="productname"defaultValue={productname?productname:""}/>


<button type='submit' className='btn btn-primary'>Delete</button> 
</form>
    </>
  )
}

export default Foodrecieve