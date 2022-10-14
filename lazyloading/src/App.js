import './App.css';

import React, { Suspense, lazy } from 'react';

import { BrowsweRouter as Router, Route} from 'react-router-dom';

const About = lazy(() => import('./About'));

const App = () => (

   <Router>
   <Suspense fallback={<div>Loading...</div>}>
   <Switch>
   <Route path="/about" component={About} />
   <Route
      path="/"
      exact
      render={() => (
      <div>
         <h1>This is the main page</h1>
         <a href="/about">Click here</a>
      </div>
      )}/>
   </Switch>
   </Suspense>
   </Router>

);

export default App;