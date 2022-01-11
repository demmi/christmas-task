import React, { useContext, useState } from 'react';

import './ShapeField.css';
import Ball from '@/assets/svg/ball.svg';
import Bell from '@/assets/svg/bell.svg';
import Cone from '@/assets/svg/cone.svg';
import Snowflake from '@/assets/svg/snowflake.svg';
import Toy from '@/assets/svg/toy.svg';
import { Filter } from '@/context';

const ShapeButton = ({ image, value }) => {
  const [active, setActive] = useState('');
  const { filters, setFilters } = useContext(Filter);
  const shapeClick = () => {
    if (filters.shape.includes(value)) {
      filters.shape = filters.shape.filter((item) => item !== value);
      setActive('');
    } else {
      filters.shape.push(value);
      setActive('shape-button-active');
    }
    setFilters(Object.assign({}, filters));
  };
  return (
    <button className={active} onClick={shapeClick}>
      {image}
    </button>
  );
};

const ShapeField = () => {
  return (
    <div className="aside-filter-shape">
      <p className="aside-label">Форма</p>
      <div className="shape-select">
        <ShapeButton
          value="шар"
          image={<Ball width="40" height="40" viewBox="0 0 64 64" />}
        />
        <ShapeButton
          value="колокольчик"
          image={<Bell width="40" height="40" viewBox="0 0 64 64" />}
        />
        <ShapeButton
          value="шишка"
          image={<Cone width="40" height="40" viewBox="0 0 64 64" />}
        />
        <ShapeButton
          value="снежинка"
          image={<Snowflake width="40" height="40" viewBox="0 0 64 64" />}
        />
        <ShapeButton
          value="фигурка"
          image={<Toy width="40" height="40" viewBox="0 0 400 556" />}
        />
      </div>
    </div>
  );
};

export default ShapeField;
