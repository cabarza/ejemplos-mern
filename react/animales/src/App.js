import { useEffect, useState } from "react";
import Animales from "./components/animales/Animales";
import Personas from "./components/personas/Personas";
import Cabecera from "./components/Cabecera";
import MiContexto from "./context/MiContexto";
import { Router } from "@reach/router";

function App() {
    const [cantidadAnimales, setCantidadAnimales] = useState(0);

    useEffect(() => {
      if(!cantidadAnimales) {
        setCantidadAnimales(sessionStorage.getItem('cantidadAnimales'));
      } else { 
        sessionStorage.setItem('cantidadAnimales', cantidadAnimales);
      }
    }, [cantidadAnimales]);

    return (
    <>
      <MiContexto.Provider value={{cantidadAnimales, setCantidadAnimales}}>
        <header>
          <Cabecera />
        </header>
        <main>
          <div className="container" style={{border: "1px solid black"}}>
            <Router>
              <Animales path="/animales"/>
              <Personas path="/"/>
            </Router>
          </div>
        </main>
        <footer>

        </footer>
      </MiContexto.Provider>
    </>
  );
}

export default App;
