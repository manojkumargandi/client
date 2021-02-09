import React from 'react';
import './App.css';

import MainContent from './components/mainContent';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/*" children={(props) => <MainContent {...props}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
