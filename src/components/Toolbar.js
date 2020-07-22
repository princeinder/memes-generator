import React from "react";
const Toolbar = ({ setSearch }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-inner">
        <label for="search">Search </label>
        <input
          className="form-control"
          type="text"
          name="search"
          placeholder="template name...."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Toolbar;
