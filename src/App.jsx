import './App.css'

function App() {
  const todos=[
    {id:1, title:"review resources"},
    {id:2, title:"take notes"},
    {id:3, title:"code out app"},
  ]
  return(
    <div>
      <h1>
        My Todos
      </h1>
      <ul>
        {todos.map(todos=> <li key={todos.id}>{todos.title} </li>)}
      </ul>
    </div>
  )

  
}

export default App
