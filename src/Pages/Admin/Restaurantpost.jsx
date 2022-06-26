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
    <div className="settings">
    <div className="settingsWrapper">
    <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Restaurant Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : ""}
              alt=""
            />
<label htmlFor="fileInput">
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
 </div>
          <label>name</label>
          <input
            type="text"
            placeholder={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>location</label>
          <input
            type="location"
            placeholder={location}
            onChange={(e) => setlocation(e.target.value)}
          />
         
          <label>details</label>
          <input
            type="details"
            placeholder={details}
            onChange={(e) => setdetails(e.target.value)}
          />
          <label>category</label>
          <input
            type="text"
            placeholder={categories}
            onChange={(e) => setcategories(e.target.value)}
          />
          <label>city</label>
          <input
            type="text"
            placeholder={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <label>code</label>
          <input
            type="text"
            onChange={(e) => setcode(e.target.value)}
          />
          <label>rating</label>
          <input
            type="text"
            onChange={(e) => setrating(e.target.value)}
          />
          <label>postedby</label>
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


<h3>Add items to your fooditems</h3>



<form onSubmit={handleitems}>

<label>code of your restuarnt</label>
  <input type="text" 
  placeholder='code'
  onChange={(e)=>{
    setmycode(e.target.value)
  }}
  />
<label htmlFor="fileInput">
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setfile(e.target.files[0])}
            />

<label>name of the product</label>
  <input type="text" 
  placeholder='itemname'
  onChange={(e)=>{
    setitem(e.target.value)
  }}
  />

<label>price of the product</label>

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
export default Restaurantpost
