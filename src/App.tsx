import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditGiftCard from "./pages/EditGiftCard";
import PreviewAndPay from "./pages/PreviewAndPay";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditGiftCard />} />
        <Route path="/preview" element={<PreviewAndPay />} />
      </Routes>
    </Router>
  );
};

export default App;
