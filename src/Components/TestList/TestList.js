import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestList extends Component {

  render() {

    const listItems = [1,2,3].map(item =>
      <li key={item.toString()}>
        {item}
      </li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

}

TestList.propTypes = {};
TestList.defaultProps = {};

export default TestList;