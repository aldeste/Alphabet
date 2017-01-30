/* @flow */
import React, { Component } from 'react';
import styles from './style.css';
import { browserHistory } from 'react-router';
import Container from '../components/Container';

class Display extends Component {
  state = {
    fontWeight: 400,
  }

  weightChanger(fontWeight) {
    this.setState({fontWeight})
  }
  render() {
    return (
      <div>
        <Container>
          <h1 className={styles.display} style={{fontWeight: this.state.fontWeight}}>
            {`${this.props.params.display.toLocaleUpperCase()}`}
          </h1>
          <div className={styles.buttons}>
            <button onClick={() => this.weightChanger(100)} className={styles.button}>thin</button>
            <button onClick={() => this.weightChanger(400)} className={styles.button}>normal</button>
            <button onClick={() => this.weightChanger(900)} className={styles.button}>fat</button>
          </div>
          <button onClick={browserHistory.goBack} className={styles.backButton}>Back</button>
        </Container>
      </div>
    );
  }
}

export default Display;
