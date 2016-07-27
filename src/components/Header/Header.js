import React from 'react';
import './Header.css';

const Header = ({ champion }) => {
  const tags = champion.tags.reduce((result, tag) => `${result}, ${tag}`);
  return (
    <div className="Header text-center">
      <h1>{champion.name}</h1>
      <h3>{champion.title}</h3>
      <h5>{tags}</h5>
    </div>
  );
};

export default Header;
