import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const Header = () => (
  <nav className={styles.tabbar}>
    <Link to="/" className={styles.link} activeClassName={styles.active}>
      AZ
    </Link>
    <Link to="/numbers" className={styles.link} activeClassName={styles.active}>
      ÄŻ
    </Link>
  </nav>
);

export default Header;
