import React from 'react'

import useMediaquery from '../../Hooks/useMediaquery';
import { useNavigate } from 'react-router';


const Restaurant = (props) => {
  const newproduct=props.restaurant.image
  const mylink="https://mernnewproject.herokuapp.com/api/images/"+newproduct
  const navigate = useNavigate();

  const handleClick = () => {

      navigate("/Restaurantitem",{state:props.restaurant,amatches:props.mymatches})
  }


    //console.log(props.restaurant)
    const matches = useMediaquery('(max-width: 600px)')

  return (
<>




  <div className="card mb-3" style={matches?{width:"200px",marginLeft:"12px"}:{width:"300px",marginTop:"5px",marginLeft:"20px"}}>
  <img src={mylink} className="card-img-top"style={matches?{height:"200px",width:"190px"}:{height:"300px",width:"300px",paddingRight:"30px",paddingTop:"10px"}} alt="..."/>
  <div className="card-body">
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




</>
  )
}

export default Restaurant