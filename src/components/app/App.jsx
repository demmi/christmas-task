import React, { useState } from 'react';

import { Top } from '@/components/top/Top';
import Context from '@/context';

export const App = () => {
  const [mainPage, setMainPage] = useState('startPage');
  return (
    <Context.Provider value={{ mainPage, setMainPage }}>
      <Top />
    </Context.Provider>
  );
};
