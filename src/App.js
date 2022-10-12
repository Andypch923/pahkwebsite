import React, {useState} from "react";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Navibar from "./components/Navibar";
import Header from "./components/Header";

function App() {
  const [todos] = useState(['todo1','todo2'])
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
