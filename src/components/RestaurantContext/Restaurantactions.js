

export const getrestaurantStart = () => ({
  type: "GET_RESTAURANTS_START",
});
export const getrestaurantSuccess =(restaurants) => ({
  type: "GET_RESTAURANTS_SUCCESS",
  payload:restaurants,
});
export const getrestaurantFailure = () => ({
  type: "GET_RESTAURANTS_FAILURE",
});



export const updaterestaurantStart = () => ({
    type: "UPDATE_RESTAURANT_START",
  });
  export const updaterestaurantSuccess = (restaurant) => ({
    type: "UPDATE_RESTAURANT_SUCCESS",
    payload:restaurant,
  });
  export const updaterestaurantFailure = () => ({
    type: "UPDATE_RESTAURANT_FAILURE",
  });
  