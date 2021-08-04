import AnimalManager from './components/animales/AnimalManager';
import Login from './components/login/Login'
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import io from "socket.io-client";
import UserContext from './context/userContext';

function App() {

  const [usuario, setUsuario] = useState({});
  const [socket] = useState(io.connect("/"));
 

  useEffect(() => {
    console.log("Ejecutandose nuestra App");
    socket.on("bienvenida_event", data => console.log("Bienvenida", data));
  }, [])

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
      <div className="container">
        <Router>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/animales">
                <AnimalManager socket={socket}/>
              </Route>
            </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
