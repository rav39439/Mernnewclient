import React, { useContext, useEffect, useState } from 'react'
import { createproduct, deleteproduct, getproduct } from '../ProductContext/productapicalls'
import { ProductContext } from '../ProductContext/ProductContext'

import { useNavigate } from 'react-router';



const Allproducts = (props) => {


  useEffect(() => {
    props.setIsrestaurant(false)
    props.setIsproduct(false)
    props.setisother(true)
  }, [props.Type]);
  

  const navigate = useNavigate();

  const [iscreate,setiscreate]=useState(false)
  const [isupdate,setupdate]=useState(false)

  const {products,dispatch}=useContext(ProductContext)

useEffect(()=>{

  getproduct(dispatch)
},[dispatch])

//console.log(products[0]?.image)
//if(typeof(products[0].images!='undefined')){

 //var mylink="https://localhost:8800/api/images/"+products[0]?.image

//}

 



const createnew=(e)=>{
if(iscreate){

setiscreate(false)
}
else{
setiscreate(true)
}
}


// const handleupdate=(e)=>{
// if(isupdate){

// setupdate(false)
// }
// else{
// setupdate(true)
// }
// }
//------------------------------------creating a new shop--------------------------------------------
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


createproduct(newProduct,dispatch)


};


//-----------------------------------------------------------------------------------------------

function handleupdate(product){



  navigate("/updateproduct",{state:product})
//   e.preventDefault();
//   let filename=""
//   if(file){
//     filename=file.name
//   }

// const updateProduct = {
    
//   productname,
//   price,
//   filename,
//   company,
//   category,
//   sizes,
//   productdetails,
//   creator,
 
//   products,
//   shopcode,
//   shoplocation
  
// };
// if (file) {
//   const data = new FormData();
//   const filename =file.name;
//   data.append("name", filename);
//   data.append("file", file);
 
//   try {
//     await axios.post("/upload", data ,
//     {
//        headers: {
//           token:
//           "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
//         },
//       });
//   } catch (err) {}
// }


// updateproduct(updateProduct,dispatch)


};

  
const handledelete=(id)=>{

  deleteproduct(id,dispatch)
}

//----------------------------------------------------updating a shop---------------------------------







//----------------------------------------------------------------------------------------------------

  return (


<>



<div className="users">

      {
      
      products.map((product,index) => (
        <div className="bg-light border mt-4">
{/* 
          {
typeof(products[0].images)!='undefined'&&
<img src={mylink} className="card-img-top"style={{height:"300px",width:"300px",paddingRight:"30px",paddingTop:"10px"}} alt="..."/>

          } */}

          <p>{product.category}</p>
          <p>{product.company}</p>
          <p>{product.createdAt}</p>
          <p>{product.price}</p>
          <p>{product.productdetails}</p>

          <button className='btn btn-primary' value={product}onClick={()=>handleupdate(product)}>updateproduct</button>
          <button className='btn btn-primary' value={product}onClick={()=>handledelete(product._id)}>deleteproduct</button>

        

{/* isupdate?
<form onClick={handlechange}>

<label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

<label>Productname</label>
          <input
            type="text"
           
            onChange={(e) => setProductname(e.target.value)}
          />
<label>Productid</label>
          <input
            type="text"
           readOnly
           value={products._id}
            onChange={(e) => setProductname(e.target.value)}
          />

<label>Company</label>
          <input
            type="company"
           
            onChange={(e) => setcompany(e.target.value)}
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

<label>Category</label>
          <input
            type="text"
            
            onChange={(e) => setcategory(e.target.value)}
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
<button className="btn btn-primary" style={{width:"200px"}} type="submit">
            update
          </button>

</form>
:"" */}




 </div>



      ))}
    </div>
<button className='btn btn-primary'onClick={createnew}>createshop</button>



{
  iscreate?
  <div className="settings">
    <div className="settingsWrapper">
    <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Productimage Picture</label>
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
 <button className="btn btn-primary" style={{width:"200px"}} type="submit">
            add
          </button>

       
      </form>
   </div>
   </div>
  :
  ""
}
</>


   
  )
}

export default Allproducts