import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

import StarsCanvas from "./canvas/Stars";
import { useSelector, useStore } from "react-redux";
import { toast } from "react-toastify";

const TwoFA = () => {
  const navigate = useNavigate();

  const store = useStore();
  const state = store.getState();

  console.log("Current Redux State:", state.email);

  const SendEmail = state.email;

  const formRef = useRef();
  const [form, setForm] = useState({
    code: "", // Update the form fields as needed
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/users/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: SendEmail }),
      });
      // console.log("🚀 ~ handleSubmit ~ response:", response)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      

      setLoading(false);

      // Compare the entered code with the two_FA_key
      if (form.code === data[0]?.two_FA_key) {
        toast.success("Code is correct! Redirecting...");
        navigate("/");
      } else {
        
        toast.error("Code is incorrect! Please Try Again.");
      }

      // Reset the form fields
      setForm({
        code: "",
        // Add other form fields if needed
      });
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);
      toast.error("Something went wrong.",error);
    }
  };

  return (
    <div
      className={`xl:mt-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <StarsCanvas />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        style={{ marginBottom: "3%" }}
      >
        <h3 className={styles.sectionHeadText}>Review HUB</h3>
        <p className={styles.sectionSubText} style={{ fontSize: "30px" }}>
          Two Factor Authentication
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Enter the code in the space given below
            </span>
            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="Code"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Please wait..." : "Verify"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default TwoFA;
