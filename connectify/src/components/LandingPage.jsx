import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  function handlePage() {
    navigate("Services"); // Navigate to the Services page
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
