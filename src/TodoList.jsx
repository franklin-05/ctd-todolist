import TodoListItem from "./TodoListItem";

function TodoList({todoList,onCompleteTodo}) {
   const filteredTodlist=todoList.filter(todo => !todo.isCompleted);
    return filteredTodlist.length > 0 ?(<ul>
            {filteredTodlist.map(todo => 
            <TodoListItem
             key={todo.id} 
             todo={todo} 
             onCompleteTodo={onCompleteTodo}
                
            />
            
            )}
           </ul>) :(
            <p>Add a to-do above to get started</p>
           );
}

export default TodoList; // Exporting TodoList as default
