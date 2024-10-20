//rafce

import React from "react";
import "./CSS/Profile.css";
const Profile = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="profile">
        <div className="flex justify-center h-[300px] items-center"><div className="photo"></div></div>
        <div className="details">
        <div className="flex justify-start">
            <p>UserName:</p>
            <p> 
              <span className="ml-5 text-[20px] font-mono">x286sa48ae62yz</span>
            </p>
          </div>
          <div className="flex justify-start">
            <p>Name:</p>
            <p>
              <span className="ml-5 text-[20px] font-mono">xyz</span>
            </p>
          </div>
          <div className="flex">
            <p>e-mail:</p>
            <p>
              <span className="ml-5 text-[20px] font-mono">xyz123@gmail.com</span>
            </p>
          </div>
          <div className="flex justify-start">
            <p>Mobile Number:</p>
            <p>
              <span className="ml-5 text-[20px] font-mono">+91 9856321475</span>
            </p>
          </div>
          <div className="flex justify-start">
            <p>D.O.B.:</p>
            <p>
              <span className="ml-5 text-[20px] font-mono">12/80/2001</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
