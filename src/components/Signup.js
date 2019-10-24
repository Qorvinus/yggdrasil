import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export class SignUp extends React.Component {

  handleSubmit() {

  }

  render() {
    return (
      <div className={/signup-page/}>
        <form>]
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="password" />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(SignUp);
