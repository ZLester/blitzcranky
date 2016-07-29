import React from 'react';
import './Header.css';

const Header = ({ champion }) => {
  const tags = champion.tags.reduce((results, tag) => `${results}, ${tag}`);
  const nameStyle = {
    color: champion.colors.title,
    // textShadow: `1px 2px 2px ${champion.colors.titleShadow}`,
  };
  const titleStyle = {
    color: champion.colors.subtitle,
    // textShadow: `1px 1px 2px ${champion.colors.subtitleShadow}`,
  };
  // const tagsStyle = {
  //   color: champion.colors.role,
  //   // textShadow: `1px 1px 0px ${champion.colors.roleShadow}`,
  // };
  return (
    <div className="Header text-center">
      <h1 style={nameStyle} className="Header-name">{champion.name}</h1>
      <h3 style={titleStyle} className="Header-title">{champion.title}</h3>
      <h5 className="Header-tags">{tags}</h5>
    </div>
  );
};

export default Header;
