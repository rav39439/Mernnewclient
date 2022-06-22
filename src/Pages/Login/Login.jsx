import { useContext, useState } from "react";
import { login } from "../../components/AuthContext/apiCalls";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import "./login.css";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router';

export default function Login(props) {

console.log(props)

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch,callback);

  

   //console.log(user)

   
    navigate("/Home",{state:""})

    function callback(user){
      console.log("callback is running")
      console.log(props)
      console.log(user)
  props.setuser(user)
    }


  }
  


  return (



  <div className="login wrapper fadeInDown">
      <div className="formContent">
        <div className="fadeIn first">
        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> 
        </div>
     
        <form>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email or phone number"class="fadeIn second"name="login"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="Password" class="fadeIn third"name="login"
            onChange={(e) => setPassword(e.target.value)}
          />

<br></br>
          <br></br>
          <button className="loginButton"class="fadeIn fourth" onClick={handleLogin}>
            Sign In
          </button>
          
         
        </form>
        <br></br>
          <br></br>
        <p>if not user </p>
        <p>
      <Link to= "/Register"className='ml-5'>Regsiter</Link>
      </p>
      <br></br>
          <br></br>
      <br></br>
       
      <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
    </div>

    </div>
  );
}