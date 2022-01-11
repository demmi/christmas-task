import React, { useContext } from 'react';
import './SearchField.css';
import { Filter } from '@/context';

const SearchField = () => {
  const { filters, setFilters } = useContext(Filter);
  const inputText = (e) => {
    filters.text = e.target.value;
    setFilters(Object.assign({}, filters));
  };
  return (
    <input
      type="search"
      className="aside-search"
      autoComplete="off"
      placeholder="Поиск"
      autoFocus
      onChange={(e) => inputText(e)}
    />
  );
};

export default SearchField;
