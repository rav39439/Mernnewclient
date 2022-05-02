import React, { useState } from 'react'


import axios from 'axios'
import io, { Socket } from "socket.io-client";


const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Foodrecieve = ({name,price,email,phone,status,restaurantid,userid,address,quantity,orderid,arrah,setarrah,productname}) => {

  const arra=[]
const[arr,setarr]=useState([])
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
console.log("the original")
console.log(ordernew)
  let alldata=res.data
  //console.log(alldata[0])
  let l=alldata.length
  //console.log(alldata[l-1].status)
alldata.map((elem,index)=>{
elem._id===newdata.myorderid&&
arra.push(elem)
})
//setarr(arra)
 // setarrah(arrah)
  //setneworder({...ordernew,...alldata[l-1]})
//console.log(ordernew)
console.log("newupdated array")
console.log(arra[0])

setneworder(ordernew => ({
       ...ordernew,
       ...arra[0]
     }));
//ordernew=arra[0]
//ordernew.status=arra[0].status
//setarrah(arra)
//setneworder(arra[0])
//ordernew=arr[0]
//setneworder({...ordernew,...arra[0]})

     console.log("after array")
     console.log(ordernew)


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
      <div>
  

</div>
   <form onSubmit={handleSubmit}>
    <div className='border bg-light mt-3'>
    <input type="text"readOnly name="address"defaultValue={ordernew.address}/><br />
    <input type="text" readOnly name="email"defaultValue={ordernew.email}/><br />
    <input type="text" readOnly name="name"defaultValue={ordernew.name}/><br />
    <input type="text" readOnly name="phone"defaultValue={ordernew.phone}/><br />
    <input type="text" readOnly name="price"value={ordernew.price}/><br />
    <input type="text" readOnly name="productname"defaultValue={ordernew.productname}/><br /><br />
    <input type="text" readOnly name="quantity"defaultValue={ordernew.quantity}/><br /><br />
    <input type="text" readOnly name="restaurantid"defaultValue={ordernew.restaurantid}/><br /><br/>
    <input type="text" readOnly name="status" value={ordernew.status}/><br /><br />
    <input type="text" readOnly name="userid" defaultValue={ordernew.userid}/><br /><br />
    <input type="text" readOnly name="orderid" defaultValue={ordernew._id}/><br /><br />
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