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
      for (var pair of data.entries()) {
        console.log(pair[0]+ ' - ' + pair[1]); 
    }
      console.log(newProduct)
      try {
        await axios.post("/upload", data ,
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



    <div className="settings bg-light border mt-4">
    <div className="settingsWrapper">
    <form className="settingsForm" onSubmit={handleSubmit}>
    <h1 style={{fontFamily:"initial",fontSize:"50px"}}>Add Product to your Shop Here</h1>

          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Productimage Picture</label>
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
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Productname</label>
          <input
            type="text"
           
            onChange={(e) => setProductname(e.target.value)}
          />
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Company</label>
          <select onChange={(e) => setcompany(e.target.value)}>          
           <option value="Hero Honda">Hero Honda</option>
            <option value="Arrow">Arrow</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Peter England">Peter England</option>
            <option value="Van Heusen">Van Heusen</option>
           
          </select>



         
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Category</label>

          <select onChange={(e) => setcategory(e.target.value)}>          
          <option value="T-shirt">T-shirt</option>
            <option value="Shoes">Shoes</option>
            <option value="Shorts">Shorts</option>
            <option value="FMCG">FMCG</option>
            <option value="Shirts">Shirts</option>
            <option value="Vehicles">Vehicles</option>
           
          </select>

          
          {/* <input
            type="text"
            
            onChange={(e) => setcategory(e.target.value)}
          /> */}
        
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Creator</label>
          <input
            type="text"
           
            onChange={(e) => setcreator(e.target.value)}
          />
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>details</label>
          <input
            type="text"
         
            onChange={(e) => setproductdetails(e.target.value)}
          />
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>shopcode</label>
          <input
            type="text"
            onChange={(e) => setshopcode(e.target.value)}
          />
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>shoplocation</label>
          <input
            type="text"
            onChange={(e) => setshoplocation(e.target.value)}
          />
 <button className="Submit btn btn-primary" style={{width:"200px"}} type="submit">
            add
          </button>

         
        </form>
     
      
   
  

    </div>
    </div>
   




 
    </>
  )
}
export default Productpost
