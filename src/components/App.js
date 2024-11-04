import React, { useState } from "react";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import hogsData from "../porkers_data"; 
import Nav from "./Nav";
import "semantic-ui-css/semantic.min.css";
import "../index.css";

const HogsApp = () => {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [expandedHogs, setExpandedHogs] = useState(new Set());
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const handleToggleDetails = (hogName) => {
    setExpandedHogs((prev) => {
      const newSet = new Set(prev);
      newSet.has(hogName) ? newSet.delete(hogName) : newSet.add(hogName);
      return newSet;
    });
  };

  const handleHideHog = (hogName) => {
    setHiddenHogs((prev) => new Set([...prev, hogName]));
  };

  const handleAddHog = (newHog) => {
    setHogs((prev) => [...prev, newHog]);
  };

  const filteredAndSortedHogs = hogs
    .filter((hog) => !hiddenHogs.has(hog.name))
    .filter((hog) => !showGreasedOnly || hog.greased)
    .sort((a, b) =>
      sortBy === "name" ? a.name.localeCompare(b.name) : a.weight - b.weight
    );

  return (
    <div className="App">
      <h1 className="headerText">Hog Management System</h1>

      <div className="navWrapper">
        <div className="ui buttons mb-6">
          <button
            onClick={() => setShowGreasedOnly(!showGreasedOnly)}
            className={`ui button ${showGreasedOnly ? "green" : "grey"}`}
            aria-pressed={showGreasedOnly}
          >
            {showGreasedOnly ? "Show All" : "Show Greased Only"}
          </button>
          <Nav />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ui dropdown"
            aria-label="Sort by"
          >
            <option value="name">Sort by Name</option>
            <option value="weight">Sort by Weight</option>
          </select>
        </div>
      </div>

      <HogForm onAddHog={handleAddHog} />

      <div className="ui grid">
        {filteredAndSortedHogs.length > 0 ? (
          filteredAndSortedHogs.map((hog) => (
            <div className="four wide column" key={`${hog.name}-${hog.weight}`}>
              <HogCard
                hog={hog}
                showDetails={expandedHogs.has(hog.name)}
                onToggleDetails={handleToggleDetails}
                onHide={handleHideHog}
              />
            </div>
          ))
        ) : (
          <div className="sixteen wide column">
            <p>No hogs to display.</p>
            <button
              onClick={() => setShowGreasedOnly(false)}
              className="ui button"
            >
              Add Hog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HogsApp;
