import React, { lazy, Suspense } from "react";
import Welcome from "./Components/Welcome";
import ACreate from "./Components/ACreate";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import A from "./Components/A";
import Body from "./Components/Body";
import Profile from "./Components/Profile";
import ACreatePin from "./Components/ACreatePin";
import Voting from "./Components/Voting";
import Buy from "./Components/Buy";

// const Count = lazy(()=> import("./Components/Welcome"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Welcome />}> 
        <Routes>
          <Route path="*" element={<A />}/>
          <Route path="/login" element={<ACreate />}/>
          <Route path="/create" element={<ACreatePin />}/>
          <Route path="/body" element={<Body/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/voting" element={<Voting/>}/>
          <Route path="/buy" element={<Buy/>}/>
        </Routes>
        {/* <Welcome/> */}
      </Suspense>
    </Router>
  );
};

export default App;
