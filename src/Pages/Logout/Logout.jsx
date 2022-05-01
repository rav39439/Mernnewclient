import React from 'react'
import { AuthContext } from '../../components/AuthContext/AuthContext'
import { useContext, useState,useEffect } from "react";
import { useNavigate } from 'react-router';

const Logout = (props) => {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    props.setIsrestaurant(false)
    props.setIsproduct(false)
    props.setisother(true)
  }, [props.Type]);



const handleclick=(e)=>{

localStorage.removeItem('user')
props.setmyuser(localStorage.getItem('user'))
navigate("/login")


}



  return (
    <div>
        
<h1>You can logout here</h1>


<button className='btn btn-primary'onClick={handleclick}>getdata</button>




    </div>
  )
}

export default Logout