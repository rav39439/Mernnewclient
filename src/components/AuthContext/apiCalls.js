import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch,callback) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://mernnewclientapi.onrender.com/api/auth/login", user);
  
    dispatch(loginSuccess(res.data));
    callback(res.data)
   
  } catch (err) {
    dispatch(loginFailure());
  }
};