import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Singleitem from '../../Pages/Singleitem/Singleitem'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router';

const Product = (props) => {

  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/productitem",{state:props.product})
  }
  const newproduct=props.product.image
  console.log(typeof(newproduct))
const mylink="https://mernnewproject.herokuapp.com/api/images/"+newproduct

//const image=props.product.image?"../../../../api/images/"+props.product.image:""
//console.log(props)

  return (

    <>
   
    <div className="card"style={{width:"300px",height:"auto",marginLeft:"20px",marginTop:"100px"}}>
    <img src={mylink} className="card-img-top"style={{height:"300px",width:"300px",paddingRight:"30px",paddingTop:"10px"}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.product.productname}</h5>
      <p className="card-text">{props.product.productdetails}</p>
    </div>
    <ul className="list-group list-group-flush">

        
      <li className="list-group-item">{props.product.category}</li>
      <li className="list-group-item">{props.product.price}</li>
      <li className="list-group-item">{props.product.shoplocation?props.product.shoplocation:""}</li>
      <li className="list-group-item"style={{display:"none"}}>{props.product.shopcode}</li>
    </ul>
    <div className="card-body">

    
    <button onClick={handleClick} >sendata</button>

    </div>
   

  </div>
  </>
  )
}

export default Product