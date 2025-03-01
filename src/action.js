// actions.js

// Action creator to set email
export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  payload: email,
});

// Action creator to set authentication token
export const setAuthToken = (token) => ({
  type: 'SET_AUTH_TOKEN',
  payload: token,
});

// Action creator to store CSV data
export const storeCSVData = (csvData) => ({
  type: 'STORE_CSV_DATA',
  payload: csvData,
});
