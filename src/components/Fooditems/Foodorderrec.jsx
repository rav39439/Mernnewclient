import axios from 'axios'
import React from 'react'
import { useState,useContext } from 'react'

import io, { Socket } from "socket.io-client";

import { AuthContext } from '../AuthContext/AuthContext';
import Foodrecieve from '../Foodcomp/Foodrecieve';



const Foodorderrec = ({order,restaurantid,socket}) => {

  



  const[arr,setarr]=useState([])
 // const[mybutton,setbutton]=(false)
//   const { user } = useContext(AuthContext);
const arraynew=[]
 const handleClick=()=>{
//setbutton("true")
  order.map(function(data,index){
    arraynew.push(data)
   // console.log(index)
   // console.log(data.address)
   // console.log(data.quantity)
    //console.log(data.email)
   // console.log(data.phone)
    console.log("the order id of the precious orde is "+data._id)


  })
  setarr(arraynew)
  //setbutton(true)
 // console.log(arraynew)
//    
    }
// 


//}


  return (
   
<>

<h1>yournew orders</h1>



<div style={{}} >

  {
   arr.map(({ price,quantity,name,address,phone,email,restaurantid,userid,status,_id,productname }) => (

    <Foodrecieve price={price} quantity={quantity} name={name} address={address} phone={phone}
    email={email} restaurantid={restaurantid} userid={userid} status={status} orderid={_id} key={phone} arrah={arr} setarrah={setarr} productname={productname}/>
    // <p key={address}>address is {address} ,email is {email} ,phone no is{phone},price is {price},quantity is {quantity},name is{name},restauarnt is{restaurantid},userid is {userid},status is{status}</p>
  ))

  }

<button type='submit' className='btn btn-primary'onClick={handleClick}>see orders</button> 


</div><br></br><br></br>


</>

  )
}

export default Foodorderrec