import './App.css';
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'; // Importing TodoList

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <TodoForm />
            <TodoList /> {/* Using the TodoList component here */}
            
        </div>
    );
}

export default App;

