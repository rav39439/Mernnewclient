import React from 'react'
import { useState,useEffect,useContext} from 'react'
import Foodorderrec from '../../components/Fooditems/Foodorderrec'
import Foodorder from '../../components/Foodorders/Foodorder'
import axios from 'axios'
import { AuthContext } from '../../components/AuthContext/AuthContext'

import io, { Socket } from "socket.io-client";
import Newrestorders from '../../components/Newrestorders/Newrestorders'


const socket=io("https://mernnewclientapi.onrender.com", { transports: ['websocket', 'polling', 'flashsocket'] })

const Restaurantacc = (props) => {
    const arri=[]
   

    const { user } = useContext(AuthContext);




const [myorders,setmyorders]=useState([])
const [restname,setrestname]=useState("")
const [restcode,setrestcode]=useState("")
const[isdata,setisdata]=useState(false)
const[arrival,setarrival]=useState([])
const [data,setdata]=useState({})
//const newproduct=location.state.image

const mylink="https://mernnewclientapi.onrender.com/api/images/"+data?.image

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
let info
   //let neworders
        socket.on('neworder',function(data,orderid){
            console.log(orderid)
            console.log(data)
       data['orderid']=orderid
      info=data
       // arri.push(html)
        setarrival([...arrival,data])
    console.log(arrival)

        })
       
       
    })

    
// useEffect(()=>{
//     socket.on('welcome',function(data){
//         console.log(data)
//     })
//     },[user])











const handleSubmit = async (e) => {
    e.preventDefault()
   

    try{

const res= await axios.get(`restaurants/getbycode?${restname? "restname="+restname:""}&${restcode?"restcode="+restcode:""}`,
{
   headers: {
      token:
      "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
    },
  })
console.log(res.data)

setisdata("true")
setdata(res.data)
//setmyorders([data.orders])


    }
    catch(err){
        console.log(err)
    }
}



  return (
<>

<div className=" bg-light border mt-4">
<h1 style={{fontFamily:"initial",fontSize:"50px"}}>Access Your Restaurant orders here</h1>
<form className="settingsForm" onSubmit={handleSubmit}>
<label style={{fontFamily:"initial",fontSize:"22px"}}>Enter your Restaurant Name</label>


    <input type="text" 
    
    onChange={(e)=>{
        setrestname(e.target.value)
    }}
    />

    <label style={{fontFamily:"initial",fontSize:"22px"}}>Enter your Restaurant Code</label>
<input type="text" 
 onChange={(e)=>{
     setrestcode(e.target.value)
 }}
/>
<button className="Submit btn btn-primary" style={{width:"200px",height:"50px"}} type="submit">order</button>
    </form>


<hr />

</div>
{isdata? <div>


<div style={{border:"2px solid black"}}>

<img src= {mylink} className="card-img-top"style={{height:"500px",width:"600px"}} alt="..."/><br></br>
<ul style={{listStyleType:'none'}}>
<li><strong>City</strong>: {data?.city}</li><br></br>
<li><strong>Location</strong>: {data?.location}</li><br></br>
<li><strong>Name</strong>: {data?.name}</li><br></br>
<li><strong>Rating</strong>: {data?.rating}</li><br></br>

</ul>
</div>


<hr />






<hr />

<div>


<Foodorderrec order={data?.orders} restaurantid={data?._id} socket={socket} />

</div>

</div>:<div className='bg-light border'><h1>No Data</h1></div>}


<h1>Notification</h1>




<div className="users">
      {arrival.map(({price,name,address,quantity,email,restaurantid,userid,phone,status,orderid,productname},index) => (
     <Newrestorders price={price} name={name} address={address} quantity={quantity} email={email}
     
     restaurantid={restaurantid} userid={userid} phone={phone} status={status} orderid={orderid} arrival={arrival} productname={productname}/>
      ))}
    </div>

    </>
  )
}

export default Restaurantacc