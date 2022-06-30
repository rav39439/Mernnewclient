import React from 'react'

import useMediaquery from '../../Hooks/useMediaquery';
import { useNavigate } from 'react-router';
import Radium, { StyleRoot } from 'radium';


const Restaurant = (props) => {

  const style={
   width:"300px",
   height:"485px",
    marginLeft:"70px",
    marginTop:"50px",
    '@media (max-width: 500px)': {
      marginLeft:"20px",
      marginTop:"30px",
      
      },
      }


  const newproduct=props.restaurant.image
  const mylink="https://mernnewproject.herokuapp.com/api/images/"+newproduct
  const navigate = useNavigate();

  const handleClick = () => {

      //navigate("/Restaurantitem",{state:props.restaurant,amatches:props.mymatches})
      navigate("/Restaurantitem",{state:{data:props.restaurant,amatches:props.mymatches}})
  }


    //console.log(props.restaurant)
    const matches = useMediaquery('(max-width: 600px)')

  return (
<>


<StyleRoot>


    <div className='card mb-3 col-md-4'style={style}>

      <div style={{height:"300px"}}>
  <img src={mylink} className="card-img-top border"style={{height:"300px",width:"300px"}} alt="..."/>
  </div>
  <div className="card-body"style={{height:"250px",lineHeight:"5px"}}>
    <h5 className="card-title"><span style={{fontFamily:"inherit"}}><b>Name : </b></span><span style={{fontFamily:"san-serif",fontSize:'24px'}}><b>{props.restaurant.name}</b></span></h5>
    <hr></hr>
    <p className="card-text" style={{display:"none"}}><b>Details : </b><span style={{fontFamily:"san-serif"}}>{props.restaurant.details}</span></p>

    <p className="card-text"><span style={{fontFamily:"inherit"}}><b>City : </b></span><span style={{fontFamily:"san-serif"}}>{props.restaurant.city}</span></p>

    <p className="card-text" style={{display:"none"}}><b>Staff : </b><span>{props.restaurant.staff}</span></p>
    <hr></hr>
    <p className="card-text"><span style={{fontFamily:"inherit"}}><b>Rating :</b></span><span style={{fontFamily:"san-serif"}}>{props.restaurant.rating}</span></p>
    <hr></hr>
    <p className="card-text"><span style={{fontFamily:"inherit"}}><b>Location : </b></span><span style={{fontFamily:"san-serif"}}>{props.restaurant.location}</span></p>
    <hr></hr>
  </div>
  <button onClick={handleClick}className="btn btn-primary">details</button>

</div>

</StyleRoot>


</>
  )
}

export default Restaurant