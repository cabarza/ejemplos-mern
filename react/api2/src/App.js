import { Router } from '@reach/router';
import Main from './components/main'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/personas/*"/>
      </Router>
    </div>
  );
}

export default App;
