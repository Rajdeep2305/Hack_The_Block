import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ACreateModule from "./ACreateModule";


const ACreate = () => {
  return (
    <div className="flex justify-evenly items-center h-screen text-white">
      <div>
        <h1 className="font-mono text-[50px] pb-9">Welcome to GURLL</h1>
        <p className="font-serif text-[30px]">
          Hey You looks new on this platform.
        </p>
        <p className="text-[30px]">
          So, create an account and verify you for eligible.
        </p>
      </div>
        <Routes>
          <Route path="/" element={<ACreateModule />}/>
        </Routes>
    </div>
  );
};

export default ACreate;