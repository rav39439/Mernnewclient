const Restaurantreducer = (state, action) => {
  //console.log(state)
    switch (action.type) {
      case "GET_RESTAURANTS_START":
        return {
          restaurants:[],
          isFetching: true,
          error: false,
        };
      case "GET_RESTAURANTS_SUCCESS":
        return {
          restaurants: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_RESTAURANTS_FAILURE":
        return {
          restaurants:[],
          isFetching: false,
          error: true,
        };
      
     
      case "UPDATE_RESTAURANT_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_RESTAURANT_SUCCESS":
        return {
          restaurants:state.restaurants.map((restaurant)=>restaurant._id===action.payload._id&&action.payload),
          isFetching: false,
          error: false,
        };
      case "UPDATE_RESTAURANT_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      
     
      
    }
  };
  
  export default Restaurantreducer;