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
          >
            <option></option>
            <option value="Hero Honda">Hero Honda</option>
            <option value="Arrow">Arrow</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="New Company">New company</option>
           
         
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
            <option value="T-shirt">T-shirt</option>
            <option value="Shoes">Shoes</option>
            <option value="Shorts">Shorts</option>
            <option value="FMCG">FMCG</option>
            <option value="Shirts">Shirts</option>
            <option value="Vehicles">Vehicles</option>
           
         
          </select>


          <label style={{paddingLeft:"20px",marginTop:'10px'}}>Company</label>

  <select
            name="company"
            style={{paddingLeft:"20px",height:'30px',marginTop:'10px'}}
            onChange={(e) => setchildcompany(e.target.value)}
          >
            <option></option>
            <option></option>
            <option value="Hero Honda">Hero Honda</option>
            <option value="Arrow">Arrow</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="New Company">New company</option>
           
         
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