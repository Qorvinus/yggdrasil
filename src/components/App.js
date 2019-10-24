import React from 'react';
import './App.css';
import MainLayout from './Main-Layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/" component={MainLayout} />
    </Router>
  );
};

export default App;
