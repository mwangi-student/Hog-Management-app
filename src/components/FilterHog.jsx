import React from 'react';
import PropTypes from 'prop-types';

function FilterHog({
  sortBy,
  onChangeSortBy,
  showGreased,
  onChangeShowGreased
}) {
  function handleSortChange(event) {
    onChangeSortBy(event.target.value);
  }

  function handleToggleGreased(event) {
    onChangeShowGreased(event.target.checked);
  }

  return (
    <div className="filterWrapper">
      <div className="ui menu">
        <div className="ui item">
          <label htmlFor="sort">Sort by </label>
        </div>
        <div className="ui item">
          <select
            id="sort"
            className="ui selection dropdown"
            name="sort"
            onChange={handleSortChange}
            value={sortBy}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="ui item">
          <label htmlFor="greased">Greased Pigs Only?</label>
        </div>
        <div className="ui item">
          <input
            id="greased"
            className="ui toggle checkbox"
            checked={showGreased}
            onChange={handleToggleGreased}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
}

Filter.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onChangeSortBy: PropTypes.func.isRequired,
  showGreased: PropTypes.bool.isRequired,
  onChangeShowGreased: PropTypes.func.isRequired,
};

export default FilterHog;
