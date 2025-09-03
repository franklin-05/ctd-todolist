import './App.css';
import React, { useEffect, useState } from 'react';
import TodoForm from './features/TodoForm.jsx';
import TodoList from './features/TodoList/TodoList.jsx';
import TextInputWithLabel from './shared/TextInputWithLabel.jsx'; 

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const token = `Bearer ${import.meta.env.VITE_PAT}`;
    

    console.log('API URL:', url);
    console.log('Authorization Token:', token);
   
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

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            const options = {
                method: 'GET',
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                }
            };

            try {
                const resp = await fetch(url, options); 
                if (!resp.ok) {
                    // This error will now show the correct HTTP status code if the request fails
                    throw new Error(resp.statusText); 
                }
                const { records } = await resp.json(); 

                const fetchedTodos = records.map((record) => {
                    const todo = {
                        id: record.id,
                        ...record.fields, 
                        isCompleted: record.fields.isCompleted || false,
                    };

                    if (!todo.isCompleted) {
                        todo.isCompleted = false;
                    }

                    return todo; 
                });

                setTodoList(fetchedTodos); 
            } catch (error) {
                // This will now show "Not Found" or another correct status message
                setErrorMessage('Error fetching todos: ' + error.message); 
            } finally {
                setIsLoading(false); 
            }
        };

        fetchTodos(); 
    }, [url, token]); 


    return (
        <div>
            <h1>My Todos</h1>
            {isLoading && <p>Loading...</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <TodoForm onAddTodo={addTodo} />
            <TodoList 
                todoList={todoList} 
                onCompleteTodo={completeTodo} 
                onUpdateTodo={updateTodo}
                isLoading={isLoading}
            />
        </div>
    );
}

export default App;