/* @flow */
import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

class ListItem extends PureComponent {
  static propTypes = { title: PropTypes.string.isRequired };
  render() {
    return (
      <div className={styles.item}>
        <Link to={this.props.linkTo} className={styles.link}>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

export default ListItem;
