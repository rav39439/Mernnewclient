import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";

import useMediaquery from '../../Hooks/useMediaquery';
import Restaurant from '../../components/Restaurants/Restaurant';

const Restaurants = (props) => {

const [restaurants,setrestaurant]=useState([])



  useEffect(() => {
  props.setIsrestaurant(true)
  props.setIsproduct(false)
  props.setisother(false)


  const getRandomLists = async () => {

    console.log(props.Rating)
    try {
      const res = await axios.get(
        `restaurants?${props.Rating?"rating="+props.Rating:""}&${props.City?"city="+props.City:""}`,
         {
          headers: {
             token:
             "Bearer"+JSON.parse(localStorage.getItem("user")).accessToken,
           },
         }
      );
      setrestaurant(res.data);
     console.log(res.data)

    } catch (err) {
     console.log(err);
    }
  };

  getRandomLists()
}, [props.City,props.Rating]);

const matches = useMediaquery('(max-width: 600px)')
console.log("the sadfffffffffffffffffffffffffffffffffffffffffffffffffffffff"+props.hmatches)

  return (
    <>
<h1>Restaurants</h1>
<div className='container'  >

<div className="row"style={props.hmatches?{marginLeft:"-30px"}:{marginLeft:"-100px"}}>

      

    {restaurants?.map((restaurant,index) => (
        <Restaurant restaurant={restaurant} mymatches={props.hmatches} key={index} />
      ))}

      </div>
      </div>
      </>
  )
}

export default Restaurants