import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestList extends Component {

  static propTypes = {
     tests: PropTypes.array.isRequired,
  };

  render() {
    const { tests } = this.props;
    return(
      <ul>
        {
          tests.map(item =>
            <li key={item.toString()}>
              {item}
            </li>
          )
        }
      </ul>
    )
  }
}

export default TestList;