import axios from "axios";
import { getproductFailure, getproductStart, getproductSuccess,createproductStart,createproductFailure,createproductSuccess, 
updateproductFailure,updateproductStart,updateproductSuccess,deleteproductFailure,deleteproductStart
,deleteproductSuccess} from './ProductActions';

export const getproduct = async (dispatch) => {
  dispatch(getproductStart());
  try {
    const res = await axios.get("/product/",
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });

    dispatch(getproductSuccess(res.data));
  } catch (err) {
    dispatch(getproductFailure());
  }
};



export const createproduct = async (product,dispatch) => {
  dispatch(createproductStart());
  try {
    const res = await axios.post("product/",product,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });

    dispatch(createproductSuccess(res.data));
  } catch (err) {
    dispatch(createproductFailure());
  }
};


export const updateproduct = async (product,dispatch) => {
  dispatch(updateproductStart());
  try {
    const res = await axios.put("product/",product,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });

    dispatch(updateproductSuccess(res.data));
  } catch (err) {
    dispatch(updateproductFailure());
  }
};
export const deleteproduct = async (id,dispatch) => {
  dispatch(deleteproductStart());
  try {
    const res = await axios.delete(`product/${id}`,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });

    dispatch(deleteproductSuccess(id));
  } catch (err) {
    dispatch(deleteproductFailure());
  }
};