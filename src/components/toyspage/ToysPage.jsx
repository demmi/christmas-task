import React, { useState } from 'react';

import './ToysPage.css';
import FilterBlock from '@/components/toyspage/FilterBlock';
import ToysBlock from '@/components/toyspage/ToysBlock';
import { Filter, CountFilter, YearFilter } from '@/context';
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

const ToysPage = () => {
  const [filters, setFilters] = useState({
    text: '',
    sort: 'disabled',
    shape: [],
    color: [],
    size: [],
    favorite: false,
  });
  const [counts, setCounts] = useState([minCount, maxCount]);
  const [years, setYears] = useState([minYear, maxYear]);

  return (
    <YearFilter.Provider value={{ years, setYears }}>
      <CountFilter.Provider value={{ counts, setCounts }}>
        <Filter.Provider value={{ filters, setFilters }}>
          <div className="toys-page-container">
            <FilterBlock />
            <ToysBlock />
          </div>
        </Filter.Provider>
      </CountFilter.Provider>
    </YearFilter.Provider>
  );
};

export default ToysPage;
