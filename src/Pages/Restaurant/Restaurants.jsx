import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import Radium, { StyleRoot } from 'radium';

import useMediaquery from '../../Hooks/useMediaquery';
import Restaurant from '../../components/Restaurants/Restaurant';

const Restaurants = (props) => {

const [restaurants,setrestaurant]=useState([])

const style={
  width:"1000px",
  marginLeft:"-200px",
  marginTop:"10px",
  display:"inline-flex",
  height:"auto",
  flexWrap:"wrap",
  '@media (max-width: 500px)': {
  
  
  display:"block",
   width:"200px",
    marginLeft:"-40px",
    marginLop:"20px",
 
  
    },
    }
  

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


<center><h1>Restaurants</h1></center>


<StyleRoot>
<div className="container" style={style} >


      
      

    {restaurants?.map((restaurant,index) => (
        <Restaurant restaurant={restaurant} mymatches={props.hmatches} key={index} />
      ))}

      </div>


      
</StyleRoot>
      </>
  )
}

export default Restaurants