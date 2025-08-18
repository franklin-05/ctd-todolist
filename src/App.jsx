import './App.css';
import React, { useState } from 'react';
import TodoForm from './features/TodoForm.jsx';
import TodoList from './features/TodoList/TodoList.jsx'; // Importing TodoList
import TextInputWithLabel from './shared/TextInputWithLabel.jsx'; // Fixed import statement

function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (title) => {
        const newTodo = { title, id: Date.now(), isCompleted: false };
        setTodoList([...todoList, newTodo]);
    };

    const completeTodo = (id) => {
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
        setTodoList(updatedTodos);
    };

    const updateTodo = (editedTodo) => {
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === editedTodo.id) {
                return { ...editedTodo }; 
            }
            return todo; 
        });
        setTodoList(updatedTodos); 
    };

    return (
        <div>
            <h1>My Todos</h1>
            <TodoForm onAddTodo={addTodo} />
            <TodoList 
                todoList={todoList} 
                onCompleteTodo={completeTodo} 
                onUpdateTodo={updateTodo}
            />
        </div>
    );
}

export default App;
