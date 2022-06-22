import React from 'react'


import { useNavigate } from 'react-router';


const Restaurant = (props) => {
  const newproduct=props.restaurant.image
  const mylink="https://mernnewproject.herokuapp.com/api/images/"+newproduct
  const navigate = useNavigate();

  const handleClick = () => {

      navigate("/Restaurantitem",{state:props.restaurant})
  }


    console.log(props.restaurant)
  return (
<>




  <div className="card mb-3" style={{width:"300px",marginTop:"5px",marginLeft:"20px"}}>
  <img src={mylink} className="card-img-top"style={{height:"300px",width:"300px",paddingRight:"30px",paddingTop:"10px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><span><b>Name : </b></span><span style={{fontFamily:"san-serif",fontSize:'24px'}}><b>{props.restaurant.name}</b></span></h5>
    <hr></hr>
    <p className="card-text" style={{display:"none"}}><b>Details : </b><span style={{fontFamily:"san-serif"}}>{props.restaurant.details}</span></p>

    <p className="card-text"><b>City : </b><span style={{fontFamily:"san-serif"}}>{props.restaurant.city}</span></p>

    <p className="card-text" style={{display:"none"}}><b>Staff : </b><span>{props.restaurant.staff}</span></p>
    <hr></hr>
    <p className="card-text"><b>Rating :</b><span style={{fontFamily:"san-serif"}}>{props.restaurant.rating}</span></p>
    <hr></hr>
    <p className="card-text"><b>Location : </b><span style={{fontFamily:"san-serif"}}>{props.restaurant.location}</span></p>
    <hr></hr>
  </div>
  <button onClick={handleClick}className="btn btn-primary">details</button>

</div>




</>
  )
}

export default Restaurant