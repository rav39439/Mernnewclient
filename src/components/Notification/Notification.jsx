import React, { useEffect } from 'react'

import { AuthContext } from '../AuthContext/AuthContext';

import { useContext, useState } from "react";

import axios from 'axios';

const Notification = (props) => {
  useEffect(() => {
    props.setIsrestaurant(false)
    props.setIsproduct(false)
    props.setisother(true)
  }, [props.Type]);



  const { user } = useContext(AuthContext);

const arra=[]
const arra1=[]

let p=0

  const myarray=[]
  const [customnot,setcustomnot]=([{


  }])

//---------------------------------------------counting the messages------------------------------
//   useEffect(()=>{


// const countread=async()=>{

//   console.log(user._id)
//   console.log(user.username)

//   let userdetails={
//     userid:user._id,
//     username:user.username
//   }

//   try{
//     const res= await axios.post("users/getuser",userdetails)

//     console.log(res)
//     res.data.notification.map((elem,index)=>{
//        if(elem.read=='unread'){
//          p+=1;
//        }
//        })
//       console.log(p)
//   }
//   catch(err){
//     console.log(err)
//   }
//   }
// countread()
// })
 //---------------------------------------counting the messages---------------------------------
  //----------------------------------assigning arrays of objects as state-------------------------=
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "Joe",
  //     type: "admin"
  //   },
  //   {
  //     id:2,
  //     name:"hh",
  //     type:"newdsf"
  //   }
  // ]);

//-----------------------------------------------------------------------------------------------------
//-------------------------------------asssinging object as state variable to usestate---------------
  //const [shopCart, setShopCart] = useState({item1:"Juice",item2:"water",mya:[{name:"rikishi"},{name:"runner"}]});
  //--------------------------------------------------------------------------------------------------




const [arr,setarr]=useState([])
const [arr1,setarr1]=useState([])
   


   


const handleclick=async(e)=>{


}



useEffect(async()=>{

  try{



    let userdetails={
      userid:user._id,
      username:user.username
    }
  
  
  
   //console.log(userdetails.userid)
  //  console.log(userdetails.username)
  const res=await axios.post("users/getuser",userdetails ,
  {
     headers: {
        token:
        "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
  let notification=res.data.notification
  res.data.notification.map((elem,index)=>{
    arra1.push(elem)
  })
  console.log(arra1)
  setarr(arra1)
  
  } catch(err){
  
  console.log(err)
  }




},[user])

//---------------------------------------------------------------------------------------
// customnot.notification.map((elem,index)=>{
// if(elem.read=='unread'){
//   p+=1;
// }
// })
//console.log(p)
//-----------------------------------------------------------------------------------------

  //array of elements
//------------------------------------setting array of objects----------------------------------------
//   let updatedValue = {};
//  // let newValue = [];
//  let updatedValuen=[
//    {
//    id:2,
//    name:"henw",
//    type:"user"
//  },
 
// ]
//  setUsers(updatedValuen)

 //--------------------------------------------------------------------------------------------------


//---------------------------------------------setting objects---------------------------------------------




  // updatedValue = {item1:"newagent",item2:"wine",mya:[{name:"num"},{name:"hiu"}]};
  // setShopCart(shopCart => ({
  //      ...shopCart,
  //      ...updatedValue
  //    }));

//----------------------------------------------------------------------------------------------------
  //console.log(sample)
  //  customnot.map((elem,index)=>{
  //     myarray.push(elem)
  //           })
  //   setarr(myarray)

  


const handledelete=async(e)=>{
  e.preventDefault()
  console.log(e.target.children[1].innerText)
  console.log(e.target.children[3].innerText)
  const mybody={
    notid:e.target.children[1].innerText,
    userid:user._id
  }

  try{

    const res=await axios.put("users/removenot",mybody ,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
   // console.log(res.data.notification)
    res.data.notification.map((elem,index)=>{
      arra.push(elem)
            })
            console.log(arra)
   setarr(res.data.notification);
 

setcount(res.data.notifcation.length)

//   let k
// let p=localStorage.getItem('user')

// if(p==null){
// k={}
// }
// else{
//   k=res.data
// }
//  localStorage.setItem('user',k)

  }
  catch(err){

  }
}

const updateread=async(e)=>{


  e.preventDefault()


  console.log(e.target.children[0].innerText)
  const updatenew={
    myuserid:user._id,
    notificationid:e.target.children[0].innerText
  }

  try{
    const res= await axios.put("users/read",updatenew ,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
   setarr(res.data.notification)

props.setcount(res.data.notification.length)

  }
catch(err){

  console.log(err)
}
}
//setarr([...arr,user.notification])
    //useEffect(()=>{

      // user.notification.map((elem,index)=>{
      // myarray.push(elem)
      //       })

      //       setarr(myarray)
   // })
   
//console.log(user)


  return (


    <>

    <h1>Notifications</h1>
{/* <h2>{shopCart.item1}</h2>
<h2>{shopCart.item2}</h2>
<h2>{shopCart.mya[0].name}</h2>
<h2>{shopCart.mya[1].name}</h2> */}

{/* <div>
            <p>{users[0].name}</p>
            <p>{users[0].type}</p>
            <p>{users[0].id}</p>
            <p>{users[1].name?users[1].name:""}</p>
            <p>{users[1].type?users[1].type:""}</p>
            <p>{users[1].id?users[1].id:""}</p>
          </div> */}

{/* <div className="users">
      {users.map((use) => (
        <div className="user">
        <p>{use.id}</p>
        <p>{use.name}</p>
        <p>{use.type}</p>
        
        </div>
      ))}
    </div> */}



  


    <div className='user'>

      {arr.map((data) => (
        <div className='border bg-light mt-3'style={{borderRadius:"10px"}}>
          <form onSubmit={handledelete}>
          <span style={{fontFamily:"inherit",fontSize:"20px"}}>Id :</span><p>{data?._id}</p>
          <span style={{fontFamily:"inherit",fontSize:"20px"}}>userid :</span><p>{data.userid?data.userid:"not defined"}</p>
          <span style={{fontFamily:"inherit",fontSize:"20px"}}>Quantity : </span><p>{data.quantity}</p>
          
          <span style={{fontFamily:"inherit",fontSize:"20px"}}>Message : </span><p>{data.message}</p> 
          <span style={{fontFamily:"inherit",fontSize:"20px"}}>Unread : </span><p>{data.read=='unread'?'unread':'read'}</p> 

         <button className='btn btn-primary' >delete</button>
         </form>
         <form onSubmit={updateread}>
         <p style={{display:"none"}}>{data._id}</p>

         <button className='btn btn-primary' >read</button>
         </form>
      </div>
 
      ))}

    </div>
    <br /><br />




    
<br /><br />

    </>
  )




}

export default Notification