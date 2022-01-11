import React, { useContext } from 'react';

import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import './CountField.css';

import { CountFilter } from '@/context';
import data from '@/data';

const maxCount = Math.max.apply(
  null,
  data.map((elem) => +elem.count),
);
const minCount = Math.min.apply(
  null,
  data.map((elem) => +elem.count),
);

const CountField = () => {
  const { counts, setCounts } = useContext(CountFilter);
  const moveCountSlider = (render, handle, value) => {
    setCounts([value[0].toFixed(0), value[1].toFixed(0)]);
  };
  return (
    <div>
      <p className="aside-label">Количество экземпляров</p>
      <Nouislider
        className={'count-slider-container'}
        range={{ min: minCount, max: maxCount }}
        start={[minCount, maxCount]}
        step={1}
        connect
        onUpdate={moveCountSlider}
      />
      <div className="count-values">
        <p>{counts[0]}</p>
        <p>{counts[1]}</p>
      </div>
    </div>
  );
};

export default CountField;
