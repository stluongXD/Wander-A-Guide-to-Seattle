// Style
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Club Components
import WanderNavbar from './navigation/WanderNavbar';
import Home from './home/HomePage';
//import About from './about/About.js';
//import Collections from './collections/collections.js';

function App() {
    return (
      <div>
        <Router>
          <WanderNavbar />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            {/*<Route exact path="/about"><About /></Route>*/}
            {/*<Route exact path="/collections"><Collections /></Route>*/}
          </Switch>
        </Router>
      </div>
    );
  }


export default App;