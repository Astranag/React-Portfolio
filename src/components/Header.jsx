import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => {
  const headerStyle = {
    backgroundColor: 'red',
    color: '#ffffff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    margin: 0,
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>ToDo App</h1>
      <button style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
        Mode
      </button>
    </header>
  );
};

export default Header;