import { useRef } from "react";
import { useState } from "react";
function TodoForm({ onAddTodo }) {
  const todoTitleRef = useRef(null);
const [workingTodoTitle, setWorkingTodoTitle]=useState('');
  function handleAddTodo(event) {
    event.preventDefault();

    const newTodoTitle = workingTodoTitle;

    
    // Call the function passed from the parent component
    onAddTodo(newTodoTitle);

    // Clear the input and refocus for the next entry
    setWorkingTodoTitle(""); // Clear the state
    todoTitleRef.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">To-Do:</label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        value={workingTodoTitle}
        onChange={(e) =>setWorkingTodoTitle(e.target.value)}
        ref={todoTitleRef} 
      />
      <button type="submit" disabled={workingTodoTitle.trim() === ""}>Add Todo</button>
    </form>
  );
}

export default TodoForm;