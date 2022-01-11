import React from 'react';

import './Footer.css';
import RsSchoolLogo from '@/assets/svg/rss.svg';

export default () => (
  <footer className="footer">
    <div className="container footer-container">
      <a
        className="footer-github-link"
        href="https://github.com/rolling-scopes-school/demmi-JSFE2021Q3"
        target="_blank"
        rel="noreferrer"
      >
        Работу выполнил Герасимчик Андрей
      </a>

      <a
        className="rss-logo"
        href="https://rs.school/js/"
        target="_blank"
        rel="noreferrer"
      >
        <RsSchoolLogo height={60} width={160} viewBox={'0 0 242 90'} />
      </a>
    </div>
  </footer>
);
