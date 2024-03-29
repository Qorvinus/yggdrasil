import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NewChild from './New-child';
import Child from './Child';

export class ChildrenSection extends React.Component {

  render() {
    return (
      <div className={/children-section/}>Child Container
        <Child />
        <NewChild />
      </div>
    );
  };
};

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(ChildrenSection);
