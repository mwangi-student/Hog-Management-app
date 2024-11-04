import React from "react";
import { Container } from "react-bootstrap";
import HogDetails from "./HogDetails";

const HogCard = ({ hog, onToggleDetails, showDetails, onHide }) => {
  const toggleHogDetails = (e) => {
    e.stopPropagation();
    onToggleDetails(hog.name);
  };

  const handleHide = (e) => {
    e.stopPropagation(); // Prevent triggering parent onClick
    onHide(hog.name); // Hide this hog
  };

  return (
    <Container className="my-4">
      <div className="card mb-3">
        <img
          src={hog.image}
          className="card-img-top"
          alt={hog.name}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{hog.name}</h5>
          <p className="card-text">{hog.specialty}</p>
          <div className="button-container d-flex justify-content-between">
            <button
              onClick={toggleHogDetails}
              style={{ backgroundColor: "blue", color: "white" }}
              className="btn"
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            <button
              onClick={handleHide}
              style={{ backgroundColor: "green", color: "white" }}
              className="btn"
            >
              Hide Hog
            </button>
          </div>
          {showDetails && <HogDetails hog={hog} />}
        </div>
      </div>
    </Container>
  );
};

export default HogCard;
