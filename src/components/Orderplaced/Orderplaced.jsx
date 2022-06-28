import React from 'react'

import { AuthContext } from '../AuthContext/AuthContext';

import { useContext, useState,useEffect } from "react";
import axios from 'axios';

const Orderplaced = (props) => {

  useEffect(() => {
    props.setIsrestaurant(false)
    props.setIsproduct(false)
    props.setisother(true)
  }, [props.Type]);



  const arra=[]
const arra1=[]
const myarray=[]
const [arr,setarr]=useState([])

    const { user } = useContext(AuthContext);






    const handleclick=async(e)=>{

     
   }



   useEffect(async()=>{

    try{



      let userdetails={
        userid:user._id,
        username:user.username
      }
    
    
    
   
    const res=await axios.post("users/getuser",userdetails ,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
    let notification=res.data.notification
    res.data.orderplaced.map((elem,index)=>{
      arra1.push(elem)
    })
    console.log(arra1)
    setarr(arra1)
    
    } catch(err){
    
    console.log(err)
    }


   },[user])




   const handleclear=async(e)=>{

    e.preventDefault()
    const newdetails={
      myuserid:user._id,
      ordid:e.target.children[0].innerText

    }

    console.log(e.target.children[0].innerText)
try{

const res=await axios.post("users/cleardata",newdetails ,
{
   headers: {
      token:
      "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
    },
  })

setarr(res.data.orderplaced)

props.setorderplaced(res.data.orderplaced.length)


}
catch(err){

console.log(err)

}

   }


  return (
    <>

    <h1>Orderplaced</h1>



    <div className='user'>

{arr.map((data) => (
  <div className='border bg-light mt-3'>

    <form onSubmit={handleclear}>
      <p><span></span>{data._id}</p>
    <p><span style={{fontFamily:"inherit",fontSize:"20px"}}>Price : </span>{data.price?data.price:"not defined"}</p>
    <p><span style={{fontFamily:"inherit",fontSize:"20px"}}>Name : </span>{data.productname}</p>
    
   <p><span style={{fontFamily:"inherit",fontSize:"20px"}}>Quantity : </span>{data.quantity}</p> 
   <p><span style={{fontFamily:"inherit",fontSize:"20px"}}>Address : </span>{data.address}</p> 
   <p><span style={{fontFamily:"inherit",fontSize:"20px"}}>Email : </span>{data.email}</p> 
   <p><span style={{fontFamily:"inherit",fontSize:"20px",display:"none"}}>Restaurantid : </span>{data.restaurantid}</p> 
   <p><span style={{fontFamily:"inherit",fontSize:"20px"}}>Phone : </span>{data.phone}</p> 
   <p><span style={{fontFamily:"inherit",fontSize:"20px",display:"none"}}>Status : </span>{data.status}</p> 

   <button className='btn btn-primary'>clear</button>
   </form>

  


</div>

))}

</div>
<br /><br />







    </>




  )
}

export default Orderplaced