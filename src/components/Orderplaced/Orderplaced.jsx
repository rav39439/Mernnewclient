import React from 'react'

import { AuthContext } from '../AuthContext/AuthContext';

import { useContext, useState } from "react";
import axios from 'axios';

const Orderplaced = () => {

  const arra=[]
const arra1=[]
const myarray=[]
const [arr,setarr]=useState([])

    const { user } = useContext(AuthContext);






    const handleclick=async(e)=>{

      try{



        let userdetails={
          userid:user._id,
          username:user.username
        }
      
      
      
       //console.log(userdetails.userid)
      //  console.log(userdetails.username)
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






      // arr.map((elem,index)=>{
      //    myarray.push(elem)
      //          })
   
      //  setarr(myarray)
   
     
   }




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

}
catch(err){

console.log(err)

}

   }


  return (
    <>

    <h1>Orderplaced</h1>

    <button className='btn btn-primary'onClick={handleclick}>getdata</button>


    <div className='user'>

{arr.map((data) => (
  <div className='border bg-light mt-3'>

    <form onSubmit={handleclear}>
      <p>{data._id}</p>
    <p>{data.price?data.price:"not defined"}</p>
    <p>{data.name}</p>
    
   <p>{data.quantity}</p> 
   <p>{data.address}</p> 
   <p>{data.email}</p> 
   <p>{data.restaurantid}</p> 
   <p>{data.phone}</p> 
   <p>{data.status}</p> 

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