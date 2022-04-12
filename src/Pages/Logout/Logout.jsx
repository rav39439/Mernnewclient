import React from 'react'
import { AuthContext } from '../../components/AuthContext/AuthContext'
import { useContext, useState } from "react";

const Logout = () => {

const handleclick=(e)=>{

localStorage.removeItem('user')

}
const { user } = useContext(AuthContext);



  return (
    <div>
        
<h1>You can logout here</h1>


<button className='btn btn-primary'onClick={handleclick}>getdata</button>




    </div>
  )
}

export default Logout