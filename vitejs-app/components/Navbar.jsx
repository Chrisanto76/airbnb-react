import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <img
          src="./src/assets/Airbnb-logo.png"
          alt="airbnb-icon"
          className="nav--logo"
        />
        <ul className="nav--title">
          <li className="nav--item bold">Anywhere</li>
          <li className="nav--item bold">One week</li>
          <li className="nav--item gray thin">More Travelers</li>
          <img
            src="./src/assets/icons8-chercher-50 (1).png"
            alt="find-logo"
            className="find--icon"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
