import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <div className={/main-layout/}>
        <Nav />
          <main>
            <Switch>
              <Route path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
              <Route path="/main/child" component={ChildrenSection} />
              <Route path="/main/milestone" component={CreatMilestone} />
              <Route path="/main/feed" component={Feed} />
          </main>
          <Footer />
      </div>
    );
  };
};



export default connect()(MainLayout);
