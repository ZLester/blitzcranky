import React from 'react';
import './Roles.css';

const Roles = ({ champion }) => {
  const tags = ['Marksman', 'Assassin', 'Tank', 'Fighter', 'Mage', 'Support'];
  const tagUris = tags.map(tag => `http://riot-web-static.s3.amazonaws.com/images/news/Champion-Rotation/role_watermark_${tag.toLowerCase()}_med.png`);
  return (
    <div className="Roles">
      
    </div>
  );
}

export default Roles;
