// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-gray ">
  <div class="container">
    <Link class="navbar-brand  text-white fw-bold fs-2" href="/">START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" aria-current="page" to="/About">ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" aria-current="page" to="/Portfolio">PORTFOLIO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bold" aria-current="page" to="/Contact">CONTACT</Link>
        </li>
    </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;


