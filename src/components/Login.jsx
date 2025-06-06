import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { Tech } from "./canvas";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
import { slideIn } from "../utils/motion";
import StarsCanvas from "../components/canvas/Stars";
import { useNavigate } from "react-router-dom";
import { setEmail } from "../action";
import { setAuthToken } from "../action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // Parse the JSON response (even on error responses)
    const data = await response.json();

    if (!response.ok) {
      // Handle different error codes with appropriate messages
      if (response.status === 401) {
        toast.error(data.error || "Invalid email or password.");
      } else {
        toast.error(data.error || "Login failed. Please try again.");
      }
      return;
    }

    // Extract the auth token from the response
    const authToken = data?.token;

    if (authToken) {
      // Store token in preferred storage
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("Email", form.email);

      // Dispatch Redux actions
      dispatch(setEmail(form.email));
      dispatch(setAuthToken(authToken));

      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Token not found in the response");
    }
  } catch (error) {
    console.log("🚀 ~ handleSubmit ~ error:", error);
    toast.error(error.message || "Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <StarsCanvas />

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-8 rounded-2xl"
        style={{ marginLeft: "20px", marginTop: "70px" }}
      >
        <div>
          <h3 className={styles.sectionHeadText}>
            Review<span className="text-[#915EFF]">HUB</span>
          </h3>
          <p className={styles.sectionSubText} style={{ fontSize: "30px" }}>
            Login
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-8"
          >
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
            <span>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Please wait..." : "Login"}
              </button>
              <span className="text-white font-medium mb-4 pl-10">
                <span>
                  <span className="text-white font-medium mb-4">
                    <a
                      href="/forgot"
                      className="text-blue-500 hover:underline pl-10"
                    >
                      Forgot password?
                    </a>
                  </span>
                </span>
                <a
                  href="/signup"
                  className="text-blue-500 hover:underline pl-10"
                >
                  Don't have an account?
                </a>
              </span>
            </span>
            <span className="text-white font-medium mb-4 pl-10">
              Click on Earth to return to home{" "}
            </span>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        style={{ position: "relative" }}
      >
        <Link to="/">
          <EarthCanvas />
        </Link>
      </motion.div>
    </div>
  );
};

export default Login;
