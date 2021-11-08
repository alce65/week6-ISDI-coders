import './App.css';
import { Counter } from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Agnostic</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
