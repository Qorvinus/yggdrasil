import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styles from './css_modules/nav.module.css';

export class Nav extends React.Component {

  render() {
    return (
    <div className={/nav/}>
      <header className={styles.header}>
        <div>
          Navigation
        </div>
      </header>
    </div>
    )
  };
};

export default Nav;
