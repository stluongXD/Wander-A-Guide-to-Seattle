// Style
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';


// Club Components
import WanderNavbar from './navigation/WanderNavbar.js';
import Collections from './collections/collections.js';
import About from './about/About.js';
import Home from './home/HomePage';

function App() {
  return (
    <div>
      <Router>
        <WanderNavbar />
        <Switch>
          <Route exact path="/About">
          <About />
          </Route>
          <Route exact path="/Browse">
            <Collections/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;