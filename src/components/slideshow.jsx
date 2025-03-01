import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import styled, { keyframes } from 'styled-components'; // Import styled-components
import { motion } from "framer-motion";

// Define keyframe for fading animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: auto;
`;

const Fade = styled.div`
  position: absolute;
  width: 100%;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Comment = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
`;

function Slideshow({ label, data }) {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0); // State to keep track of current comment index

  // Function to count occurrences of each annotation
  const countAnnotations = () => {
    const counts = {};
    data.forEach(item => {
      counts[item.annotation] = (counts[item.annotation] || 0) + 1;
    });
    return counts;
  };

  const filteredComments = data.filter(item => item.annotation === label);

  const nextComment = () => {
    setCurrentCommentIndex(currentIndex => (currentIndex + 1) % filteredComments.length);
  };

  useEffect(() => {
    const interval = setInterval(nextComment, 3000);
    return () => clearInterval(interval);
  }, [filteredComments]);

  return (
    <SlideshowContainer>
      <motion.div className="bg-tertiary w-full green-pink-gradient w-[500px] p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {filteredComments.length > 0 && (
            <Fade className="fade">
              <Comment>{filteredComments[currentCommentIndex].comment}</Comment>
            </Fade>
          )}
          {filteredComments.length === 0 && <p>Loading data...</p>}
        </div>
      </motion.div>
    </SlideshowContainer>
  );
}

export default Slideshow;