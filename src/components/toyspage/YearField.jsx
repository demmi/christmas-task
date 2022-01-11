import React, { useContext, useState } from 'react';

import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import './YearField.css';

import { YearFilter } from '@/context';
import data from '@/data';

const maxYear = Math.max.apply(
  null,
  data.map((elem) => +elem.year),
);
const minYear = Math.min.apply(
  null,
  data.map((elem) => +elem.year),
);

const YearField = () => {
  const { years, setYears } = useContext(YearFilter);
  const moveYearSlider = (render, handle, value) => {
    setYears([value[0].toFixed(0), value[1].toFixed(0)]);
  };
  return (
    <div>
      <p className="aside-label">Год приобретения</p>
      <Nouislider
        className={'year-slider-container'}
        range={{ min: minYear, max: maxYear }}
        start={[minYear, maxYear]}
        step={1}
        connect={true}
        onUpdate={moveYearSlider}
      />
      <div className="year-values">
        <p>{years[0]}</p>
        <p>{years[1]}</p>
      </div>
    </div>
  );
};

export default YearField;
