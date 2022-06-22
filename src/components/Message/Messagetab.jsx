import React from 'react'

import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext'


const Messagetab = ({name,message,newdata}) => {
  const { user } = useContext(AuthContext);

//     const { user } = useContext(AuthContext);
console.log("new world")
  console.log(message)
  console.log(name)
  let isuser=(user.username==name)
  console.log(isuser)
  return (

<>

    <div className='border bg-light'style={{overflowY:scroll}}>



 <p key={newdata} style={{marginLeft:isuser?"0px":"100px"}}><span style={{fontSize:"20px"}}><b>{name}</b></span>:<span style={{fontFamily:"cursive"}}>{message}</span></p>




    </div>
    </>
  )
}

export default Messagetab