import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Abilities.css';

const Abilities = ({ champion }) => {
  const tags = champion.tags.reduce((results, tag) => `${results}/${tag}`);
  const categories = Object.keys(champion.info);
  const abilitiesGraph = categories.map((category, index) => {
    const score = champion.info[category];
    const labelClassNames = `Abilities-label Abilities-label-${category}`;
    const unitClassNames = `Abilities-unit Abilities-unit-${category} Abilities-unit-length-${score}`;
    const top = `${index * 4}vmin`;
    return (
      <Col key={index} lg={12} md={12} sm={12}>
        <div className={labelClassNames} style={{ top }} ></div>
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
    <Row style={{ marginTop: '52vh' }} className="Abilities">
      <h5 className="Abilities-tags">{tags}</h5>
      {abilitiesGraph}
    </Row>
  );
};

export default Abilities;
