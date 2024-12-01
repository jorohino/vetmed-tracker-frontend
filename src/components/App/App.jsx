// External Library + Context Imports
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// Utility Imports

// Primary Component Imports
import Main from "../Main/Main";
import Data from "../Data/Data";
import Footer from "../Footer/Footer";
// Modal Component Imports

// Style Imports

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
