import React, { useEffect } from 'react'
import { useContext, useState } from "react";

import axios from "axios";
import Order from "../../components/Order/Order"
import Newshoporders from '../../components/Newshoporders/Newshoporders';
import { AuthContext } from '../../components/AuthContext/AuthContext';

import io, { Socket } from "socket.io-client";

const socket=io.connect("https://mernnewproject.herokuapp.com")

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
<h1>Access Your shop orders here</h1>
<form className="settingsForm" onSubmit={handleSubmit}>

    <label>name</label>
    <input
      type="text"
      onChange={(e) => setname(e.target.value)}
    />
    <label>code</label>
    <input
      type="tel"
      onChange={(e) => setcode(e.target.value)}
    />

<button className="Submit" style={{width:"200px"}} type="submit">getdata</button>

</form>




<hr></hr>


{isdata? <div className='border bg-light'>
<div>{data._id}</div>
<li>{data.Name}</li>
<li>{data.creater?data.creator:""}</li>


<div>


<button type='submit' className='btn btn-primary'onClick={handleClick}>see orders</button> 

{ arr.map(({_id,username,quantity,address,productname,phone,email,userid},index) => (
         

         <Order username={username} quantity={quantity} address={address} productname={productname}
         phone={phone} email={email} shopid={data?._id} key={index} orderid={_id} setarr={setarr} arr={arr} userid={userid} />
       ))
       
       } 
 
</div>

</div>:<div><h1>No Data</h1></div>}

<h1>Notification</h1>

<div className="users">
      {arrival.map(({price,username,address,quantity,email,productname,phone,userid,shoporderid,shopid},index) => (
     <Newshoporders price={price} username={username} address={address} quantity={quantity} email={email}
     
     userid={userid} productname={productname} phone={phone} shoporderid={shoporderid} shopid={shopid} socket={socket} newusers={alluse} />
      ))}
    </div>

</>
  )
 
}

export default Shopper