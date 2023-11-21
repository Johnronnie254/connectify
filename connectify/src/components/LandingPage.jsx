import React, { useState } from "react";
//import ServiceContainer from "./ServicesContainer";
import "./Landingpage.css";

const LandingPage = () => {
  return (
    <div className="containerstyle">
      <h1>Welcome to Connect</h1>
      <p>
        New in an area? Worry not. We make it easy for you to connect with all
        the service providers in your neighborhood
      </p>
      <button type="button" className="btn btn-success">
        Get Our Services
      </button>
    </div>
  );
};

export default LandingPage;
