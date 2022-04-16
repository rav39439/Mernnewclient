import Restaurantreducer from '../RestaurantContext/Restaurantreducer';
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  restaurants:[],
  isFetching: false,
  error: false,
};

export const RestaurantContext = createContext(INITIAL_STATE);

export const RestaurantContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Restaurantreducer, INITIAL_STATE);

  console.log(state)

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: state.restaurants,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};