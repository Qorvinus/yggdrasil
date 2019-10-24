import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export class Child extends React.Component {

  render() {
    return (
      <div className={/child/}>CHILD
      </div>
    );
  };
};

export default Child;
