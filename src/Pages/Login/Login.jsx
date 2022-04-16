import { useContext, useState } from "react";
import { login } from "../../components/AuthContext/apiCalls";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import "./login.css";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router';

export default function Login() {



  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);

    navigate("/",{state:""})


  };
  return (
    <div className="login"style={{color: "red",position:"relative",fontFamily:"fantasy"}}>
      <div className="top">
        <div className="wrapper">
          
        </div>
      </div>
<div className="container" style={{alignItems:"center",width:"auto",height:"auto"}}>
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>

        <p>if not user </p>
        <p>
      <Link to= "/Register"className='ml-5'>Regsiter</Link>
      </p>
      </div>
    </div>
  );
}