import React from 'react'
import { useContext, useState,useEffect } from "react";
import axios from "axios";
import "./productpost.css"
import Select from "react-select";






const Productpost = (props) => {


  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");

  const optionList = [
    { value: "Hero Honda", label: "Hero Honda" },
    { value: "Nike", label: "Nike" },
    { value: "Adidas", label: "Adidas" },
    { value: "Peter England", label: "Peter England" },
    { value: "Van Heusen", label: "Van Heusen" }
  ];


  const optionList1 = [
    { value: "T-shirts", label: "T-shirts" },
    { value: "Shoes", label: "Shoes" },
    { value: "Shorts", label: "Shorts" },
    { value: "FMCG", label: "FMCG" },
    { value: "Shirts", label: "Shirts" },
    { value: "Vehicles", label: "Vehicles" }
  ];


  function handleSelect(data) {
    setcategory(data[0].value);
  }

  function handleSelect1(data) {
    setcompany(data[0].value);
  }









  const products=[]
const [file, setFile] = useState(null);
const [productname, setProductname] = useState("");
const [price, setPrice] = useState("");

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
          <Select
          options={optionList}
          placeholder="Select company"
          value={company}
          onChange={handleSelect1}
          isSearchable={true}
          isMulti
        />



         
          <label  style={{fontFamily:"initial",fontSize:"22px"}}>Category</label>

          <Select
          options={optionList1}
          placeholder="Select category"
          value={category}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />

          
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
