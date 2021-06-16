import Buscador from './components/buscador/Buscador';
import BuscadorObj from './components/buscador2/BuscadorObj';
import './App.css';

function App() {

  const valores = ['uno', 'otro', 'quizas', 'otro mas', 'otra vez', 'ademas', 'diez'];

  return (
    <div className="App">
      <Buscador items={valores}/>
    </div>
  );
}

export default App;
