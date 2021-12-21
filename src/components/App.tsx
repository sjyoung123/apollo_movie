import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "../routers/Detail";
import { Home } from "../routers/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
