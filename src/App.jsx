import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const todos = [
  { text: 'Pelar cebolla', completed: false },
  { text: 'Cortar cebolla', completed: false },
  { text: 'Poner cebolla', completed: false }
]

function App(props) {
  return (
    <>
      <TodoCounter />
      <div className='section-right'>
        <TodoSearch />
      </div>
      <div className='section-left'>
        <TodoList>
          {todos.map(todo => (
            <TodoItem text={todo.text} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>

    </>
  );
}

export default App;
