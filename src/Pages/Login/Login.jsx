import { useContext, useState } from "react";
import { login } from "../../components/AuthContext/apiCalls";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import "./login.css";

export default function Login() {





  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login"style={{color: "red",position:"relative",fontFamily:"fantasy"}}>
      <div className="top">
        <div className="wrapper">
          
        </div>
      </div>
<div className="container" style={{display:"flex",alignItems:"center",width:"auto",height:"auto"}}>
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
      </div>
    </div>
  );
}