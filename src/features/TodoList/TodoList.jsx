import styles from "./TodoList.module.css"; 
import TodoListItem from "../../TodoListItem";
function TodoList({todoList,onCompleteTodo,onUpdateTodo,isLoading}) {
   const filteredTodlist=todoList.filter(todo => !todo.isCompleted);
   if(isLoading){
    return <p>Todo list loading...</p>; 
   }
    return filteredTodlist.length > 0 ?(<ul className={styles.list}>
            {filteredTodlist.map(todo => 
            <TodoListItem
             key={todo.id} 
             todo={todo} 
             onCompleteTodo={onCompleteTodo}
             onUpdateTodo={onUpdateTodo}   
            />
            
            )}
           </ul>) :(
            <p>Add a to-do above to get started</p>
           );
}

export default TodoList; // Exporting TodoList as default
