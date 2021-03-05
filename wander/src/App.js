// Style
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


// Club Components
import WanderNavbar from './navigation/WanderNavbar.js';
import Collections from './collections/collections.js';
import About from './about/About.js';
import {PhnomPenh} from './storyTemplate/phnomPenh/PhnomPenh.js'
import Home from './home/HomePage.js';

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
          <Route path="/Story/PhnomPenh" component={PhnomPenh} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;