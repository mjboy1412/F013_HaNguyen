import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SwapForm from "pages/SwapForm";
import Header from "components/layout/Header";
import { StyledApp } from "./styles";

const App = () => (
  <StyledApp className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SwapForm />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  </StyledApp>
);

export default App;
