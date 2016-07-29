import React from 'react';
import './Header.css';

const Header = ({ champion }) => {
  const nameStyle = {
    color: champion.colors.title,
  };
  const titleStyle = {
    color: champion.colors.subtitle,
  };
  return (
    <div className="Header">
      <h1 style={nameStyle} className="Header-name">{champion.name}</h1>
      <h3 style={titleStyle} className="Header-title">{champion.title}</h3>

    </div>
  );
};

export default Header;
