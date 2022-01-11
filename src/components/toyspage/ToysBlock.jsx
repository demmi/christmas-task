import React, { useContext } from 'react';
import './ToysBlock.css';

import ToyCard from '@/components/toyspage/ToyCard';
import { Filter, CountFilter, YearFilter } from '@/context';
import data from '@/data';

const ToysBlock = () => {
  const { filters } = useContext(Filter);
  const { counts } = useContext(CountFilter);
  const { years } = useContext(YearFilter);

  const isSearch = (elem) => elem.name.toLowerCase().includes(filters.text.toLowerCase());
  const isCount = (elem) => +elem.count >= counts[0] && +elem.count <= counts[1];
  const isYear = (elem) => +elem.year >= years[0] && +elem.year <= years[1];
  const isShape = (elem) =>
    filters.shape.length === 0 || filters.shape.includes(elem.shape);
  const isColor = (elem) =>
    filters.color.length === 0 || filters.color.includes(elem.color);
  const isSize = (elem) => filters.size.length === 0 || filters.size.includes(elem.size);
  const isFavorite = (elem) => !filters.favorite || elem.favorite;

  const sortFunction = () => {
    switch (filters.sort) {
      case 'disabled':
        return (a, b) => 0;
      case 'name-max':
        return (a, b) => (a.name > b.name ? 1 : -1);
      case 'name-min':
        return (a, b) => (a.name < b.name ? 1 : -1);
      case 'count-max':
        return (a, b) => (+a.count > +b.count ? 1 : -1);
      case 'count-min':
        return (a, b) => (+a.count < +b.count ? 1 : -1);
      default:
        return;
    }
  };
  return (
    <div className="toys-block">
      {data
        .filter(
          (elem) =>
            isSearch(elem) &&
            isCount(elem) &&
            isYear(elem) &&
            isShape(elem) &&
            isColor(elem) &&
            isSize(elem) &&
            isFavorite(elem),
        )
        .sort(sortFunction())
        .map((elem, index) => (
          <ToyCard
            num={elem.num}
            name={elem.name}
            count={elem.count}
            year={elem.year}
            shape={elem.shape}
            color={elem.color}
            size={elem.size}
            favorite={elem.favorite}
            key={index}
          />
        ))}
    </div>
  );
};

export default ToysBlock;
