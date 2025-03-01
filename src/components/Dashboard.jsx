import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import StarsCanvas from "../components/canvas/Stars";
import React from "react";
import { setEmail } from '../action';
import { setAuthToken } from '../action';
import { useDispatch } from 'react-redux';
import { useSelector, useStore } from 'react-redux';

const Dashboard = () => {


  const dispatch = useDispatch();
  // Example when retrieving from localStorage
const storedToken = localStorage.getItem('authToken');

if (storedToken) {
  // Set the token in the Redux store
  dispatch(setAuthToken(storedToken));
}


  const store = useStore();
  const state = store.getState();

  console.log('Current Redux State:', state);


  return (
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    
  );
};

export default Dashboard;