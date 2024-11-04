import React, { useState } from "react";
import "./HogForm.css";

const HogForm = ({ onAddHog }) => {
  const [newHog, setNewHog] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHog((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(newHog);
    setNewHog({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      image: "",
    }); // Reset form
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column w-50 border rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newHog.name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={newHog.specialty}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={newHog.weight}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            name="greased"
            checked={newHog.greased}
            onChange={handleChange}
            id="checkbox"
          />
          Greased
        </label>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newHog.image}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          Add Hog
        </button>
      </form>
    </div>
  );
};

export default HogForm;
