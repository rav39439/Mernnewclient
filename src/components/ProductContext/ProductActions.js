export const getproductStart = () => ({
    type: "GET_PRODUCTS_START",
  });
  export const getproductSuccess = (products) => ({
    type: "GET_PRODUCTS_SUCCESS",
    payload: products,
  });
  export const getproductFailure = () => ({
    type: "GET_PRODUCTS_FAILURE",
  });
  
export const createproductStart = () => ({
    type: "CREATE_PRODUCTS_START",
  });
  export const createproductSuccess = (product) => ({
    type: "CREATE_PRODUCTS_SUCCESS",
    payload: product,
  });
  export const createproductFailure = () => ({
    type: "CREATE_PRODUCTS_FAILURE",
  });
  
export const updateproductStart = () => ({
    type: "UPDATE_PRODUCTS_START",
  });
  export const updateproductSuccess = (product) => ({
    type: "UPDATE_PRODUCTS_SUCCESS",
    payload: product,
  });
  export const updateproductFailure = () => ({
    type: "UPDATE_PRODUCTS_FAILURE",
  });
  
export const deleteproductStart = () => ({
    type: "DELETE_PRODUCTS_START",
  });
  export const deleteproductSuccess = (id) => ({
    type: "DELETE_PRODUCTS_SUCCESS",
    payload: id,
  });
  export const deleteproductFailure = () => ({
    type: "DELETE_PRODUCTS_FAILURE",
  });
  

