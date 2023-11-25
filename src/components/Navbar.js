// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './Navbar.css'; // Import the CSS file

const Navbar = () => (
  <Stack className="navbar-container" justifyContent="space-around">
    <Stack
      direction="row"
      gap="40px"
      className="navbar-links"
    >
      <Link to="/" className="nav-link" activeClassName="active-link">
        Home
      </Link>
      <Link to="/exercisepage" className="nav-link" activeClassName="active-link">
        Exercises
      </Link>
      <Link to="/equipmentpage" className="nav-link" activeClassName="active-link">
        Equipment
      </Link>
      <Link to="/aboutpage" className="nav-link" activeClassName="active-link">
        About
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
