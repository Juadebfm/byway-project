import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import TeachersPage from "./pages/TeachersPage";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-inter overflow-x-hidden scroll-smooth">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/teach-on-byway" element={<TeachersPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
