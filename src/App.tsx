import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components//Home/Home';
import Signup from './components/forms/Signup';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import './App.css';
import Login from './components/forms/Login';
import Terms from './components/Footer/Terms';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/privacypolicy' component={PrivacyPolicy} />
          <Route path='/terms' component={Terms} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
