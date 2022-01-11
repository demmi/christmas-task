import React, { useContext } from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import StartPage from '@/components/startpage/StartPage';
import ToysPage from '@/components/toyspage/ToysPage';
import Context from '@/context';

export const Top = () => {
  let page;
  const { mainPage } = useContext(Context);
  switch (mainPage) {
    case 'startPage':
      page = <StartPage />;
      break;
    case 'toysPage':
      page = <ToysPage />;
      break;
  }
  return (
    <React.Fragment>
      <Header />
      {page}
      <Footer />
    </React.Fragment>
  );
};
