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




    <div className="settings bg-light border mt-4">
    <div className="settingsWrapper">
    <form className="settingsForm" onSubmit={handleSubmit}>

    <h1 style={{fontFamily:"initial",fontSize:"50px"}}>Add Your Shop Here</h1>

          <label style={{fontFamily:"initial",fontSize:"22px"}}>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : ""}
              alt=""
            />
<label htmlFor="fileInput">
           
            </label >
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
 </div>
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Name</label>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
          />
         
         
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Shoppercode</label>
          <input
            type="text"
            onChange={(e) => setcode(e.target.value)}
          />
       
          <label style={{fontFamily:"initial",fontSize:"22px"}}>City</label>
          <input
            type="text"
            onChange={(e) => setcity(e.target.value)}
          />
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Creator</label>
          <input
            type="text"
            onChange={(e) => setcreator(e.target.value)}
          />
          
        
         
 <button className="submit btn btn-primary" style={{width:"200px"}}  type="submit">
            add
          </button>

         
        </form>
     
      
   
  

    </div>
    </div>


    <div className=" bg-light border mt-4" style={{height:"450px"}}>

    <div style={{marginLeft:"20px"}}>

    <h1 style={{fontFamily:"initial",fontSize:"40px"}}>Add Products to Your Shop</h1>



<form onSubmit={handleitems}>

<label style={{fontFamily:"initial",fontSize:"22px"}}>Model of your Product</label><br></br>
  <input type="text" 
  placeholder='model'
  onChange={(e)=>{
    setmodel(e.target.value)
  }}
  /><br></br><br></br>

<label style={{fontFamily:"initial",fontSize:"22px"}}>Code of your Shop</label><br></br>
  <input type="text" 
  placeholder='code'
  onChange={(e)=>{
    setmycode(e.target.value)
  }}
  /><br></br><br></br>
<label style={{fontFamily:"initial",fontSize:"22px"}}>Name of the Item</label><br></br>
  <input type="text" 
  placeholder='itemname'
  onChange={(e)=>{
    setitem(e.target.value)
  }}
  /><br></br><br></br>

<label style={{fontFamily:"initial",fontSize:"22px"}}>Price of the Item</label><br></br>

  <input type="number" 
  placeholder='itemprice'
  onChange={(e)=>{
    setitemprice(e.target.value)
  }}
  /><br></br><br></br>
  <button className='btn btn-primary' type="submit">Add item</button>
  
</form>

</div>
</div>



    </>
  )
}
export default Shoppost
