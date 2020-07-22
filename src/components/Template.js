import React from "react";
const Template = (props) => {
  const { id, name, url, setMeme, height, width } = props;
  return (
    <li>
      <div className="list-inner">
        <img height={200} width={200} src={url} />
        <h3>{name}</h3>
      </div>
      <div className="list-inner-overlay">
        <button
          type="btn"
          className="btn btn-overlay"
          onClick={() => setMeme({ id, name, url, height, width })}
        >
          Use This Template
        </button>
      </div>
    </li>
  );
};

export default Template;
