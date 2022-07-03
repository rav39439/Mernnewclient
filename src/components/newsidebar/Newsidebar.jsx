import React from 'react'
import {Link} from "react-router-dom"
import { useEffect, useState,useContext } from "react";
import io, { Socket } from "socket.io-client";
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';
import styled from "styled-components"; 
import Radium, { StyleRoot } from 'radium';

const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Newsidebar = (props) => {

  const [orderplacedcount,setorderplacedcount]=useState(0)
    const [childcity,setchildcity]=useState("")
  const [childrating,setchildrating]=useState("")
  const { user } = useContext(AuthContext);



  const style = {
    width:"230px",
height:"800px",
backgroundColor: "black",
fontSize:"20px",
position:"relative",
color:"white",
paddingLeft:"20px",
marginLeft:"-60px",

  
    // Adding media query..
    '@media (max-width: 500px)': {

      display:"inline-flex",
  float:"left",
      width:"500px",
      height:"200px",
      backgroundColor:"black",
      fontSize:"12px",
      color:"white",
     
    },
  };



  const Container=styled.div `
  width:230px;
  height:800px;
  background-color: black;
  font-size: 20px;
  color: white;
  padding-left:20px;
  margin-left:-60px;
  position:relative;
  
  @media only screen and (max-width: 600px) {
  
    display:none
     
    }
  `;
  
  const Montainer=styled.div `

  width:500px;
  height:60px;
  background-color: black;
  font-size: 12px;
  color: white;
  display:none;
  @media only screen and (max-width: 600px) {

overflow:auto;
    display:inline-flex;
  
     
    }
  `;


  const style4={


    fontSize:"20px",
    marginTop:"10px",
    color:"blue",
  
    '@media (max-width: 500px)': {
  
     
  marginLeft:"100px"
      
     
    },
  }
  






  const [count,setcount]=useState(0)
  useEffect(()=>{
    //console.log("SADfasfafdsaf")
            socket.emit('online',user)
    
        })

useEffect(()=>{


  socket.on("notificationdata",function(data){

   // console.log(data)
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
  
   // console.log(user._id)
   // console.log(user.username)
  
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
     // console.log(res)
      res.data.orderplaced.map((elem,index)=>{
        
           p+=1;
         
         })
         setorderplacedcount(p)
       // console.log(count)
    }
    catch(err){
      console.log(err)
    }
    }
  countread()
  })










  return (

    <>

<StyleRoot>

   <div className="sidebar"style={style}>
  
  <a className="active" href="/" style={style4}>Home</a><br></br><br></br>


  <h3 >Filters</h3><br></br><br></br>



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
            <option value="Kolkata">Kolkata</option>
           
         
          </select><br></br><br></br><br></br>


          <Link to= "/orderplaced"className='mt-5'>orderplaced</Link>
          <small>{orderplacedcount}</small>

</div>





 
</div>

</StyleRoot>


</>

    
  )
}

export default Newsidebar