import React, { useState } from 'react'


import axios from 'axios'
import io, { Socket } from "socket.io-client";


const socket=io("https://mernnewclientapi.onrender.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Foodrecieve = ({name,price,email,phone,status,restaurantid,userid,address,quantity,orderid,arrah,setarrah,productname}) => {

  const arra=[]
const[arr,setarr]=useState([])




const handleclear=async(e)=>{
  e.preventDefault()

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
    console.log("thedsafghlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
  console.log(arrah)
    
  }
  catch(err){
    console.log(err)
  }
  
}

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
  var [ordernew,setneworder]=useState({
    address:address,
    email:email,
name:name,
phone:phone,
price:price,
productname:productname,
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

console.log("the orderid is "+newdata.myorderid)



  //   try{
  // await axios.put(`/restaurants/updateorder?${e.target.orderid.value? "orderid="+e.target.orderid.value:""}
  // &${e.target.restaurantid.value? "restaurantid="+e.target.restaurantid.value:""}`)

  //   }
  // catch(err){
  // console.log(err)
  // }
  try{
    await axios.put("restaurants/updateorder",newdata,
    {
       headers: {
          token:
          "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }).then(res=>{
        callback(res)
      })






   

  //setneworder({...ordernew,...arra[0]})
 // setneworder(arra[0])
  
      
  //console.log(ordernew.status)
  
  
      }


    catch(err){
    console.log(err)
    
    }

function callback(res){

  let alldata=res.data
  let l=alldata.length
alldata.map((elem,index)=>{
elem._id===newdata.myorderid&&
arra.push(elem)
})

console.log("newupdated array")
console.log(arra[0])

setneworder(ordernew => ({
       ...ordernew,
       ...arra[0]
     }));
}


    try{
      const res=await axios.put(`/users/notification?${e.target.quantity.value? "quantity="+e.target.quantity.value:""}&${e.target.price.value? "price="+e.target.price.value:""}
      &${e.target.userid.value? "userid="+e.target.userid.value:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}&${e.target.productname.value?"productname="+e.target.productname.value:""}`,
      {
         headers: {
            token:
            "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
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
      <div class="d inline-flex " style={{display:'inline-flex',border:"2px solid black"}}>
  


   <form onSubmit={handleSubmit}>
    <div className='border bg-light mt-3'>
    <span  style={{fontFamily:"initial",fontSize:"22px"}}>Address : </span><input type="text"readOnly name="address"defaultValue={ordernew.address}/><br />
    <span  style={{fontFamily:"initial",fontSize:"22px"}}>Email : </span> <input type="text" readOnly name="email"defaultValue={ordernew.email}/><br></br>
    <span  style={{fontFamily:"initial",fontSize:"22px"}}>Name : </span><input type="text" readOnly name="name"defaultValue={ordernew.name}/><br />
    <span  style={{fontFamily:"initial",fontSize:"22px"}}>Phoneno : </span><input type="text" readOnly name="phone"defaultValue={ordernew.phone}/><br />
    <span  style={{fontFamily:"initial",fontSize:"22px"}}>Price : </span><input type="text" readOnly name="price"value={ordernew.price}/><br />
    <input type="hidden"  readOnly name="productname"defaultValue={ordernew.productname}/>
    <span  style={{fontFamily:"initial",fontSize:"22px"}}>Quantity : </span><input type="text" readOnly name="quantity"defaultValue={ordernew.quantity}/><br /><br />
   <input type="hidden"  readOnly name="restaurantid"defaultValue={ordernew.restaurantid}/>
    <span  style={{fontFamily:"initial",fontSize:"22px"}} >Status : </span><input type="text" readOnly name="status" value={ordernew.status}/><br /><br />
    <span  style={{fontFamily:"initial",fontSize:"22px"}} >Userid : </span><input type="text" readOnly name="userid" defaultValue={ordernew.userid}/><br /><br />
    <input type="hidden" readOnly name="orderid" defaultValue={ordernew._id}/><br /><br />
   <button type='submit' className='btn btn-primary'>Accept</button> 

   </div>
    </form>

    <form onSubmit={handledelete} style={{paddingLeft:"10px"}}>
<input type='text'style={{display:"none"}} readOnly name="userid"value={userid}/>

<input type='text'style={{display:"none"}} readOnly name="orderid"defaultValue={orderid?orderid:""}/>
<input type='text' style={{display:"none"}} readOnly name="restaurantid"defaultValue={restaurantid?restaurantid:""}/>
<input type="text" style={{display:"none"}} readOnly name="email"defaultValue={email}/><br />
<input type="text" style={{display:"none"}} readOnly name="name"defaultValue={name}/><br />
<input type="text" style={{display:"none"}} readOnly name="userid"defaultValue={userid}/><br />

<input type='text' style={{display:"none"}} readOnly name="quantity"defaultValue={quantity?quantity:""}/>
<input type='text' style={{display:"none"}}  readOnly name="productname"defaultValue={productname?productname:""}/>


<button type='submit' className='btn btn-primary'>Decline</button> 
</form>



    <form onSubmit={handleclear} style={{paddingLeft:"10px"}}>
<input type='text'style={{display:"none"}} readOnly name="userid"value={userid}/>

<input type='text'style={{display:"none"}} readOnly name="orderid"defaultValue={orderid?orderid:""}/>
<input type='text' style={{display:"none"}} readOnly name="restaurantid"defaultValue={restaurantid?restaurantid:""}/>
<input type="text" style={{display:"none"}} readOnly name="email"defaultValue={email}/><br />
<input type="text" style={{display:"none"}} readOnly name="name"defaultValue={name}/><br />
<input type="text" style={{display:"none"}} readOnly name="userid"defaultValue={userid}/><br />

<input type='text' style={{display:"none"}} readOnly name="quantity"defaultValue={quantity?quantity:""}/>
<input type='text' style={{display:"none"}}  readOnly name="productname"defaultValue={productname?productname:""}/>


<button type='submit' className='btn btn-primary'>clear</button> 
</form>
</div><br></br><br></br><br></br>


    </>
  )
}

export default Foodrecieve