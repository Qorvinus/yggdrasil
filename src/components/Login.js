import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

export class Login extends React.Component {

  handleSubmit() {

  }

  render() {
    return (
      <div className={/login-page/}>
        <form>
          <input type="text" />
          <input type="password" />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default connect(Login);
