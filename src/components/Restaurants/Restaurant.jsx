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
    <h5 className="card-title">{props.restaurant.name}</h5>
    <p className="card-text">{props.restaurant.details}</p>
    <p className="card-text">{props.restaurant.city}</p>
    <p className="card-text">{props.restaurant.staff}</p>
    <p className="card-text">{props.restaurant.rating}</p>
    <p className="card-text">{props.restaurant.location}</p>
  </div>
  <button onClick={handleClick}className="btn btn-primary">details</button>

</div>




</>
  )
}

export default Restaurant