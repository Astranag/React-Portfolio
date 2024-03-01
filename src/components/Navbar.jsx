import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#38ada9',
    color: '#ffffff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <nav style={navbarStyle}>
      <h2>Navbar</h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '10px' }}>Home</li>
        <li style={{ marginRight: '10px' }}>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;