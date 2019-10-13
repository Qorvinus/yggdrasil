import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

export class Landing extends Component {

  render() {
    return (
      <div>
        <Nav />
          <main className={styleMain} >
          </main>
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = {

}

export default connect(mapStateToProps)(Landing);
