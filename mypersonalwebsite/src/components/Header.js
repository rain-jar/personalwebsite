import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> 🇷 Home</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
