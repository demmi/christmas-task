import React, { useContext } from 'react';

import { Filter, YearFilter, CountFilter } from '@/context';
import './ResetButton.css';
import data from '@/data';

const maxYear = Math.max.apply(
  null,
  data.map((elem) => +elem.year),
);
const minYear = Math.min.apply(
  null,
  data.map((elem) => +elem.year),
);
const minCount = Math.min.apply(
  null,
  data.map((elem) => +elem.count),
);
const maxCount = Math.max.apply(
  null,
  data.map((elem) => +elem.count),
);

const ResetButton = () => {
  const { filters, setFilters } = useContext(Filter);
  const { years, setYears } = useContext(YearFilter);
  const { counts, setCounts } = useContext(CountFilter);
  const ClickReset = () => {
    filters.text = '';
    filters.sort = 'disabled';
    filters.shape = [];
    filters.color = [];
    filters.size = [];
    filters.favorite = false;
    setYears([minYear, maxYear]);
    setCounts([minCount, maxCount]);
    setFilters(Object.assign({}, filters));
  };
  return (
    <button className="reset-filter" onClick={ClickReset}>
      Сбросить фильтры
    </button>
  );
};

export default ResetButton;
