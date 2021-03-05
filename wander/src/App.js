// Style
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';


// Club Components
import WanderNavbar from './navigation/WanderNavbar.js';
import Collections from './collections/collections.js';
import About from './about/About.js';
import Home from './home/HomePage.js';
import {PhnomPenh} from './storyTemplate/story/phnomPenh/PhnomPenh.js';
import HoodFamous from "./storyTemplate/story/hood-famous/HoodFamous.js";
import FortuneGarden from "./storyTemplate/story/fortune-garden/FortuneGarden.js";
import {YoungTea} from "./storyTemplate/story/youngtea/youngtea.js";

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
          <Route path="/Story/HoodFamous" component={HoodFamous} />
          <Route path="/Story/FortuneGarden" component={FortuneGarden} />
          <Route path="/Story/YoungTea" component={YoungTea} />
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