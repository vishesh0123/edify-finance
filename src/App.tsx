import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import Registration from "./components/Registration";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Student from "./components/Student";
import Dapp from "./components/Dapp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Registration />} />
        <Route path="student" element={<Student />} />
        <Route path="dapp" element={<Dapp />} />
      </Routes>
    </>
  );
}

export default App;
