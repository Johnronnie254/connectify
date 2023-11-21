import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landingpage.css";
import Services from "./Services";

const LandingPage = () => {
  const navigate = useNavigate(); // Use useHistory instead of History
  function handlePage() {
    // Renaming the function to follow camelCase convention
    navigate("/Services");
  }
  return (
    <div className="containerstyle">
      <h1>Welcome to Connect</h1>
      <p>
        New in an area? Worry not. We make it easy for you to connect with all
        the service providers in your neighborhood
      </p>
      <button type="button" className="btn btn-success" onClick={handlePage}>
        Get Our Services
      </button>
    </div>
  );
};

export default LandingPage;
