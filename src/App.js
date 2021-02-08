import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainContent from './components/mainContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/*" children={<MainContent />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
