import './App.css';
import { Counter } from './components/counter/counter';
import { List } from './components/tasks/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Agnostic</h1>
        <Counter />
      </header>
      <List />
    </div>
  );
}

export default App;
