import React from 'react';
import './Header.css';

const Header = ({ champion }) => {
  const tags = champion.tags.reduce((results, tag) => `${results}, ${tag}`);
  return (
    <div className="Header text-center">
      <h1 className="Header-name">{champion.name}</h1>
      <h3 className="Header-title">{champion.title}</h3>
      <h5 className="Header-tags">{tags}</h5>
    </div>
  );
};

export default Header;
