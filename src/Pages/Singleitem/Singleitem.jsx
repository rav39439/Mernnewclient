import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext, useState,useEffect } from "react";
import io, { Socket } from "socket.io-client";

import { useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from "../../components/AuthContext/AuthContext"

const socket=io.connect("https://mernnewproject.herokuapp.com")

const Singleitem = () => {
const myusers=[]
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const[ddata,setddata]=useState([])
    const { user } = useContext(AuthContext);
const [address,setaddress]=useState("")
const [quantity,setquantity]=useState(0)
const username=user.username
//const [email,setemail]=useState("")
const [phone,setphone]=useState()
const productname=location.state.productname
const price=location.state.price
const userid=user._id
const shopcode=location.state.shopcode
const email=user.email
let shoporderid=''
let shopid=''
    //const product = location;
    ///const data=JSON.stringify(location.state)
    //console.log(location)
const newproduct=location.state.image

    const mylink="https://mernnewproject.herokuapp.com/api/images/"+newproduct
    useEffect(()=>{
      //console.log("SADfasfafdsaf")
              socket.emit('online',user)
      
          })

    const handleClick = () => {

      navigate("/products")
  }

  const handleSubmit = async (e) => {
e.preventDefault()
    const order = {
    
      address,
      quantity,
      username,
      email,
      phone,
      productname,
      price,
      userid,
      shoporderid,
      shopid,
shopcode
     
    };
   
    try {
      const res = await axios.put(
        `shop?${address?"address="+address:""}&${quantity?"quantity="+quantity:""}&${
          username?"username="+username:""}&${ email?"email="+email:""}&${ phone?"phone="+phone:""}&${productname?"productname="+productname:""}&${shopcode?"shopcode="+shopcode:""}&${userid?"userid="+userid:""}`,
         {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
           },
       }
      );

      console.log(res.data)
//       let l=res.data.length;

// for(let j=0;j<l;j++){

//   myusers.push(res.data[j].creator)
// }
// setddata([...ddata,myusers])
//console.log(myusers)

     // for(let i=0;i<l;i++){
        console.log(res.data._id)
        console.log(res.data.creator)
        //console.log(res.data[i].c)
        let len=res.data.Orderrec.length
         socket.emit("ordergiven",order,res.data.creator,res.data.Orderrec[len-1]._id,res.data._id)

    //  }
      




      console.log(res)
   



        }
         catch(err){

        }
try{
const newres=await axios.put("users/orders",order,
{
   headers: {
      token:
      "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
    },
  })
console.log(newres)
}

catch(err){

console.log(err)

}




  }

  return (
<>


<div className="card"style={{width:"600px", height:"700px",marginLeft:"-80px",marginTop:"5px"}}>
    <img src= {mylink} className="card-img-top"style={{height:"500px",width:"600px"}} alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{location.state.productname}</h5>
      <p className="card-text">{location.state.productdetails}</p>
    </div>
    <ul className="list-group list-group-flush">

        
      <li className="list-group-item">{location.state.category}</li>
      <li className="list-group-item">{location.state._id}</li>
      <li className="list-group-item">{location.state.price}</li>
      <li className="list-group-item">{location.state.shoplocation?location.state.shoplocation:""}</li>
      <li className="list-group-item" style={{display:"none"}}>{location.state.shopcode}</li>
      <button onClick={handleClick}style={{width:"200px"}}>goback</button>
    </ul>
    
    </div>

  

    
    <div className='mt-5' style={{marginLeft:"-70px",marginTop:"100px"}}>
<h3>Place the order </h3>

<form className="settingsForm" onSubmit={handleSubmit}>


<label>productname</label>
          <input
            type="text"
            defaultValue={productname}
          />


          <label>email</label>
          <input
            type="text"

            defaultValue={email}
          />


          <label>quantity</label>
          <input
            type="number"
            onChange={(e) => setquantity(e.target.value)}
          />
          <label>address</label>
          <input
            type="text"
            onChange={(e) => setaddress(e.target.value)}
          />
          <label>Phoneno</label>
          <input
            type="tel"
            onChange={(e) => setphone(e.target.value)}
          />

<button className="Submit" style={{width:"200px",height:"50px"}} type="submit">order</button>

</form>

</div>
    </>


  )
}

export default Singleitem