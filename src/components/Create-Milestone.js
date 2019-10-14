import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MilestoneForm from './Milestone-form';

export class CreatMilestone extends React.Component {

  render() {
    return (
      <div className={create-milestone}>
        <MilestoneForm />
      </div>
    );
  };
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(CreatMilestone);
