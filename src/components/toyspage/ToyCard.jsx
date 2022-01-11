import React from 'react';
import './ToyCard.css';

const ToyCard = ({ num, name, count, year, shape, color, size, favorite }) => {
  const image = require('@/assets/toys/' + num + '.png');
  return (
    <div className={'card'}>
      <h2 className="card-title">{name}</h2>
      <img src={image} alt="toy" className="card-img" />
      <div className="card-description">
        <p className="count">Количество: {count}</p>
        <p className="year">Год: {year}</p>
        <p className="shape">Форма: {shape}</p>
        <p className="color">Цвет: {color}</p>
        <p className="size">Размер: {size}</p>
        <p className="favorite">Любимая: {favorite ? 'да' : 'нет'}</p>
      </div>
    </div>
  );
};

export default ToyCard;
