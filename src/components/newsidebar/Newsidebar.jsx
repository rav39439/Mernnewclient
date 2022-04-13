import React from 'react'
import {Link} from "react-router-dom"
import { useEffect, useState,useContext } from "react";
import io, { Socket } from "socket.io-client";
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';
const socket=io.connect("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Newsidebar = (props) => {

  const [orderplacedcount,setorderplacedcount]=useState(0)
    const [childcity,setchildcity]=useState("")
  const [childrating,setchildrating]=useState("")
  const { user } = useContext(AuthContext);

  const [count,setcount]=useState(0)
  useEffect(()=>{
    //console.log("SADfasfafdsaf")
            socket.emit('online',user)
    
        })

useEffect(()=>{


  socket.on("notificationdata",function(data){

    console.log(data)
    // alert("notification")
    // localStorage.setItem("orderplaced",data)
  setorderplacedcount(data)
   })

  })





  
  useEffect(() => {
  props.mynewcallback(childcity,childrating)
}, [childcity,childrating]);



useEffect(()=>{


  const countread=async()=>{
  
    console.log(user._id)
    console.log(user.username)
  
    let userdetails={
      userid:user._id,
      username:user.username
    }
  
    try{
      const res= await axios.post("users/getuser",userdetails ,
      {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })
  let p=0
      console.log(res)
      res.data.orderplaced.map((elem,index)=>{
        
           p+=1;
         
         })
         setorderplacedcount(p)
        console.log(count)
    }
    catch(err){
      console.log(err)
    }
    }
  countread()
  })










  return (

    <>
  <div className="sidebar"style={{width:"200px",backgroundColor:"#f1f1f1",position:"relative",height:"800px",
marginTop:"1px",paddingLeft:"50px",marginLeft:"-60px"}}>
  <a className="active" href="/">Home</a><br></br><br></br>
  


  <h3>Filters</h3><br></br><br></br>



<div>
  <select
            name="rating"
            id="rating"
            onChange={(e) => setchildrating(e.target.value)}
          >
            <option></option>
            <option value="1 star">1star</option>
            <option value="2 star">2star</option>
            <option value="3 star">3star</option>
            <option value="4 star">4star</option>
            <option value="5 star">5star</option>
           
         
          </select><br></br><br></br><br></br>
  <select
            name="city"
            id="city"
            onChange={(e) => setchildcity(e.target.value)}
          >
            <option></option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
           
         
          </select><br></br><br></br><br></br>


          <Link to= "/orderplaced"className='mt-5'>orderplaced</Link>
          <small>{orderplacedcount}</small>

</div>





 
</div>






</>

    
  )
}

export default Newsidebar