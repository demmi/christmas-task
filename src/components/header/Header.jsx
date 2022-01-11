import React from 'react';

import SpruceIcon from '@/assets/svg/tree.svg';
import HeaderBtn from '@/components/global/button';
import './Header.css';

export default () => {
  return (
    <header className="header">
      <div className="container header-container">
        <HeaderBtn
          className="header-button-main"
          text={<SpruceIcon width={43} height={60} viewBox={'0 0 98 128'} />}
          value="startPage"
        />
        <HeaderBtn className="header-button-toys" text="Игрушки" value="toysPage" />
        <HeaderBtn className="header-button-spruce" text="Елка" value="sprucePage" />
        <p className="toys-bookmark">0</p>
      </div>
    </header>
  );
};
