import React from "react";
import ACreate from "./ACreate";
import AcreateLogin from "./AcreateLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const A = () => {
  return (
      <div className="text-white">
        <Routes>
          <Route path="/" element={<AcreateLogin />}/>
        </Routes>
      </div>
  ); 
};

export default A;
