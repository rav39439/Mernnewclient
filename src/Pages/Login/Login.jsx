import { useContext, useState } from "react";
import { login } from "../../components/AuthContext/apiCalls";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import "./login.css";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router';

export default function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch, callback);
    navigate("/Home", { state: "" })
    function callback(user) {
      props.setuser(user)
    }
  }

  return (
    <div className="login wrapper fadeInDown border bg-light" style={{ marginLeft: '200px' }} >
      <div className="formContent" style={{ paddingLeft: '100px', marginTop: '40px' }}>
        <div className="fadeIn first">
          <img src="https://cdn.pixabay.com/photo/2021/11/02/07/20/autumn-6762572__340.jpg" id="icon" alt="User Icon" />
        </div>

        <form >
          <h1 style={{ fontFamily: "monospace", fontSize: "40px" }}>Login</h1>
          <input
            type="email"
            placeholder="Email or phone number" class="fadeIn second" name="login"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="password"
            placeholder="Password" class="fadeIn third" name="login"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className="loginButton" class="fadeIn fourth" onClick={handleLogin}>
            Sign In
          </button>
        </form>
        <br></br>
        <br></br>
        <p style={{ fontFamily: "cursive" }}>If not user </p>
        <p>
          <Link to="/Register" className='ml-5'>Regsiter</Link>
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}