import React, {useState} from 'react';
import './App.css';
import Forms from './components/Forms';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Shivesh's Todo list</h1>
      </header>
      <Forms inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList/>
    </div>    
  );
}

export default App;
