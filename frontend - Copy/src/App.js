import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
    console.log(element.completed)
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }, []);
    
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}, {JSON.stringify(todo.completed)}.</li>
        ))}
      </ul>
    </div>
  );
}

export default App;