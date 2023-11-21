import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
//import ServiceContainer from "./components/ServiceContainer";
import Services from "./components/Services"; // Update import
import Utilities from "./components/utilities"; // Update import

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Services" element={<Services />}>
            <Route path="utilities" element={<Utilities />} />
          </Route>
          {/* Add other Route components for different paths */}
        </Routes>
      </>
    </Router>
  );
};

export default App;
