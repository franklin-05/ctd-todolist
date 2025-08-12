import './App.css';
import React, {useState} from 'react';
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'; // Importing TodoList



function App() {
    const [todoList,setTodoList]=useState([]);
    const addTodo=(title)=>{
    const newTodo={title,id:Date.now()};
    setTodoList([...todoList,newTodo]) //Spread operator to create new array that contain all items in todoList
    }
    return (
        <div>
            <h1>My Todos</h1>
            <TodoForm onAddTodo={addTodo}/>
            <TodoList todoList={todoList} /> {/* Using the TodoList component here */}
            
        
            
        </div>
    );
}

export default App;

