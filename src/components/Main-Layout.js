import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import Landing from './Landing';
import Login from './Login';
import SignUp from './Signup';
import ChildrenSection from './Children-Section';
import CreatMilestone from './Create-Milestone';
import Feed from './Feed';
import Footer from './Footer';

export class MainLayout extends React.Component {



  render() {
    return (
      <div className={main-layout}>
        <Nav />
        <Landing />
        <Login />
        <SignUp />
        <ChildrenSection />
        <CreatMilestone />
        <Feed />
        <Footer />
      </div>
    );
  };
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(MainLayout);
