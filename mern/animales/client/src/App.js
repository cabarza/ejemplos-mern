import AnimalManager from './components/animales/AnimalManager';
import Login from './components/login/Login'
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/animales">
              <AnimalManager />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
