import React from 'react';
import './CSS/Body.css';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="body-container"> {/* Renamed class to avoid conflicts */}
        <div className="name">
          <h1 className="w-full">GRULL</h1> 
          {/* Pass a function to onClick for navigation */}
          <div className="logo" onClick={() => navigate('/profile')}>P</div>
        </div>
        <div className="main">
          <div className="username">
            <span>XYZ</span>
          </div>
          <div className="token">
            <span>0</span> Token
          </div>
          <div className="option">
            <div className="buy">Buy</div>
            <div className="withdraw">Withdraw</div>
          </div>
          <div className="choice">
            <div className="history">History</div>
            <div className="vote" onClick={() => navigate('/voting')}>Vote</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
