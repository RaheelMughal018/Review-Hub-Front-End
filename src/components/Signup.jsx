import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { Link } from 'react-router-dom';
import { slideIn } from "../utils/motion";
import StarsCanvas from "./canvas/Stars";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../action';
import Lighty from "./GlowingCursor";

const Signup = () => {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const navigate = useNavigate();

  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('http://localhost:3000/api/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(form),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {

    // Store email in Redux state
   dispatch(setEmail(form.email));
   navigate('/twofa');
    // setLoading(false);
    // alert("Thank you. I will get back to you as soon as possible.");

    // setForm({
    //   twoFA: "",
    // });
  })
  .catch((error) => {
    setLoading(false);
    console.error('Error:', error);
    alert("Something went wrong.");
  });
 };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <StarsCanvas/>
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        style={{ marginLeft: '20px' ,marginTop:'0px'}}
      >
      <h3 className={styles.sectionHeadText}>Review<span className="text-[#915EFF]">HUB</span></h3>
        <p className={styles.sectionSubText}  style={{fontSize:'30px'}}>Sign Up</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Please wait..." : "Sign Up"}
          </button>
        </form>
      </motion.div>

      <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  style={{ position: 'relative' }}
>
  <Link to="/"> 
    <EarthCanvas />
    
  </Link>
  <p 
      style={{
        position: 'absolute',
        bottom: '10px', // Adjust as needed for positioning
        left: '10px', // Adjust as needed for positioning
        margin: 0,
        color: 'rgb(91, 113, 225)', // Set text color if needed
      }}
    >
      Click on the Earth to go back home
    </p>
</motion.div>
    </div>
  );
};

export default Signup;
