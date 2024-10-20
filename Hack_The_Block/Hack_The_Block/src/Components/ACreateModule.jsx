import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/ACreateModule.css";

const ACreateModule = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [mobileOtp, setMobileOtp] = useState(""); // State for mobile OTP input
  const [emailOtp, setEmailOtp] = useState(""); // State for email OTP input
  const [generatedMobileOtp, setGeneratedMobileOtp] = useState(null); // Stores generated mobile OTP
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState(null); // Stores generated email OTP
  const [isInputVerified, setIsInputVerified] = useState(false); // State to track input verification

  const navigate = useNavigate(); // To navigate after OTP verification

  // Generates OTP and logs to console when the page loads
  useEffect(() => {
    const generatedMobile = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit mobile OTP
    const generatedEmail = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit email OTP
    setGeneratedMobileOtp(generatedMobile);
    setGeneratedEmailOtp(generatedEmail);

    console.log("Mobile OTP:", generatedMobile);
    console.log("Email OTP:", generatedEmail);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOtpChange = (e) => {
    if (e.target.name === "mobileOtp") setMobileOtp(e.target.value);
    if (e.target.name === "emailOtp") setEmailOtp(e.target.value);
  };

  const VerifyTheInput = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate fields
    if (!formData.name) newErrors.name = "required";
    if (!formData.dob) newErrors.dob = "required";
    if (!formData.mobile) newErrors.mobile = "required";
    if (!formData.email) newErrors.email = "required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully! Now enter the OTPs.");
      alert("OTPs generated! Check console for mobile and email OTPs.");
      setIsInputVerified(true); // Set the form as verified
    }
  };

  const VerifyOtp = (e) => {
    e.preventDefault();

    // Check if the entered OTPs match the generated ones
    if (parseInt(mobileOtp) === generatedMobileOtp && parseInt(emailOtp) === generatedEmailOtp) {
      alert("OTP Verified Successfully!");
      navigate("/create"); // Navigate to the next page upon successful OTP verification
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  return (
    <div className="flex">
      {!isInputVerified ? (
        // Render the input form if input is not yet verified
        <form onSubmit={VerifyTheInput}>
          {/* .name {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
} */}
          <div className="w-full p-[12px] pl-[20px] pr-[20px] border-[1px] rounded-[4px] flex mb-[8px]" id="name">
            <label className="w-[200px]" htmlFor="name">
              Enter your Name:
            </label>
            <input
              className="bg-black border-b-2 ml-5"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="dob">
            <label className="w-[200px]" htmlFor="dob">
              Enter your Date of birth:
            </label>
            <input
              className="bg-black border-b-2 ml-5"
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>
          <div className="mobile">
            <label className="w-[200px]" htmlFor="Mobile">
              Enter Your Mobile Number:{" "}
            </label>
            <input
              className="bg-black border-b-2 ml-5"
              type="number"
              name="mobile"
              id="Mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>
          <div className="email">
            <label className="w-[200px]" htmlFor="email">
              Enter your Email id:{" "}
            </label>
            <input
              className="bg-black border-b-2 ml-5"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <button type="submit" className="create">
            Create
          </button>
        </form>
      ) : (
        // Render the OTP verification section if input is verified
        <form onSubmit={VerifyOtp} className="otp-section">
          <h2>Verify OTPs</h2>
          <div className="otp">
            <label className="w-[200px]" htmlFor="mobileOtp">
              Enter Mobile OTP:
            </label>
            <input
              className="bg-black border-b-2 ml-5"
              type="number"
              name="mobileOtp"
              id="mobileOtp"
              value={mobileOtp}
              onChange={handleOtpChange}
            />
          </div>
          <div className="otp">
            <label className="w-[200px]" htmlFor="emailOtp">
              Enter Email OTP:
            </label>
            <input
              className="bg-black border-b-2 ml-5"
              type="number"
              name="emailOtp"
              id="emailOtp"
              value={emailOtp}
              onChange={handleOtpChange}
            />
          </div>
          <button type="submit" className="w-full mt-4 border-[1px] rounded-[4px] hover:bg-[#ffffff36]">
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default ACreateModule;
