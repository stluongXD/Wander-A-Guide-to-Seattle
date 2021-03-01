// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


// Club Components
import WanderNavbar from './navigation/WanderNavbar.js';
import About from './about/About.js';

function App() {
  return (
    <div>
      <Router>
        <WanderNavbar />
        <Switch>
          <Route exact path="/About">
          <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;