import React from 'react'

import axios from "axios";

import io, { Socket } from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { Privatemess } from '../../components/Message/Privatemess';
import Post from "../../components/post/Post"
import { AuthContext } from "../../components/AuthContext/AuthContext";
import Messagetab from '../../components/Message/Messagetab';
import "./home.css"

const socket=io("https://mernnewproject.herokuapp.com", { transports: ['websocket', 'polling', 'flashsocket'] })

export default function Home(props) {
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

// useEffect(()=>{
//   const fetchPosts=async()=>{

//     const res = await axios.get("/post/")
    
   
//     setPosts(res.data)
//     console.log(res.data)
//   };
  
 
//   fetchPosts()
// },[]);


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
//if(person){

  
  
  //
    //setchat([...chat,{name,message,person}])
    //console.log(pr)
   
   // if(isMounted){
  // console.log(message)
//message.map(function(elem){
 // pr.push(elem)
//})

     // setmessage(message)
  ///console.log(pr)
 //   }

//}

//else{
//if(aperson==""){
  socket.on("public message",({name,message})=>{
  // allmessage.map(function(elem){
  //   arr.push(elem)
  // })
  

//  console.log("the chat name"+name)
 // console.log("the message is"+message)

setchat([...chat,{name,message}])
//arr.push({name,message})
console.log(chat)
  //console.log(arr)
    //console.log(allmessage)
    //setmessage(...mymessage,message)
  //setmessage(allmessage)
 // console.log(arr)
  })
//}
//}

})

const renderchat=()=>{

  //<h1>hgkjgjgkjg</h1>
  console.log(chat)
 chat.map((data,index)=>{
arrnew.push(data)
  //console.log("sdfasdfasfdasf")
  console.log(data.name)
  console.log(data.message)
  // return(
  //   <>
  //   <h1>allmessagees</h1>
  //   <div key={index}>
  //     {name}:<span>{message}</span>
  //   </div>
  //   </>

    //)
  })
  setarr(arrnew)
//   console.log(myarray)
  
  
}








  return (




    <>
  



<form className="settingsForm" onSubmit={handleForm}>
         

 <label>person to send message</label>
          <input
            type="text"
            placeholder="enter person name"
            name='person'
            onChange={(e) => ontextchange(e)}
          />
 <label>name</label>
          <input
            type="text"
            placeholder="enter person name"
            name='name'
            readOnly
           value={user.username}

          />
 <label>Info</label>
          <input
            type="text"
            placeholder="enter information"
            name='message'
            onChange={(e) =>  ontextchange(e)}
          />

<label>post picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : "" }
              alt=""
            />
<label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setfile(e.target.files[0])}
            />
 </div>

<button type='submit'className="Submit" style={{width:"200px"}}>post</button>


 </form>



<hr />

<button className="btn btn-primary" onClick={renderchat} style={{width:"200px"}}>show</button>





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
        <div className="user">{data.username}:{data.message}</div>
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