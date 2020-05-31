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
import CreatePost from './components/CreatePost/CreatePost';
import PostDetail from './components/PostDetail/PostDetail';
import About from './components/Footer/About';
import Contact from './components/Footer/Contact';

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
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/view-posts' exact component={PostsPage} />
            <Route path='/create-post' component={CreatePost} />
            <Route path='/view-posts/:id' component={PostDetail} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
