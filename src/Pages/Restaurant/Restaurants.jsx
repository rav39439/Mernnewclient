import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";


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



  return (
    <>

<div className='container' style={{marginLeft:"-100px"}} >

<div className="row">

      

    {restaurants?.map((restaurant,index) => (
        <Restaurant restaurant={restaurant} key={index} />
      ))}

      </div>
      </div>
      </>
  )
}

export default Restaurants