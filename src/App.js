import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import TestSteps from "./screens/testSteps/TestSteps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<TestSteps />} />
      </Routes>
    </Router>
  );
}

export default App;
