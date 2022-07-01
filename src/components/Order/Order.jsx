import React from 'react'

import Radium, { StyleRoot } from 'radium';
import styled from "styled-components"; 

import { useState,useEffect } from 'react'

import axios from 'axios'



const Order = ({username,quantity,address,productname,phone,email,orderid,shopid,setarr,arr,status,userid}) => {
  const arra=[]

  const style={
    backgroundColor:'blue',
    border:"2px solid black",
    width:"300px",
    height:"530px",
     marginLeft:"70px",
     marginTop:"50px",
     '@media (max-width: 500px)': {
      backgroundColor:'light',
      border:"2px solid black",
       marginTop:"80px",
       height:"530px",
       width: "300px"
       },
       }
 
       const Montainer=styled.div `

       width:500px;
       margin-left:70px;
     margin-top:50px;
     height:530px;
       background-color:blue;
       border:2px solid black;
       
       @media only screen and (max-width: 600px) {
     
        background-color:blue;
        border:2px solid black";
         margin-top:80px;
         height:530px;
         width: 300px;
          
         }
       `;
     




  var [ordernew,setneworder]=useState({
    _id:orderid,

    username:username,
    quantity:quantity,

    address:address,
    productname:productname,
    phone:phone,

    email:email,
    userid:userid,

status:status,

  })



const handleclear=async(e)=>{
  e.preventDefault()


  try{
    const newres=await axios.put(`shop/removedata?${shopid?"shopid="+shopid:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}`,{
      headers: {
        token:
        "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
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

}



  
    const handledelete=async(e)=>{

        e.preventDefault()
        const message={
      userid:e.target.userid.value,
          username:e.target.username.value,
          productname:e.target.productname.value,
      //email:e.target.email.value,
          quantity:e.target.quantity.value,
      message:`Your order has ${e.target.orderid.value} for ${e.target.productname.value} having quantity ${e.target.quantity.value} has been declined by ${shopid} `
          
      }


        try{
          const newres=await axios.put(`shop/removedata?${shopid?"shopid="+shopid:""}&${e.target.orderid.value?"orderid="+e.target.orderid.value:""}`,{
            headers: {
              token:
              "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          })
          let alldata=newres.data.Orderrec
         console.log(alldata)
         console.log(arr)
       
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
      

    const handlemyClick=async(e)=>{
        e.preventDefault()

        const newdata={

          shopid:shopid,
          orderid:e.target.orderid.value
        }

 
       
        const message={
            username:e.target.username.value,
            productname:e.target.productname.value,
            userid:e.target.userid.value,
        email:e.target.email.value,
            quantity:e.target.quantity.value,
        message:`Your order has ${e.target.orderid.value} for ${e.target.productname.value} having quantity ${e.target.quantity.value} has been accepted by ${shopid} `
            
        }
     
//-------------------------------------------------order accepted-----------------------------------
try{

        await axios.put("/shop/updateorder",newdata,{
          headers: {
            token:
            "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }).then(res=>{
    callback(res)
  })
    



}
catch(err){
    console.log(err)
}

function callback(res){

  let alldata=res.data
  let l=alldata.length
alldata.map((elem,index)=>{
elem._id===newdata.orderid&&
arra.push(elem)
})



setneworder(ordernew => ({
       ...ordernew,
       ...arra[0]
     }));
}





//------------------------------------------------------------------------------------------------
try{
    const res=await axios.put("/users/ordermessage",message)
}
catch(err){
    console.log(err)
}
    }
    
    
  return (
   <>

<StyleRoot>
<div style={{backgroundColor:"blue",width:"250px"}}>


<form onSubmit={handlemyClick}>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Orderid : </span><input type='text' readOnly name="orderid"value={ordernew._id}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Quantity : </span><input type='text' readOnly name="quantity"value={ordernew.quantity}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Address : </span><input type='text' readOnly name="address"value={ordernew.address}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Username : </span><input type='text' readOnly name="username"value={ordernew.username}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Email : </span><input type='text' readOnly name="email"value={ordernew.email}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Phone : </span><input type='text' readOnly name="phone"value={ordernew.phone}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Userid : </span><input type='text' readOnly name="userid"value={ordernew.userid?ordernew.userid:""}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Productname : </span><input type='text' readOnly name="productname"value={ordernew.productname}/><br></br>
<span  style={{fontFamily:"initial",fontSize:"22px"}}>Status : </span><input type='text' readOnly name="status"value={ordernew.status}/><br></br>


<button type='submit' className='btn btn-primary'>Accept</button> <br></br>
</form>
<form onSubmit={handledelete}>
<input type='text'style={{display:"none"}} name="username"value={username}/><br></br>

<input type='text'style={{display:"none"}} readOnly name="orderid"defaultValue={orderid?orderid:""}/>
<input type='text' style={{display:"none"}} readOnly name="shopid"defaultValue={shopid?shopid:""}/>
<input type='text' style={{display:"none"}} readOnly name="quantity"defaultValue={quantity?quantity:""}/>
<input type='text' style={{display:"none"}}  readOnly name="productname"defaultValue={productname?productname:""}/>
<input type='text' style={{display:"none"}} readOnly name="userid"defaultValue={userid?userid:""}/>


<button type='submit' className='btn btn-primary'>Delete</button> <br></br>
</form>


<form onSubmit={handleclear}>
<input type='text'style={{display:"none"}} name="username"value={username}/><br></br>

<input type='text'style={{display:"none"}} readOnly name="orderid"defaultValue={orderid?orderid:""}/>
<input type='text' style={{display:"none"}} readOnly name="shopid"defaultValue={shopid?shopid:""}/>
<input type='text' style={{display:"none"}} readOnly name="quantity"defaultValue={quantity?quantity:""}/>
<input type='text' style={{display:"none"}}  readOnly name="productname"defaultValue={productname?productname:""}/>
<input type='text' style={{display:"none"}} readOnly name="userid"defaultValue={userid?userid:""}/>


<button type='submit' className='btn btn-primary'>clear</button> <br></br>
</form>


</div>
</StyleRoot>
<br></br>
<br></br>
</>
  )
}

export default Order