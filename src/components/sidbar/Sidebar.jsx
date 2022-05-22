import React from 'react'

import { useEffect, useState } from "react";

  
const Sidebar = (props) => {




  const [childprice,setchildprice]=useState(0)
  const [childcompany,setchildcompany]=useState("")
  const [childcategory,setchildcategory]=useState("")
 
  useEffect(() => {
  props.newcallback(childprice,childcompany,childcategory)
}, [childprice,childcompany,childcategory]);
  return (

    <>
  <div className="sidebar"style={{color: "red",width:"200px",position:"relative",height:"800px",marginTop:"10px",
backgroundColor:"#f1f1f1",paddingLeft:"50px",marginLeft:"-60px"}}>
  <a className="active" href="/">Home</a><br></br><br></br>

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


</div>








    </>
  )
}

export default Sidebar