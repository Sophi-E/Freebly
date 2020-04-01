import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components//Home/Home';
import Signup from './components/forms/Signup';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import './App.css';
import Login from './components/forms/Login';
import Terms from './components/Footer/Terms';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import PostsPage from './components/PostsPage/PostsPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/privacypolicy' component={PrivacyPolicy} />
            <Route path='/terms' component={Terms} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/posts' component={PostsPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
