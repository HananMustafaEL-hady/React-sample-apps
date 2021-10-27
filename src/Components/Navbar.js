import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = (props) => {
  return (
    <nav>
      <div class="container-nav">
        <div className="flex-display ">
          <Link to="/" className="link">
            <img src={logo} alt="" className="logo" />
          </Link>{" "}
          <Link to="/" className="p1 link ">
            Posts({JSON.parse(localStorage.getItem("posts"))?.length})
          </Link>
        </div>
        <Link to="" className="p1 link">
          En
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
