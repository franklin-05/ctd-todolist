import { useRef } from "react";

function TodoForm({ onAddTodo }) {
  const todoTitleRef = useRef(null);

  function handleAddTodo(event) {
    event.preventDefault();

    const newTodoTitle = todoTitleRef.current.value;

    
    // Call the function passed from the parent component
    onAddTodo(newTodoTitle);

    // Clear the input and refocus for the next entry
    todoTitleRef.current.value = "";
    todoTitleRef.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">To-Do:</label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        ref={todoTitleRef} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;