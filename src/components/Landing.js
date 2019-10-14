import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

export class Landing extends Component {

  render() {
    return (
      <div className={landing}>
        <section className={hero-section}>
        </section>
        <section className={how-to-section}>
        </section>
        <section className={demo-section}>
        </section>
      </div>
    );
  };
};

const mapStateToProps = {

};

export default connect(mapStateToProps)(Landing);
