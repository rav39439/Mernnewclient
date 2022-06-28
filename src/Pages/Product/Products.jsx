import React from 'react'

import Sidebar from '../../components/sidbar/Sidebar';
import { useEffect, useState } from "react";
import Product from '../../components/Products/Product'
import styled from "styled-components"; 
import Radium, { StyleRoot } from 'radium';
import axios from "axios";




const Products = (props) => {
 
const [products,setproducts]=useState([])

const style={
width:"900px",
marginLeft:"-320px",
marginTop:"10px",
display:"inline-flex",
height:"200px",
flexDirection:"row",

'@media (max-width: 500px)': {

  display:"inline-flex",

  width:"100px",
  marginLeft:"-130px",
  marginLop:"20px",
  flexDirection:"row"

  },
  }


  useEffect(() => {
props.setIsproduct(true)
props.setIsrestaurant(false)
props.setisother(false)

console.log(props.Company)
console.log(props.Category)
const getRandomLists = async () => {
  try {
    const res = await axios.get(
      `product?${props.Company?"company="+props.Company:""}&${props.Category?"category="+props.Category:""}&${
        props.Price?"price="+props.Price:""}`,
     {
        headers: {
           token:
           "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
         },
       }
    );
  
    setproducts(res.data);
  } catch (err) {
    console.log(err);
  }
};






getRandomLists()
}, [props.Category,props.Company,props.Price]);




  return (
   
    <>

    <center><h1>products</h1></center>


    <StyleRoot>
    <div className='container' style={style} >

      <div className="row">
      

    
  

 
    {products.map((product,index) => (
         

        <Product product={product} key={index} />
      ))}


     
</div>
</div>   

</StyleRoot>
      </>
  )
}

export default Products