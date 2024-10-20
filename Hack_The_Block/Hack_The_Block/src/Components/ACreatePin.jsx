import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CSS/ACreatePin.css";

const ACreatePin = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const pin = event.target["create-pin"].value;
    const confirmPin = event.target["confirm-pin"].value;
    const password = event.target["create-password"].value;
    const confirmPassword = event.target["confirm-password"].value;

    // Basic validation to check if the pin and password match
    if (pin === confirmPin && password === confirmPassword) {
      // Add any additional logic like saving data or API call here
      console.log("PIN and Password created successfully!");

      // Navigate to the homepage after successful submission
      navigate("/");
    } else {
      alert("Pins or passwords do not match!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-[250px] w-[400px]">
        <form onSubmit={handleSubmit} method="get">
          <div className="create-pin">
            <label className="w-[200px]" htmlFor="create-pin">Create PIN:</label>
            <input
              className="bg-black border-b-2 ml-5"
              type="number"
              name="create-pin"
              id="create-pin"
              required
            />
          </div>
          <div className="confirm-pin">
            <label className="w-[200px]" htmlFor="confirm-pin">Confirm PIN:</label>
            <input
              className="bg-black border-b-2 ml-5"
              type="number"
              name="confirm-pin"
              id="confirm-pin"
              required
            />
          </div>
          <div className="create-pin">
            <label className="w-[200px]" htmlFor="create-password">Create Password:</label>
            <input
              className="bg-black border-b-2 ml-5"
              type="password"
              name="create-password"
              id="create-password"
              required
            />
          </div>
          <div className="confirm-pin">
            <label className="w-[200px]" htmlFor="confirm-password">Confirm Password:</label>
            <input
              className="bg-black border-b-2 ml-5"
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
          </div>
          <button type="submit" className="confirm">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ACreatePin;
