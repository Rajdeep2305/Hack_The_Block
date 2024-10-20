import React from "react";
import "./CSS/ACreateVerify.css";
const ACreateVerify = () => {
  return (
    <div className="">
      <form method="get">
        <div className="email-otp">
          <label className="w-[200px]" htmlFor="email-otp">Verify email via OTP:</label>
          <input className="bg-black border-b-2 ml-5" type="number" name="email-otp" id="email-otp" />
        </div>
        <div className="mobile-otp"> 
          <label className="w-[200px]" htmlFor="mobile-otp">Verify number via OTP:</label>
          <input className="bg-black border-b-2 ml-5" type="number" name="mobile-otp" id="mobile-otp" />
        </div>
        <button type="submit" className="verify">
          Verify
        </button>
      </form>
    </div>
  );
};

export default ACreateVerify;
