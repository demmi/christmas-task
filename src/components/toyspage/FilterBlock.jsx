import React from 'react';

import './FilterBlock.css';
import ColorField from '@/components/toyspage/ColorField';
import CountField from '@/components/toyspage/CountField';
import FavoriteField from '@/components/toyspage/FavoriteField';
import ResetButton from '@/components/toyspage/ResetButton';
import SearchField from '@/components/toyspage/SearchField';
import ShapeField from '@/components/toyspage/ShapeField';
import SizeField from '@/components/toyspage/SizeField';
import SortField from '@/components/toyspage/SortField';
import YearField from '@/components/toyspage/YearField';

const FilterBlock = () => {
  return (
    <aside className="aside-block">
      <SearchField />
      <SortField />
      <ShapeField />
      <CountField />
      <YearField />
      <ColorField />
      <SizeField />
      <FavoriteField />
      <ResetButton />
    </aside>
  );
};

export default FilterBlock;
