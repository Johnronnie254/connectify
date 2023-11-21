import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // Update import
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const root = createRoot(document.getElementById("root")); // Use createRoot directly

root.render(<App />);
