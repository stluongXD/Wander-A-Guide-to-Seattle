// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Club Components
import WanderNavbar from './navigation/WanderNavbar.js';
import Collections from './collections/collections.js';

function App() {
  return (
    <div>
      <WanderNavbar/>
      <Collections/>
    </div>
  );
}

export default App;
