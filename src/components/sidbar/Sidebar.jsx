import React from 'react'
import './sidebar.css'
import { useEffect, useState } from "react";
import styled from "styled-components"; 

import Radium, { StyleRoot } from 'radium';

const Sidebar = (props) => {


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


const style1={
  '@media (max-width: 500px)': {

   
float:"left",
    
   
  },
}
const style2={
  '@media (max-width: 500px)': {

   
float:"left",
    
   
  },
}


const style3={
  '@media (max-width: 500px)': {

   
float:"right",
    
   
  },
}


const style4={


  fontSize:"20px",
  marginTop:"10px",
  color:"blue",

  '@media (max-width: 500px)': {

   
marginLeft:"100px"
    
   
  },
}

  const [childprice,setchildprice]=useState(0)
  const [childcompany,setchildcompany]=useState("")
  const [childcategory,setchildcategory]=useState("")
 
  useEffect(() => {
  props.newcallback(childprice,childcompany,childcategory)

  console.log(childcompany)
  console.log(childcategory)
}, [childprice,childcompany,childcategory]);


const Container=styled.div `
width:230px;
height:800px;
background-color: black;
font-size: 20px;
position:relative;
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
height:100px;
background-color: black;
font-size: 12px;
color: white;

display:none;

@media only screen and (max-width: 600px) {

  display:inline-flex;

   
  }
`;








  return (

    <>

<StyleRoot>
 <div className="sidebar" style={style} >
<a className="active" href="/" style={style4}>Home</a><br></br><br></br>

<h3>Filters</h3>
<div><br></br><br></br>
  <select
            name="genre"
            id="genre"
            onChange={(e) => setchildcategory(e.target.value)}
          style={style1}>
          <option ></option>
            <option value="T-shirt">T-shirt</option>
            <option value="Shoes">Shoes</option>
            <option value="Shorts">Shorts</option>
            <option value="FMCG">FMCG</option>
            <option value="Shirts">Shirts</option>
            <option value="Vehicles">Vehicles</option>
           
           
         
          </select><br></br><br></br><br></br>
  <select
            name="company"
            id="company"
            onChange={(e) => setchildcompany(e.target.value)}
          style={style2}>
          <option ></option>
            <option value="Hero Honda">Hero Honda</option>
            <option value="Arrow">Arrow</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Peter England">Peter England</option>
            <option value="Van Heusen">Van Heusen</option>
         
          </select><br></br><br></br><br></br>
  
  <select
            name="price"
            id="price"
            onChange={(e) => setchildprice(e.target.value)}
          style={style3}>
            <option></option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="4000">4000</option>
            <option value="8000">8000</option>
            <option value="10000">10000</option>
            <option value="20000">20000</option>
           
         
          </select><br></br><br></br><br></br>
  
        </div>


</div>
</StyleRoot>


    </>
  )
}

export default Sidebar