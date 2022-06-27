import React, { useEffect } from 'react'
import { useContext, useState } from "react";

import axios from "axios";
import Order from "../../components/Order/Order"
import Newshoporders from '../../components/Newshoporders/Newshoporders';
import { AuthContext } from '../../components/AuthContext/AuthContext';

import io, { Socket } from "socket.io-client";

const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Shopper = (props) => {
  const { user } = useContext(AuthContext);

  const[arr,setarr]=useState([])
const[code,setcode]=useState("")
const[name,setname]=useState("")
const[data,setdata]=useState({})
const[isdata,setisdata]=useState(false)
const[arrival,setarrival]=useState([])
const [alluse,setalluse]=useState([])
const arraynew=[]
let newusers=[]


useEffect(() => {
  props.setIsrestaurant(false)
  props.setIsproduct(false)
  props.setisother(true)

}, [props.Type]);





useEffect(()=>{
  //console.log("SADfasfafdsaf")
          socket.emit('online',user)
  
      })





useEffect(()=>{
  socket.on('newshoporder',function(data,shoporderid,shopid){
      console.log(shoporderid)
      console.log(data)
     
 data['shoporderid']=shoporderid
 data['shopid']=shopid

 // arri.push(html)
 //setalluse(myusers)
  setarrival([...arrival,data])
console.log(arrival)

//console.log(newusers)
  
  })
})

//console.log(alluse)








const handleSubmit = async (e) => {
e.preventDefault()
const getshop = {
    
    name,
    code,
   
  };

 

try {
  const res = await axios.get(`/shop/getbyname?${name?"name="+name:""}&${code?"code="+code:""}`,
  {
     headers: {
        token:
        "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  setisdata(true)
  setdata(res.data);


console.log(res.data)
}


catch (err) {
 console.log(err)
}
};

// const handlerefresh=(event,newusers)=>{
//   for (let i=0;i<newusers.length;i++){
//     socket.emit('refresh',event,newusers[i])
    
//      console("the page will refresh and you have to wait for sometime"+newusers[i])
//  }
// }


 const handleClick=()=>{
//setbutton("true")
  data.Orderrec.map(function(order,index){
    arraynew.push(order)
    // console.log(index)
    // console.log(order.address)
    // console.log(order.quantity)
    // console.log(order.email)
    // console.log(order.phone)


  })
  
  setarr(arraynew)

  console.log(arraynew)
 }



 
  return (
  
<>

<div className=" bg-light border mt-4">
<h1 style={{fontFamily:"initial",fontSize:"50px"}}>Access Your Shop orders here</h1>

<form className="settingsForm" onSubmit={handleSubmit}>

    <label style={{fontFamily:"initial",fontSize:"22px"}}>name</label>
    <input
      type="text"
      onChange={(e) => setname(e.target.value)}
    />
    <label style={{fontFamily:"initial",fontSize:"22px"}}>code</label>
    <input
      type="tel"
      onChange={(e) => setcode(e.target.value)}
    />

<button className="Submit btn btn-primary" style={{width:"200px"}} type="submit">getdata</button>

</form>

</div>


<hr></hr>


{isdata? <div className='bg-light'>



<ul style={{listStyleType:"none",textAlign:"left"}}>

  <li><strong>ShopId</strong>: {data?._id}</li>
<li><strong>Shopname</strong>: {data?.Name}</li>
<li><strong>ShopOwner</strong>: {data?.creater?data.creator:""}</li>
<li><strong>city</strong>: {data?.city}</li>

</ul>

<div style={{backgroundColor:'white'}}>


<button type='submit' className='btn btn-primary'onClick={handleClick}>see orders</button> 
<h1> Your orders</h1>
{ arr.map(({_id,username,quantity,address,productname,phone,email,userid,status},index) => (
         

         <Order username={username} quantity={quantity} address={address} productname={productname} status={status}
         phone={phone} email={email} shopid={data?._id} key={index} orderid={_id} setarr={setarr} arr={arr} userid={userid} />
       ))
       
       } 
 
</div>

</div>:<div><h1>No Data</h1></div>}

<h1>Notification</h1>

<div className="users">
      {arrival.map(({price,username,address,quantity,email,productname,phone,userid,shoporderid,shopid,status},index) => (
     <Newshoporders price={price} username={username} address={address} quantity={quantity} email={email}
     
     userid={userid} status={status} productname={productname} phone={phone} shoporderid={shoporderid} shopid={shopid} socket={socket} newusers={alluse} />
      ))}
    </div>

</>
  )
 
}

export default Shopper