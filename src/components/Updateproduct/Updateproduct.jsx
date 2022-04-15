import React from 'react'
import { useContext, useState,useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router';
import {updateproduct} from '../ProductContext/productapicalls'
import { ProductContext } from '../ProductContext/ProductContext'




const Updateproduct = (props) => {
  const {dispatch}=useContext(ProductContext)

  useEffect(() => {
    props.setIsrestaurant(false)
    props.setIsproduct(false)
    props.setisother(true)
  }, [props.Type]);
  
    const location = useLocation();
    console.log(location)

const myproducts=[]
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







    const handlechange=async(e)=>{
const id=e.target.productid.value
console.log(id)
  e.preventDefault();
  let filename=""
  if(file){
    filename=file.name
  }

const updateProduct = {
    id,
  productname,
  price,
  filename,
  company,
  category,
  sizes,
  productdetails,
  creator,
 

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


updateproduct(updateProduct,dispatch)





    }

  return (
    <div className='bg-light border mt-4'>


          <form onSubmit={handlechange}>

          <label htmlFor="fileInput">
            </label>
            <input
              type="file"
              id="fileInput"
              
              onChange={(e) => setFile(e.target.files[0])}
            /><br></br>

<label>Productname</label>
          <input
            type="text"
           placeholder={location.state.productname}
            onChange={(e) => setProductname(e.target.value)}
          /><br></br><br></br>
<label>Productid</label>
          <input
            type="text"
           readOnly
           name='productid'
           value={location.state._id}
          /><br></br><br></br>

<label>Company</label>
          <input
            type="text"
           placeholder={location.state.company}
            onChange={(e) => setcompany(e.target.value)}
          /><br></br><br></br>

<label>Creator</label>
          <input
            type="text"
           placeholder={location.state.creator}
            onChange={(e) => setcreator(e.target.value)}
          />

<br></br><br></br>
          <label>details</label>
          <input
            type="text"
         placeholder={location.state.productdetails}
            onChange={(e) => setproductdetails(e.target.value)}
          /><br></br><br></br>

<label>Category</label>
          <input
            type="text"
            placeholder={location.state.category}
            onChange={(e) => setcategory(e.target.value)}
          /><br></br><br></br>

          <label>Price</label>
          <input
            type="number"
            placeholder={location.state.price}
            onChange={(e) => setPrice(e.target.value)}
          /><br></br><br></br>


          <label>shopcode</label>
          <input
            type="text"
            placeholder={location.state.shopcode}
            onChange={(e) => setshopcode(e.target.value)}
          />
<br></br><br></br>
<label>shoplocation</label>
          <input
            type="text"
            placeholder={location.state.shoplocation}
            onChange={(e) => setshoplocation(e.target.value)}
          />

<br></br><br></br>
<button className="btn btn-primary" style={{width:"200px"}} type="submit">
            update
          </button>


            </form>

    </div>
  )
}

export default Updateproduct