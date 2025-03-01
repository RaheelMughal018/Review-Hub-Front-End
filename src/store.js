// store.js
import { configureStore } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  email: "",
  authToken: null, // Add the authToken property
  csvData: "", // Add the csvData property to store CSV data
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_AUTH_TOKEN":
      return { ...state, authToken: action.payload };
    case "STORE_CSV_DATA": // Define a new action type to store CSV data
      return { ...state, csvData: action.payload };
    default:
      return state;
  }
};

// Create Redux store
const store = configureStore({
  reducer,
});

export default store;
