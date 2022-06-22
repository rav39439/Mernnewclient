import React from 'react'

import Sidebar from '../../components/sidbar/Sidebar';
import { useEffect, useState } from "react";
import Product from '../../components/Products/Product'

import axios from "axios";




const Products = (props) => {
 
const [products,setproducts]=useState([])

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
    <h1>products</h1>
    <div className='container' style={{marginLeft:"-30px"}} >

      <div className="row">
      

     
  

 
    {products.map((product,index) => (
         

        <Product product={product} key={index} />
      ))}


      
</div>
</div>    
      </>
  )
}

export default Products