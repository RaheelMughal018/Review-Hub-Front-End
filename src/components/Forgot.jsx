import herobg from '../assets/herobg.png';
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar';
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import Modal from "./Modal";

const Forgot = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(""); 
  const [comp, setComp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim()) {
      alert('Please enter your email.');
      return;
    }
    fetch('http://localhost:3000/api/frpass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: form.email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setComp(data.verificationCode);  // Assuming the response contains a verification code
      })
      .catch((error) => {
        console.error('Error fetching verification code:', error);
        alert('Failed to fetch verification code.');
      });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowVerification(true);
    }, 1000);
  };

  const handleVerificationChange = (e) => {
    setVerificationCode(e.target.value);
  };
  const handleVerify = () => {
    if (verificationCode == comp) {
      setIsModalOpen(true);
    } else {
      alert('Incorrect verification code.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover' }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
          style={{ marginLeft: '20px', marginTop: '70px' }}
        >
          <div>
            <h3 className={styles.sectionHeadText}>
              Review<span className="text-[#915EFF]">HUB</span>
            </h3>
            <p className={styles.sectionSubText} style={{ fontSize: '30px' }}>
              Forgot password?
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Enter your Email</span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
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
                  <a href="/signup" className="text-blue-500 hover:underline pl-10">
                    Don't have an account?
                  </a>
                </span>
              </span>
            </form>

            {/* Verification code slot */}
            {showVerification && (
              <div className="bg-tertiary rounded-lg p-4 mt-4">
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter verification code</span>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={handleVerificationChange}
                    placeholder="Verification Code"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <button
                  onClick={handleVerify}
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-3"
                >
                  Verify
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Forgot;
