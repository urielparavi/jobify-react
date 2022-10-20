import React, { useReducer, useContext } from "react";

import reducer from "./reducer";

import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};
// We set the hook, because if we not  going to have it, in every component we will to do 2 things
//1 - import useContext, 2 - import AppContext like useContext(AppContext) to have access to our value
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
