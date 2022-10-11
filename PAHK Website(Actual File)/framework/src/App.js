import React, {useState} from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, Todos] = useState(['todo1','todo2'])
  return (
    <>
       <TodoList todos = {todos}/>
       <input type= "text" />
       <button>Add todos</button>
       <button>clear complete</button>
    </>
  );
}

export default App;
