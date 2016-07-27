import React from 'react';
import classNames from 'classnames';
import './Nav.css';

const Nav = ({ champions, selected, handleChampionClick }) => {
  const images = champions.map((champion, index) => {
    const className = classNames({
      img: true,
      // 'img-responsive': true,
      'Nav-img': true,
      'Nav-img-selected': selected.id === champion.id,
    });
    const handleClick = () => { handleChampionClick(champion); };
    return (
      <img
        onClick={handleClick}
        key={index}
        className={className}
        src={champion.icon}
        alt={champion.key}
      />
    );
  });
  return (
    <div className="Nav">
      {images}
    </div>
  );
};

export default Nav;
