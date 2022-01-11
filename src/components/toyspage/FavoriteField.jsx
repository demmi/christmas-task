import React, { useContext } from 'react';

import './FavoriteField.css';
import { Filter } from '@/context';

const FavoriteLabel = ({ name, text }) => {
  return <label htmlFor={name}>{text}</label>;
};

const FavoriteInput = ({ name }) => {
  const { filters, setFilters } = useContext(Filter);
  const favClick = (e) => {
    filters.favorite = e.target.checked;
    setFilters(Object.assign({}, filters));
  };
  return (
    <input
      className="checkbox-fav"
      type="checkbox"
      id={name}
      onChange={(e) => favClick(e)}
    />
  );
};

const FavoriteCheckbox = ({ name, text }) => {
  return (
    <React.Fragment>
      <FavoriteInput name={name} />
      <FavoriteLabel name={name} text={text} />
    </React.Fragment>
  );
};

const FavoriteField = () => {
  return (
    <div className="aside-filter-favorite">
      <FavoriteCheckbox name={'checkbox-fav'} text={'Только любимые'} />
    </div>
  );
};

export default FavoriteField;
