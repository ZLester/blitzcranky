import React from 'react';
import { Col } from 'react-bootstrap';
import './Abilities.css';

const Abilities = ({ champion }) => {
  const attack = champion.info.attack
  return (
    <div className="Abilities">
      <Col lg={6} md={6} sm={6}>
        <div className="Abilities-title">
          <h3>Attack</h3>
          <h3>Defense</h3>
          <h3>Magic</h3>
          <h3>Difficulty</h3>
        </div>
      </Col>
      <Col lg={6} md={6} sm={6}>
      </Col>
    </div>
  );
};

export default Abilities;
