import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SwapForm from "pages/SwapForm";
import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SwapForm />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
