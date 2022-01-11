import React, { useContext } from 'react';

import Context from '@/context';

export default ({ className, text, value }) => {
  const { setMainPage } = useContext(Context);
  return (
    <button className={className} onClick={() => setMainPage(value)}>
      {text}
    </button>
  );
};
