/* @flow */
import React, { PureComponent } from 'react';
import Header from '../Header';
import styles from './style.css';

class Container extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;
