import React from 'react'
import { useContext, useState,useEffect } from "react";
import axios from "axios";
import "./productpost.css"






const Productpost = (props) => {
  const products=[]
const [file, setFile] = useState(null);
const [productname, setProductname] = useState("");
const [price, setPrice] = useState("");
const [company, setcompany] = useState("");
const [category, setcategory] = useState("");
const [sizes, setsizes] = useState([]);
const [productdetails, setproductdetails] = useState("");
const [shopcode, setshopcode] = useState("");
const [creator, setcreator] = useState("");
const [shoplocation, setshoplocation] = useState("");


useEffect(() => {
  props.setIsrestaurant(false)
  props.setIsproduct(false)
  props.setisother(true)
}, [props.Type]);



const handleSubmit = async (e) => {

    e.preventDefault();
    let filename=""
    if(file){
      filename=file.name
    }
  
    const newProduct = {
    
      productname,
      price,
      filename,
      company,
      category,
      sizes,
      productdetails,
      creator,
     
      products,
      shopcode,
      shoplocation
      
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
      const res = await axios.post("/product/",newProduct ,
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
          <label>Productname</label>
          <input
            type="text"
           
            onChange={(e) => setProductname(e.target.value)}
          />
          <label>Company</label>
          <input
            type="company"
           
            onChange={(e) => setcompany(e.target.value)}
          />
          <label>Category</label>
          <input
            type="text"
            
            onChange={(e) => setcategory(e.target.value)}
          />
        
          <label>Creator</label>
          <input
            type="text"
           
            onChange={(e) => setcreator(e.target.value)}
          />
          <label>details</label>
          <input
            type="text"
         
            onChange={(e) => setproductdetails(e.target.value)}
          />
          <label>Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>shopcode</label>
          <input
            type="text"
            onChange={(e) => setshopcode(e.target.value)}
          />
          <label>shoplocation</label>
          <input
            type="text"
            onChange={(e) => setshoplocation(e.target.value)}
          />
 <button className="Submit" style={{width:"200px"}} type="submit">
            add
          </button>

         
        </form>
     
      
   
  

    </div>
    </div>
   




 
    </>
  )
}
export default Productpost
