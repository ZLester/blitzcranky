import React from 'react';
import { Col } from 'react-bootstrap';
import './Lore.css';

const Lore = ({ champion }) => {
  return (
    <div className="Lore" style={{ color: champion.colors.title }}>
      <Col lg={6} md={6} sm={6} xs={6}>    
        
      </Col>
    </div>
  );
}

export default Lore;
