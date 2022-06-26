import React from 'react'

import { useEffect, useState } from "react";
import styled from "styled-components"; 
const Sidebar = (props) => {

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
width:1000px;
height:100px;
background-color: black;
font-size: 12px;
color: white;

display:none;

@media only screen and (max-width: 600px) {

  display:inline-flex;

   
  }
`;





  const [childprice,setchildprice]=useState(0)
  const [childcompany,setchildcompany]=useState("")
  const [childcategory,setchildcategory]=useState("")
 
  useEffect(() => {
  props.newcallback(childprice,childcompany,childcategory)
}, [childprice,childcompany,childcategory]);
  return (

    <>
  <Container>
<a className="active" href="/" style={{fontSize:"20px",marginTop:"10px",color:"blue"}}>Home</a><br></br><br></br>

<h3>Filters</h3>
<div><br></br><br></br>



  <select
            name="genre"
            id="genre"
            onChange={(e) => setchildcategory(e.target.value)}
          >
            <option></option>
            <option value="soap">soap</option>
            <option value="drgg">drgg</option>
            <option value="vim">vim</option>
            <option value="Toothpaste">Toothpaste</option>
            <option value="Chair">Chair</option>
           
         
          </select><br></br><br></br><br></br>
  <select
            name="company"
            id="company"
            onChange={(e) => setchildcompany(e.target.value)}
          >
            <option></option>
            <option value="colgate">colgate</option>
            <option value="allout">allout</option>
            <option value="Lux">Lux</option>
            <option value="nivea">nivea</option>
            <option value="New company">New company</option>
           
         
          </select><br></br><br></br><br></br>
  
  <select
            name="price"
            id="price"
            onChange={(e) => setchildprice(e.target.value)}
          >
            <option></option>
            <option value="1000"></option>
            <option value="1000">1000</option>
            <option value="4000">4000</option>
            <option value="8000">8000</option>
            <option value="10000">10000</option>
           
         
          </select><br></br><br></br><br></br>
  
        </div>


</Container>





<Montainer>

<label style={{paddingLeft:"20px",marginTop:'10px'}}>Category</label>
<select
            name="genre"
            id="genre"
            style={{paddingLeft:"20px",height:'30px',marginTop:'10px'}}

            onChange={(e) => setchildcategory(e.target.value)}
          >
            <option></option>
            <option value="soap">soap</option>
            <option value="drgg">drgg</option>
            <option value="vim">vim</option>
            <option value="Toothpaste">Toothpaste</option>
            <option value="Chair">Chair</option>
           
         
          </select>


          <label style={{paddingLeft:"20px",marginTop:'10px'}}>Company</label>

  <select
            name="company"
            style={{paddingLeft:"20px",height:'30px',marginTop:'10px'}}
            onChange={(e) => setchildcompany(e.target.value)}
          >
            <option></option>
            <option value="Calvin Klein">colgate</option>
            <option value="Arrow">allout</option>
            <option value="Adidas">Lux</option>
            <option value="Nike">nivea</option>
            <option value="Lee">New company</option>
            <option value="Vehicles">New company</option>
            <option value="Bike">New company</option>
           
         
          </select>


<br></br><br></br><br></br><br></br>
          <label style={{paddingRight:"50px",float:"left"}}>Price Range</label><br></br><br></br><br></br>

          <select
            name="price"
            style={{paddingLeft:"20px",height:'30px',marginTop:'10px'}}
            onChange={(e) => setchildprice(e.target.value)}
          >
            <option></option>
            <option value="1000"></option>
            <option value="1000">1000</option>
            <option value="4000">4000</option>
            <option value="8000">8000</option>
            <option value="10000">10000</option>
           
         
          </select>
  </Montainer>


    </>
  )
}

export default Sidebar