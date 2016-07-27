import React from 'react';
import './Header.css';

const Header = ({ champion }) => {
  return (
    <div className="Header text-center">
      <h1>{champion.name}</h1>
      <h3>{champion.title}</h3>
    </div>
  );
};

export default Header;
