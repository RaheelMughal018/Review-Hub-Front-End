import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Contacto = () => {
  return (
    <div style={{ position: "relative" }}>
        <Navbar/>
        <Contact/>
    </div>
   
  );
};

export default Contacto;
