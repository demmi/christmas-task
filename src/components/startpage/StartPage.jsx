import React from 'react';

import './StartPage.css';
import Ball1 from '@/assets/ball/1.png';
import Ball2 from '@/assets/ball/2.png';
import Button from '@/components/global/button';

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="container start-page-container">
        <img src={Ball1} alt="toy" className="start-page__img1" />
        <img src={Ball2} alt="toy" className="start-page__img2" />
        <h1 className="start-page-title">
          Помогите бабушке
          <br />
          нарядить елку
        </h1>
        <Button className="start-page-btn" text="Начать" value="toysPage" />
      </div>
    </div>
  );
};

export default StartPage;
