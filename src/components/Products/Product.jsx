import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Singleitem from '../../Pages/Singleitem/Singleitem'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import Radium, { StyleRoot } from 'radium';

import { useNavigate } from 'react-router';

const Product = (props) => {

  const style={


    marginLeft:"120px",
    marginTop:"50px",
    
      '@media (max-width: 500px)': {
    
       
        marginLeft:"20px",
        marginTop:"30px",
        
       
      },
    }



  const Container=styled.div `
  margin-left:-90px;
  margin-top:50px;
  
  @media only screen and (max-width: 600px) {
  margin-left:20px;
  margin-top:30px;
  
    }
  `;

 




  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/productitem",{state:props.product})
  }
  const newproduct=props.product.image
  console.log(typeof(newproduct))


const mylink="https://mernnewclientapi.onrender.com/api/images/"+newproduct



  return (

    <>
   <div className='col-md-4'style={style}>
    
    <img src={mylink} className="card-img-top border"style={{height:"300px",width:"300px",paddingRight:"30px",paddingTop:"10px"}} alt="..."/>
    <div className="card-body border "style={{width:"300px"}}>
      <h5 className="card-title"><p style={{fontFamily:"monospace",width:"230px",fontSize:"16px"}}><b>Product</b>:{props.product.productname}</p></h5>
      <p className="card-text" style={{display:"none"}}>{props.product.productdetails}</p>
    </div>
    <ul className="list-group list-group-flush border" style={{width:"300px"}}>

        
      <li className="list-group-item" style={{width:"230px"}}><span style={{fontFamily:"monospace",width:"230px"}}><b>Category</b> : {props.product.category}</span></li>
      <li className="list-group-item" style={{width:"230px"}}><span style={{fontFamily:"monospace",width:"230px"}}><b>Price</b> : {props.product.price}</span></li>
      <li className="list-group-item" style={{width:"230px"}}><span style={{fontFamily:"monospace",width:"230px"}}><b>Company</b> : {props.product.company}</span></li>
      <li className="list-group-item" style={{display:"none"}}><span><b></b></span> : {props.product.shoplocation?props.product.shoplocation:""}</li>
      <li className="list-group-item"style={{display:"none"}}><span><b></b></span> : {props.product.shopcode}</li>
      <button onClick={handleClick} className="btn btn-primary" >details</button>

    </ul>

  


  </div>
  </>
  )
}

export default Product