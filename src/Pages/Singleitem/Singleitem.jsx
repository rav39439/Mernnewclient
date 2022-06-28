import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext, useState,useEffect } from "react";
import io, { Socket } from "socket.io-client";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from "../../components/AuthContext/AuthContext"
import styled from "styled-components"; 
import "./singlestyle.css";

const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Singleitem = (props) => {

  const [matches,setmatches]=useState(false)
  
    





  const Container=styled.div `
  width:600px;
  margin-left:-5px;
  height:700px;
  
  @media only screen and (max-width: 600px) {
  margin-top:20px;
    width:300px;
    margin-left:5px;
    height:300;
  
    }
  `;
  const Montainer=styled.div `
  margin-top:100px;
  margin-left:-70px;
 
  
  @media only screen and (max-width: 600px) {
  margin-top:20px;
  
    margin-left:5px;
   
  
    }
  `;

  


  useEffect(() => {
    props.setIsrestaurant(false)
    props.setIsproduct(true)
    props.setisother(false)
  }, [props.Type]);

//const match=UseMediaquery();

const myusers=[]
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const[ddata,setddata]=useState([])
    const { user } = useContext(AuthContext);
    const [mystyle,setmystyle]=useState({display:"none"})
const [address,setaddress]=useState("")
const [quantity,setquantity]=useState(0)
const username=user.username
const [newstyle,setnewstyle]=useState(true)
const [style,setstyle]=useState(false)
//const [email,setemail]=useState("")
const [phone,setphone]=useState()
const productname=location.state.productname
const price=location.state.price
const userid=user._id
const shopcode=location.state.shopcode
const email=user.email
let shoporderid=''
let shopid=''
let status="pending"


    //const product = location;
    ///const data=JSON.stringify(location.state)
    //console.log(location)
const newproduct=location.state.image

const handlestyle=(e)=>{
if(style){

  setstyle(false)
}
else{
  setstyle(true)
}
}





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
      status,
shopcode
     
    };
   
    try {
      const res = await axios.put(
        `shop?${address?"address="+address:""}&${quantity?"quantity="+quantity:""}&${
          username?"username="+username:""}&${ email?"email="+email:""}&${ phone?"phone="+phone:""}&${productname?"productname="+productname:""}&${shopcode?"shopcode="+shopcode:""}&${userid?"userid="+userid:""}&${status?"status="+status:""}`,
         {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
           },
       }
      );

      
setnewstyle(false)

let customestyle={
  display:"block"
}

setmystyle(customestyle)
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


<Container>
    <img src= {mylink} className="card-img-top" id="Inimage" alt="..."/>
    <div className="card-body">
     <span style={{fontFamily:"initial",fontSize:"22px"}}>Productname</span> <p  className="card-title"><strong>{location.state.productname}</strong></p>
     <span style={{fontFamily:"initial",fontSize:"22px"}}>ProductDetails</span> <p className="card-text"><strong>{location.state.productdetails}</strong></p>
    </div>
    <ul className="list-group list-group-flush">

        
      <span  style={{fontFamily:"initial",fontSize:"22px"}}>Category</span><li className="list-group-item">{location.state.category}</li>
       <span style={{fontFamily:"initial",fontSize:"22px"}}>Id</span><li className="list-group-item">{location.state._id}</li>
       <span style={{fontFamily:"initial",fontSize:"22px"}}>Price</span><li className="list-group-item">{location.state.price}</li>
       <span style={{fontFamily:"initial",fontSize:"22px"}}>Location</span><li className="list-group-item">{location.state.shoplocation?location.state.shoplocation:""}</li>
      <li className="list-group-item" >{location.state.shopcode}</li>
      <button onClick={handleClick}style={mystyle} className="btn btn-primary">goback</button>
    </ul>
    
    </Container>

  

    { newstyle?
    <div className='productdiv'  id="productdiv" style={{marginTop:"80px"}}>

<button className='btn btn-primary' onClick={handlestyle}>Place order</button>

<form className="settingsForm" onSubmit={handleSubmit} style={{display:style?"none":"block"}}>


<label>productname</label><br></br>
          <input
            type="text"
            defaultValue={productname}
          /><br></br>


          <label>email</label><br></br>
          <input
            type="text"

            defaultValue={email}
          /><br></br>


          <label>quantity</label><br></br>
          <input
            type="number"
            onChange={(e) => setquantity(e.target.value)}
          /><br></br>


          <label>address</label><br></br>
          <input
            type="text"
            onChange={(e) => setaddress(e.target.value)}
          /><br></br>


          <label>Phoneno</label><br></br>
          <input
            type="tel"
            onChange={(e) => setphone(e.target.value)}
          /><br></br>

<button className="btn btn-primary" type="submit">order</button>

</form>

</div>

:
<div style={{marginTop:"400px"}}>
<p>Your order is sent to the shopowner. You will get reply soon.Keep checking your notifications</p>
<p> <Link to= "/notification"className='mt-5'>Notification</Link></p>

</div>

}
    </>


  )

}
export default Singleitem