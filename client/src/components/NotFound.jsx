import React from "react";
import { Link } from "react-router-dom";

const notFoundStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f8d7da",
  color: "#721c24",
  border: "1px solid #f5c6cb",
  borderRadius: "4px",
  margin: "20px auto",
  maxWidth: "400px",
};

const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button style={{ marginTop: "10px", padding: "8px 16px" }}>
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
