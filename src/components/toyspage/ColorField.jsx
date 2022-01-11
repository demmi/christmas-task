import React, { useContext, useState } from 'react';

import { Filter } from '@/context';
import './ColorField.css';

const ColorButton = ({ value }) => {
  const [active, setActive] = useState('');
  const { filters, setFilters } = useContext(Filter);
  const colorClick = () => {
    if (filters.color.includes(value)) {
      filters.color = filters.color.filter((item) => item !== value);
      setActive('');
    } else {
      filters.color.push(value);
      setActive('color-button-active');
    }
    setFilters(Object.assign({}, filters));
  };
  return <button className={active} onClick={colorClick}></button>;
};

const ColorField = () => {
  return (
    <div>
      <p className="aside-label">Цвет</p>
      <div className="color-select">
        <ColorButton value={'белый'} />
        <ColorButton value={'желтый'} />
        <ColorButton value={'красный'} />
        <ColorButton value={'синий'} />
        <ColorButton value={'зелёный'} />
      </div>
    </div>
  );
};

export default ColorField;
