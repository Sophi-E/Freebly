import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import PrivacyPolicy from './pages/Footer/PrivacyPolicy';

import Terms from './pages/Footer/Terms';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import PostsPage from './pages/PostsPage';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail/PostDetail';
import About from './pages/Footer/About';
import Contact from './pages/Footer/Contact';
import FormSubmittedPage from './components/FormSubmittedPage';
import Test from './pages/test';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop>
          <div className='App'>
            <Switch>
              <Route path='/' exact component={Home} />

              <Route path='/privacypolicy' component={PrivacyPolicy} />
              <Route path='/terms' component={Terms} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <Route path='/view-posts' exact component={PostsPage} />
              <Route path='/create-post' component={CreatePost} />
              <Route path='/view-posts/:id' component={PostDetail} />
              <Route path='/thank-you' component={FormSubmittedPage} />
              <Route path='/test' component={Test} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </AuthProvider>
  );
};

export default App;
