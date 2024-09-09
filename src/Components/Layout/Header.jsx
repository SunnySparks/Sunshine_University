import React, { useState } from "react";
import NavBar from "./NavBar";
import "../../styles/global.scss";
import "../../styles/header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`header ${isOpen ? "open" : null}`}>
        <button className="fancy-burger" onClick={handleToggle}>
          <span
            className={`rectangle rectangle--top rectangle--small ${
              isOpen ? "open" : null
            }`}
          ></span>
          <span
            className={`rectangle rectangle--middle ${isOpen ? "open" : null}`}
          ></span>
          <span
            className={`rectangle rectangle--bottom rectangle--small ${
              isOpen ? "open" : null
            }`}
          ></span>
        </button>
        <span className={`box ${isOpen ? "open" : null}`}>
          <NavBar />
        </span>
        <div id="headerSocial">
          <div class="socialInner"></div>
        </div>
      </div>
      <div className="headerTop">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
