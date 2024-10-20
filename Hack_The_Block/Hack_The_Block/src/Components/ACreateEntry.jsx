import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CSS/ACreateEntry.css";

const ACreateEntry = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const pin = event.target["pin"].value;

    // Basic check to ensure PIN is entered
    if (pin) {
      // You can add logic to verify the pin here if needed

      // Navigate to the /body page after successful PIN entry
      navigate("/body");
    } else {
      alert("Please enter a valid PIN.");
    }
  };

  return (
    <div>
      <h1>
        Hey, <span>XYZ</span>
      </h1>
      <form onSubmit={handleSubmit} method="get">
        <div className="pin">
          <label htmlFor="pin" className="mr-3">
            Enter PIN:
          </label>
          <input
            className="bg-black border w-[240px] h-[30px] m-3 space-x-8"
            type="number"
            name="pin"
            id="pin"
            required // Make the input required
          />
        </div>
        <button type="submit" className="continue">
          Continue
        </button>
      </form>
      <div className="hover:underline mt-9">
        <a href="/login">Go to Create account</a>
      </div>
    </div>
  );
};

export default ACreateEntry;
