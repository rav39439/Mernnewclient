import React from 'react'
import { useContext, useState,useEffect } from "react";

import axios from "axios";
import "./restaurantpost.css"





const Shoppost = (props) => {

const [file, setFile] = useState(null);
const [Name, setname] = useState("");
const products=[]
const [orderrec, setorderrec] = useState([]);
const [model, setmodel]= useState("");
const [city, setcity]= useState("");


const [code, setcode]= useState("");
const [mycode, setmycode]= useState("");
const [creator, setcreator]= useState("");
const [itemprice,setitemprice]=useState("")
const [item,setitem]=useState("")


useEffect(() => {
  props.setIsrestaurant(false)
  props.setIsproduct(false)
  props.setisother(true)

}, [props.Type]);



const handleitems =async(e)=>{
  e.preventDefault()
    const newitem={
      itemname:item,
      itemprice:itemprice,
      mymodel:model,
      mycode:mycode
    }
  
  try{
    const res = await axios.put("/shop/additem",newitem ,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
    setmydata(newres.data)
  }
   
  catch(err){
    
  }
  }









const handleSubmit = async (e) => {

    e.preventDefault();
    let filename=""
    if(file){
      filename=file.name
    }
  
  
    const newitem={
        Name:Name,
        products:products,
        code:code,
        orderrec:orderrec,
        creator:creator,
        city:city,
        image:filename
      }
    if (file) {
      const data = new FormData();
      const filename =file.name;
      data.append("name", filename);
      data.append("file", file);
     
      try {
        await axios.post("/upload", data ,
        {
           headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
      } catch (err) {}
    }
    try {
      const res = await axios.post("/shop/",newitem ,
      {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
     
    } catch (err) {
     console.log(err)
    }
  };







  return (
      <>
    <div className="settings">
    <div className="settingsWrapper">
    <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : ""}
              alt=""
            />
<label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
 </div>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
          />
         
         
          <label>shoppercode</label>
          <input
            type="text"
            onChange={(e) => setcode(e.target.value)}
          />
          <label>orderrec</label>
          <input
            type="text"
            onChange={(e) => setorderrec(e.target.value)}
          />
          <label>city</label>
          <input
            type="text"
            onChange={(e) => setcity(e.target.value)}
          />
          <label>creator</label>
          <input
            type="text"
            onChange={(e) => setcreator(e.target.value)}
          />
          
        
         
 <button className="Submit" style={{width:"200px"}} type="submit">
            add
          </button>

         
        </form>
     
      
   
  

    </div>
    </div>

    <h3>Add items to your productlist</h3>



<form onSubmit={handleitems}>

<label>model of your product</label>
  <input type="text" 
  placeholder='model'
  onChange={(e)=>{
    setmodel(e.target.value)
  }}
  />

<label>code of your product</label>
  <input type="text" 
  placeholder='code'
  onChange={(e)=>{
    setmycode(e.target.value)
  }}
  />
<label>name of the item</label>
  <input type="text" 
  placeholder='itemname'
  onChange={(e)=>{
    setitem(e.target.value)
  }}
  />

<label>price of the item</label>

  <input type="number" 
  placeholder='itemprice'
  onChange={(e)=>{
    setitemprice(e.target.value)
  }}
  />
  <button className='btn btn-primary' type="submit">Add item</button>
  
</form>




    </>
  )
}
export default Shoppost
