/* @flow */
import React, { PureComponent } from 'react';
import ListItem from '../components/ListItem';
import Container from '../components/Container';

class Browse extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          {this.props.list.map((e, i) => (
            <ListItem key={i} title={e} linkTo={`/view/${e}`} />
          ))}
        </Container>
      </div>
    );
  }
}

export default Browse;
