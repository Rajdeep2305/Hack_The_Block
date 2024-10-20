import React from "react";
import ACreateEntry from "./ACreateEntry";

const AcreateLogin = () => {
  return (
    <div className="flex justify-evenly items-center h-screen">
      <div>
        <h1 className="font-mono text-[50px] pb-9">Welcome to GURLL</h1>
      </div>
      <ACreateEntry />
    </div>
  );
};

export default AcreateLogin;
