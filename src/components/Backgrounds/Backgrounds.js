import React from 'react';
import classNames from 'classnames';
import './Backgrounds.css';

const Backgrounds = ({ champions, selected }) => {
  const backgrounds = champions.map((champion, index) => {
    const className = classNames({
      'Backgrounds-img': true,
      'Backgrounds-img-selected': selected.id === champion.id,
    });
    const style = { backgroundImage: `url(${champion.background})` };
    return (
      <div
        key={index}
        className={className}
        style={style}
        src={champion.icon}
        alt={champion.key}
      />
    );
  });
  return (
    <div className="Backgrounds">
      {backgrounds}
    </div>
  );
};

export default Backgrounds;
