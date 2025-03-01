    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import { styles } from "../styles";
    import { useNavigate } from "react-router-dom";

    const Modal = ({ isOpen, closeModal }) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        if (confirmNewPassword && e.target.value !== confirmNewPassword) {
        setPasswordMatch(false);
        } else {
        setPasswordMatch(true);
        }
    
        // Send the new password to the server
        fetch('http://localhost:3000/api/chngPass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: e.target.value }), // Send the new password in the request body
        })
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        // Handle the response as needed
        console.log('Password changed successfully:', data);
        useNavigate('/login')
        })
        .catch((error) => {
        console.error('Error changing password:', error);
        // Handle errors or display an alert
        alert('Failed to change password. Please try again.');
        });
        useNavigate('/login')
    };
    
    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
        if (newPassword && e.target.value !== newPassword) {
        setPasswordMatch(false);
        } else {
        setPasswordMatch(true);
        }
    };

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if passwords match before submitting
        if (newPassword === confirmNewPassword) {
        // Passwords match, perform actions here
        // For example, call an API to change the password
        console.log("Passwords match:", newPassword);
        closeModal(); // Close the modal after changing the password
        } else {
        // Passwords do not match, handle accordingly
        console.log("Passwords do not match");
        // You can display an error message or handle it as needed
        }
    };

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black-100 bg-opacity-75"
        onClick={closeModal}
        >
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            style={{ width: '50%' }}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[80px] items-center">
            <div className="text-white">
                <h2 className={styles.sectionHeadText}>Change Password</h2>
                <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input
                    type="password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className="bg-tertiary py-4 px-6  text-white rounded-lg outline-none border-none font-medium"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={handleConfirmNewPasswordChange}
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${!passwordMatch && 'border-red-500'}`}
                    required
                    />
                    {!passwordMatch && <p className="text-red-500 text-xs mt-1">Passwords do not match</p>}
                </div>
                <button type="submit" className="bg-tertiary py-3 px-8  rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary" style={{ marginRight: '20px' }}>
                    Change Password
                </button>
                <button onClick={closeModal} className="bg-tertiary py-3 px-8 pl-10 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                    Cancel
                </button>
                </form>
            </div>
            </div>
        </motion.div>
        </motion.div>
    );
    };

    export default Modal;
