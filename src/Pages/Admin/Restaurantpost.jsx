import React from 'react'
import { useContext, useState,useEffect } from "react";

import axios from "axios";
import "./restaurantpost.css"





const Restaurantpost = (props) => {
const [file, setFile] = useState(null);
const [myfile, setfile] = useState(null);
const [name, setname] = useState("");
const [postedby, setpostedby] = useState("");
const [location, setlocation] = useState("");
const [categories, setcategories] = useState(['veg','nonveg','breakfast','dessert']);
const [details, setdetails] = useState("");
const [city, setcity] = useState("");
const [rating, setrating] = useState("");
const [fooditems, setfooditems] = useState([]);
const [item, setitem] = useState("");
const [itemprice, setitemprice] = useState(0);
const [code, setcode] = useState("");
const [mycode, setmycode] = useState("");
const [orders, setorders] = useState([]);
const [mydata, setmydata] = useState({});





useEffect(() => {
  props.setIsrestaurant(false)
  props.setIsproduct(false)
  props.setisother(true)

}, [props.Type]);



const handleitems =async(e)=>{
e.preventDefault()

let myfilename=""
if(myfile){
  myfilename=myfile.name
  console.log(myfilename)
}

  const newitem={
    itemname:item,
    itemprice:itemprice,
    mycode:mycode,
    itemimage:myfilename
  }

  if (myfile) {
    const mydata = new FormData();
    const filename =myfile.name;
    mydata.append("name", filename);
    mydata.append("file", myfile);
   
    try {
      await axios.post("/upload", mydata ,
      {
         headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
    } catch (err) {
      console.log(err)
    }
  }





try{
  const res = await axios.put("/restaurants/fooditem",newitem ,
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
  
  
    const newRestaurant = {
    
      name,
      filename,
      location,
      code,
      categories,
      details,
      city,
      rating,
      fooditems,
      orders,
      postedby
      
    };
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
      const res = await axios.post("/restaurants/",newRestaurant ,
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
          <h1 style={{fontFamily:"initial",fontSize:"50px"}}>Add Your Restaurant Here</h1>
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Restaurant Picture</label>
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
              onChange={(e) => setFile(e.target.files[0])}
            />
 </div>
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Name</label>
          <input
            type="text"
            placeholder={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Location</label>
          <input
            type="location"
            placeholder={location}
            onChange={(e) => setlocation(e.target.value)}
          />
         
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Details</label>
          <input
            type="details"
            placeholder={details}
            onChange={(e) => setdetails(e.target.value)}
          />
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Category</label>
          <input
            type="text"
            placeholder={categories}
            onChange={(e) => setcategories(e.target.value)}
          />
          <label style={{fontFamily:"initial",fontSize:"22px"}}>City</label>
          <select    onChange={(e) => setcity(e.target.value)}>            
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
          </select>

          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Code</label>
          <input
            type="text"
            onChange={(e) => setcode(e.target.value)}
          />
          <label style={{fontFamily:"initial",fontSize:"22px"}}>Rating</label>
          <select    onChange={(e) => setcity(e.target.value)}>            
            <option value="1 star">1 star</option>
            <option value="2 star">2 star</option>
            <option value="3 star">3 star</option>
            <option value="4 star">4 star</option>
            <option value="5 star">5 star</option>
          </select>

          <label>Postedby</label>
          <input
            type="text"
            onChange={(e) => setpostedby(e.target.value)}
          />
        
         
 <button className="Submit" style={{width:"200px"}} type="submit">
            add
          </button>

         
        </form>
     
      
   
  

    </div>
    </div>




    <div className=" bg-light border mt-4" style={{height:"400px"}}>
    <h1 style={{fontFamily:"initial",fontSize:"40px"}}>Add FoodItems to Your Restaurant</h1>

    <div style={{marginLeft:"20px"}}>
<form onSubmit={handleitems}><br></br>

<label style={{fontFamily:"initial",fontSize:"22px"}}>Code of Your Restuarnt</label><br></br>
  <input type="text" 
  placeholder='code'
  onChange={(e)=>{
    setmycode(e.target.value)
  }}
  /><br></br><br></br>
<label htmlFor="fileInput"style={{fontFamily:"initial",fontSize:"22px"}}><br></br>
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setfile(e.target.files[0])}
            /><br></br><br></br>

<label style={{fontFamily:"initial",fontSize:"22px"}}>Name Of the Product</label><br></br>
  <input type="text" 
  placeholder='itemname'
  onChange={(e)=>{
    setitem(e.target.value)
  }}
  /><br></br><br></br>

<label style={{fontFamily:"initial",fontSize:"22px"}}>Price of the Product</label><br></br>

  <input type="number" 
  placeholder='itemprice'
  onChange={(e)=>{
    setitemprice(e.target.value)
  }}
  /><br></br><br></br>
  <button className='btn btn-primary' type="submit">Add Item</button>
  
</form>
</div>
</div>




    </>
  )
}
export default Restaurantpost
