import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">
          Book Management System
        </a> */}
        <Link to="./" class="navbar-brand"> Book Management System </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#">
                Categories
              </a> */}
              <Link to="./categories" class="nav-link active" aria-current="page"> Categories</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">
                Suppliers
              </a> */}
              <Link to="./suppliers" class="nav-link"> Suppliers </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
