import Header from "./component/header";
import Form from "./component/form";
import TodoList from "./component/todoList";

import {useState} from "react";

function App() {
  const [todo,setTodo]=useState("");
  const [todoList,setTodoList]=useState([]);
  return (
    <div className="App">
     <Header></Header>
     <Form todo={todo}
      setTodo={setTodo} 
      todoList={todoList}
      setTodoList={setTodoList}>
     </Form>
     <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
