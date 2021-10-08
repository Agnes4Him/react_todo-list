
import './App.css';
import Todo from './components/Todo';

function App() {
  return (

    <div>

      <h2>To do List</h2>

      <Todo text="Learn React" />
      <Todo text="Learn Node.js" />
      <Todo text="Learn Express" />
      
    </div>
  );
}

export default App;
