import React, { useContext } from 'react';

import './SortField.css';
import { Filter } from '@/context';

const SortField = () => {
  const { filters, setFilters } = useContext(Filter);
  const changeSelect = (e) => {
    filters.sort = e.target.value;
    setFilters(Object.assign({}, filters));
  };
  return (
    <div className="aside-filter-select">
      <p className="aside-select-label">Сортировать</p>
      <select className="aside-sort-select" onChange={(e) => changeSelect(e)}>
        <option selected value="disabled">без сортировки</option>
        <option value="name-max">по названию от А до Я</option>
        <option value="name-min">по названию от Я до А</option>
        <option value="count-max">по количеству по возрастанию</option>
        <option value="count-min">по количеству по убыванию</option>
      </select>
    </div>
  );
};

export default SortField;
