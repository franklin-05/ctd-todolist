import { useRef } from "react";
import { useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel"; 
import styled from "styled-components";
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px; /* Add a small amount of padding on the items */
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px;
`;

const StyledButton = styled.button`
    /* Extend base style but add conditional italic font */
    font-style: ${props => props.disabled ? 'italic' : 'normal'}; 
    /* Ensures button inherits base styles from App.css but overrides specific rules if needed */
`;


function TodoForm({ onAddTodo }) {
    const todoTitleRef = useRef(null);
    const [workingTodoTitle, setWorkingTodoTitle] = useState('');
     
    function handleAddTodo(event) {
        event.preventDefault();
        const newTodoTitle = workingTodoTitle;

        
        onAddTodo(newTodoTitle);

        
        setWorkingTodoTitle(""); 
        todoTitleRef.current.focus();
    }

    return (
        <StyledForm onSubmit={handleAddTodo}>
            <TextInputWithLabel
                elementId="todoTitle"
                labelText="Todo"
                ref={todoTitleRef} 
                value={workingTodoTitle} 
                onChange={(e) => setWorkingTodoTitle(e.target.value)}
                
            />

            <StyledButton type="submit" disabled={workingTodoTitle.trim() === ""}>Add Todo</StyledButton>
        </StyledForm>
    );
}

export default TodoForm;

