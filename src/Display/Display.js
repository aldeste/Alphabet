/* @flow */
import React, { Component } from 'react';
import styles from './style.css';
import { browserHistory } from 'react-router';
import Container from '../components/Container';

class Display extends Component {
  state = { fontWeight: 400 };
  handleWeight(fontWeight) {
    this.setState({ fontWeight });
  }

  render() {
    const { fontWeight } = this.state;
    const { display } = this.props.params;
    return (
      <div>
        <Container>
          <h1 className={styles.display} style={{ fontWeight }}>
            {`${display.toLocaleUpperCase()}`}
          </h1>
          <div className={styles.buttons}>
            <button
              onClick={() => this.handleWeight(100)}
              className={styles.button}
            >
              thin
            </button>
            <button
              onClick={() => this.handleWeight(400)}
              className={styles.button}
            >
              normal
            </button>
            <button
              onClick={() => this.handleWeight(900)}
              className={styles.button}
            >
              fat
            </button>
          </div>
          <button onClick={browserHistory.goBack} className={styles.backButton}>
            Back
          </button>
        </Container>
      </div>
    );
  }
}

export default Display;
