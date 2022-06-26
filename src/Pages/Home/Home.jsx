import React from 'react'

import axios from "axios";
import styled from "styled-components"; 
import useMediaquery from '../../Hooks/useMediaquery';
import io, { Socket } from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { Privatemess } from '../../components/Message/Privatemess';
import Post from "../../components/post/Post"
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Messagetab from '../../components/Message/Messagetab';
import "./home.css"

const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

export default function Home(props) {

  const Container=styled.div `
  width:678px;
  margin-right:180px;
margin-top:30px;
  
  @media only screen and (max-width: 600px) {
  
    width:200px;
    margin-left:40px;
    margin-top:20px;

    }
  `;


  const Label=styled.label `


  margin-left:180px;
font-family:initial;
  
  @media only screen and (max-width: 600px) {
  
    
    margin-left:20px;
    width:150px;
font-family:initial;
font-size:9px;
    }
  `;

  const Header=styled.header `


  font-size:60px;
font-family:cursive;
  
  @media only screen and (max-width: 600px) {
  
    width:250px;
  font-size:32px;
font-family:cursive;
    }
  `;


  const Input=styled.input `

width:350px;
font-family:cursive;
  
  @media only screen and (max-width: 600px) {
  
    width:200px;
font-family:cursive;
    }
  `;


  const Button=styled.button `

width:200px;
margin-left:150px;  
  @media only screen and (max-width: 600px) {
    margin-left:15px;  
    width:100px;

  }
  `;


  const arr=[]
  const arrnew=[]
  const pr=[]
  var obj={}
  const { user } = useContext(AuthContext);
  const username=user.username



    const [state, setstate] = useState({ name: user.username, message: "",person:"" });

const [chat ,setchat]=useState([])
const [yourchat,setyourchat]=useState([])
const [privchat,setprivchat]=useState([])
const [posts,setPosts]=useState([]);
const [mymessage,setmessage]=useState([])
const [aperson,setperson]=useState("")
const [info,setinfo]=useState(null)
const [file,setfile]=useState("")
  useEffect(() => {
  props.setIsrestaurant(false)
  props.setIsproduct(false)
  props.setisother(true)
}, [props.Type]);

const ontextchange=(e)=>{
  setstate({...state,[e.target.name]:e.target.value})
  
}


useEffect(()=>{

socket.emit("online",user)

},[user])


 useEffect(()=>{
  socket.on('newuser',(data)=>{
    
    console.log(data)
  })
   },[user])
  
   const handleForm=(e)=>{
    e.preventDefault()
   
const {name,message,person}=state

setperson(person)

obj={
  name:username,
  message:message
}

person?setyourchat([...yourchat,{username,message}]):setyourchat(yourchat)
arr.push(obj)
console.log(arr)
//console.log("Your chat is "+yourchat)
console.log(message)
console.log(person)
console.log(name)
      socket.emit("message",{name,message,person})
    

  }

useEffect(()=>{

  socket.on("personal message",(name,message,person)=>{
    console.log(message)
    setprivchat([...privchat,{name,message,person}])
    //pr.push({name,message,person})
    console.log(privchat)
  })

})

  


useEffect(()=>{

  socket.on("public message",({name,message})=>{
  
setchat([...chat,{name,message}])
//arr.push({name,message})
console.log(chat)
 
  })
})

const renderchat=()=>{

  //<h1>hgkjgjgkjg</h1>
  console.log(chat)
 chat.map((data,index)=>{
arrnew.push(data)
  //console.log("sdfasdfasfdasf")
  console.log(data.name)
  console.log(data.message)
 
  })
  setarr(arrnew)
   
}


const matches=useMediaquery();

  return (

    <>
  
<h1 style={matches?{fontSize:"60px",
fontFamily:"cursive"
  }:{fontSize:"32px",
    fontFamily:"cursive"}} >Chat With Users</h1>

<div></div>
<form className="settingsForm" style={{padding:"50px"}} onSubmit={handleForm}>
         

 <label><span style={{fontFamily:"inherit"}}><b>Send Message to Person</b></span></label>
          <input
            type="text"
            placeholder="enter person name"
            name='person'
            onChange={(e) => ontextchange(e)}
          />
 <label><span style={{fontFamily:"inherit"}}><b>Name</b></span></label>
          <input
            type="text"
            placeholder="enter person name"
            name='name'
            readOnly
           value={user.username}

          />
 <label><span style={{fontFamily:"inherit"}}><b>Message</b></span></label>
          <input
            type="text"
            placeholder="enter information"
            name='message'
            onChange={(e) =>  ontextchange(e)}
          />


<button type='submit'className="Submit" style={{width:"200px"}}>post</button>


 </form>



<hr />

<button className="btn btn-primary"style={{display:"none"}} onClick={renderchat} >show</button>





<h1>Your messages</h1>
<div className="users">
{chat.map(({name,message},index) => (
 <Messagetab name={name} message={message} newdata={index}/>
))}
</div>




<h1>Your private messages</h1>
{
aperson?
<div className="users">
      {yourchat.map((data) => (
        <div className="user"><span style={{fontFamily:"inherit",fontSize:"20px"}}><b>{data.username}</b></span>:<span style={{fontFamily:"inherit"}}>{data.message}</span></div>
      ))}
    </div>:<div></div>
  }






{


<div className="users">
{privchat.map(({name,message,person},index) => (

  <Privatemess name={name} message={message} person={person} newdata={index}/>
 
))}
</div>
}



{/* 
    <div className="settings">
    <div className="settingsWrapper">
{posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}

    </div>
    </div> */}
  
    </>
  )
}