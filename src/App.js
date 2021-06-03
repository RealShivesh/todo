import React, {useState} from 'react';
import './App.css';
import Forms from './components/Forms';
import Todo from './components/Todo';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Shivesh's Todo list</h1>
      </header>
      <Forms />
      <Todo/>
    </div>    
  );
}

export default App;
