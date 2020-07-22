import React from "react";
import { SocialIcon } from "react-social-icons";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-section">
          <div className="title">Welcome to memes generator</div>
          <div className="social-links">
            Explore More
            <SocialIcon
              network="github"
              color="#fff"
              target="_blank"
              url="https://github.com/princeinder"
              style={{ height: 40, color: "#fff", width: 40, margin: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
