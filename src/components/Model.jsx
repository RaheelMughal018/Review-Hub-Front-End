import React, { useState } from 'react';
import { predict } from '../services/api';
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Update with your server URL

// Function to make a prediction request to the server
export const predict = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, { data });
    return response.data.predictions;
  } catch (error) {
    console.error('Prediction error:', error);
    throw new Error('Prediction failed');
  }
};
const PredictionForm = () => {
  const [inputData, setInputData] = useState('');
  const [predictions, setPredictions] = useState(null);

  const handlePredict = async () => {
    try {
      const result = await predict(inputData);
      setPredictions(result);
    } catch (error) {
      console.error('Prediction error:', error.message);
    }
  };

  return (
    <div>
      <textarea
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter input data..."
        rows={4}
        cols={50}
      />
      <button onClick={handlePredict}>Predict</button>
      {predictions && (
        <div>
          <h3>Predictions:</h3>
          <pre>{JSON.stringify(predictions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;