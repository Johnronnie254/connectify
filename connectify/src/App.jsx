import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
