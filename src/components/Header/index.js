import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';

const Header = () => (
  <nav className={styles.tabbar}>
    <Link to="/" className={styles.link} activeClassName={styles.active}>
      Alphabet
    </Link>
    <Link to="/numbers" className={styles.link} activeClassName={styles.active}>
      Exotics
    </Link>
  </nav>
);

export default Header;
