import './App.css';
import React, {useState} from 'react';
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'; // Importing TodoList
import TodoListItem from './TodoListItem.jsx';


function App() {
    const [newTodo,setNewTodo]=useState("Example Text");
    return (
        <div>
            <h1>My Todos</h1>
            <TodoForm />
            <p>{newTodo}</p>
            <TodoList /> {/* Using the TodoList component here */}
            <TodoListItem/>
            
        </div>
    );
}

export default App;

