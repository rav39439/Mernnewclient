import axios from "axios";
import {updaterestaurantFailure,updaterestaurantStart,updaterestaurantSuccess,getrestaurantStart,
getrestaurantSuccess,getrestaurantFailure} from './Restaurantactions';


export const getrestaurant = async (dispatch) => {
  dispatch(getrestaurantStart());

  ///console.log("the updaterestaurant is runningn")
  try {
    const res = await axios.get("restaurants/",{
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },

        
      });
//console.log(res.data)
    dispatch(getrestaurantSuccess(res.data));
  } catch (err) {
    dispatch(getrestaurantFailure());
  }
};



export const updaterestaurant = async (restaurant,dispatch) => {
  dispatch(updaterestaurantStart());

  
  try {
  

    const res= await axios.get(`restaurants/getbycode?${restaurant.name? "restname="+restaurant.name:""}&${restaurant.restaurantcode?"restcode="+restaurant.restaurantcode:""}`,
    {
       headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })

      console.log("the updated restaurant"+restaurant.name)
      console.log("the updated restaurant"+restaurant.restaurantcode)
      console.log(res.data)
      console.log(res.data)
    dispatch(updaterestaurantSuccess(res.data));
  } catch (err) {
    dispatch(updaterestaurantFailure());
  }
};
