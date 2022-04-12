import React from 'react'
import { useContext, useState } from "react";
import axios from "axios";
import "./register.css";
axios.defaults.baseURL = "http://localhost:8800/api"





const Register = () => {

const [file, setFile] = useState(null);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [cart, setcart] = useState([]);
const [isAdmin, setisAdmin] = useState("");


const handleSubmit = async (e) => {

    e.preventDefault();
let filename=""
  if(file){
    filename=file.name
  }
    const newUser = {
   
      username,
      password,
      email,
      filename,
      cart,
      isAdmin
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    console.log(newUser)
    try {
      const res = await axios.post("/auth/",newUser );
     
      console.log(res.data)
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
          <label>Username</label>
          <input
            type="text"
            placeholder={username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <label>Email</label>
          <input
            type="email"
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />



          <label>Password</label>
          <input
            type="password"
            placeholder={password}
            onChange={(e) => setPassword(e.target.value)}
          />
 <button className="settingsSubmit" style={{width:"200px"}}type="submit">
            Update
          </button>

         
        </form>
     
      
   
  

    </div>
    </div>
    </>
  )
}
export default Register

