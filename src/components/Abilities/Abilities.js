import React from 'react';
import './Abilities.css';

const Abilities = ({ champion }) => {
  return (
    <div className="Abilities text-center">
      <h1>{champion.name}</h1>
      <h3>{champion.title}</h3>
    </div>
  );
};

export default Abilities;
