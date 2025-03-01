import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


// Define an action to store the CSV data in Redux
const storeCSVData = (csvData) => ({
  type: 'STORE_CSV_DATA',
  payload: csvData,
});

const sendScraperRequest = async (videoURL, dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/api/scrape_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ videoURL }),
    });

    if (!response.ok) {
      throw new Error("Failed to perform analysis");
    }

    // Get the CSV data from the response
    const csvData = await response.text();

    console.log("GOING TO STORE data")
    console.log(csvData)

    // Dispatch an action to store the CSV data in Redux
    dispatch(storeCSVData(csvData));

    console.log("CSV data stored in Redux successfully");
  } catch (error) {
    console.error("Error sending scraper request:", error);
    throw new Error(error.message);
  }
};






// Define the main page component
const MainPage = ({ showAlternative }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [form, setForm] = useState({
    videoURL: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (form.videoURL.trim() !== "") {
      setLoading(true);
  
      try {
        await sendScraperRequest(form.videoURL,dispatch);
        navigate('/graph');
      } catch (error) {
        console.error("Error sending analysis request:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (showAlternative) {
    // Return alternative component if needed
    return <AlternativeMainPage />;
  }

  return (
    <div className={`bg-hero-pattern xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 h-[700px] overflow-hidden`}>
      <Navbar />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-300 p-8 rounded-2xl"
        style={{ marginLeft: '20px', marginTop: '30px' }}
      >
        <h3 className={styles.sectionHeadText}>YT Sentiment</h3>
        <p className={styles.sectionSubText} style={{ fontSize: '30px' }}>Please Enter Your Video URL</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Video URL</span>
            <input
              type="text"
              name="videoURL"
              value={form.videoURL}
              onChange={handleChange}
              placeholder="Enter your Video URL"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading} 
          >
            {loading ? "Please wait..." : "Perform Analysis"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default MainPage;
