const ProductReducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS_START":
        return {
          products:[],
          isFetching: true,
          error: false,
        };
      case "GET_PRODUCTS_SUCCESS":
        return {
          products: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_PRODUCTS_FAILURE":
        return {
          products:[],
          isFetching: false,
          error: true,
        };
      
      
      case "CREATE_PRODUCTS_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_PRODUCTS_SUCCESS":
        return {
          products: [...state.products, action.payload],
          isFetching: false,
          error: false,
        };
      case "CREATE_PRODUCTS_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      
      case "UPDATE_PRODUCTS_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPDATE_PRODUCTS_SUCCESS":
        return {
          products:state.products.map((product)=>product._id===action.payload._id&&action.payload),
          isFetching: false,
          error: false,
        };
      case "UPDATE_PRODUCTS_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      
      case "DELETE_PRODUCTS_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_PRODUCTS_SUCCESS":
        return {
          products: state.products.filter((product) => product._id !== action.payload),          
          isFetching: false,
          error: false,
        };
      case "DELETE_PRODUCTS_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      
      
    }
  };
  
  export default ProductReducer;