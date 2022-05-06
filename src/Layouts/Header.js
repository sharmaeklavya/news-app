import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <a href="/">
          <img src="/logo48.svg" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto btn-group-toggle ">
            <li className="nav-item" style={{ width: "7rem" }}>
              <a
                href="/"
                className="nav-link text-center text-dark border-left"
              >
                Home
              </a>
            </li>
            <li className="nav-item" style={{ width: "7rem" }}>
              <a
                href="/about"
                className="nav-link text-center text-dark border-left"
              >
                About
              </a>
            </li>
            <li className="nav-item" style={{ width: "7rem" }}>
              <a
                href="/product-list"
                className="nav-link text-dark text-center border-left"
              >
                Product List
              </a>
            </li>
            <li className="nav-item" style={{ width: "7rem" }}>
              <a
                href="/contact"
                className="nav-link text-dark text-center border-left"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
