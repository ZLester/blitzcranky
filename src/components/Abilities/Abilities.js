import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Abilities.css';

const Abilities = ({ champion }) => {
  const categories = Object.keys(champion.info);
  const abilitiesGraph = categories.map((category, index) => {
    const score = champion.info[category];
    const label = category[0].toUpperCase() + category.slice(1);
    const unitClassNames = `Abilities-unit Abilities-unit-${category} Abilities-unit-length-${score}`;
    const top = `${30 + index * 4}vmin`;
    return (
      <Col key={index} lg={12} md={12} sm={12}>
        <span className="Abilities-label" style={{ top }} >{label}</span>
        <Row style={{ top }}
          className="Abilities-unit-container Abilities-unit-container-overlay"
        />
        <Row style={{ top }}
          className="Abilities-unit-container Abilities-unit-container-underlay"
        />
        <Row style={{ top }}
          className={unitClassNames}
        />

      </Col>
    );
  });
  return (
    <Row className="Abilities">
      {abilitiesGraph}
    </Row>
  );
};

export default Abilities;
