import { useState } from "react";
import NavBar from "./NavBar";
import "./styles.scss";
import "../../styles/global.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`header ${isOpen ? "open" : ""}`}>
        <button
          className="fancy-burger"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <span
            className={`rectangle rectangle--top rectangle--small ${
              isOpen ? "open" : ""
            }`}
          ></span>
          <span
            className={`rectangle rectangle--middle ${isOpen ? "open" : ""}`}
          ></span>
          <span
            className={`rectangle rectangle--bottom rectangle--small ${
              isOpen ? "open" : null
            }`}
          ></span>
        </button>
        <span className={`box ${isOpen ? "open" : ""}`}>
          <NavBar />
        </span>
      </div>
      <div className="headerTop">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
