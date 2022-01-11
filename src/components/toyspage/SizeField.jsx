import React, { useContext } from 'react';
import './SizeField.css';
import { Filter } from '@/context';

const SizeLabel = ({ name, text }) => {
  return <label htmlFor={name}>{text}</label>;
};

const SizeInput = ({ name, value }) => {
  const { filters, setFilters } = useContext(Filter);
  const sizeClick = (e) => {
    if (e.target.checked) {
      filters.size.push(value);
    } else {
      filters.size = filters.size.filter((item) => item !== value);
    }
    setFilters(Object.assign({}, filters));
  };
  return (
    <input
      className="checkbox"
      type="checkbox"
      id={name}
      onChange={(e) => sizeClick(e)}
    />
  );
};

const SizeCheckbox = ({ name, text, value }) => {
  return (
    <React.Fragment>
      <SizeInput name={name} value={value} />
      <SizeLabel name={name} text={text} />
    </React.Fragment>
  );
};

const SizeField = () => {
  return (
    <div>
      <p className="aside-label">Размер</p>
      <div className="aside-filter-size">
        <SizeCheckbox name={'checkbox-big'} text={'Большие'} value={'большой'} />
        <SizeCheckbox name={'checkbox-medium'} text={'Средние'} value={'средний'} />
        <SizeCheckbox name={'checkbox-small'} text={'Маленькие'} value={'малый'} />
      </div>
    </div>
  );
};

export default SizeField;
