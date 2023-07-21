import Todo from "./todo.js";
const TodoList=({todoList,setTodoList})=>{
    return <div>
        {todoList.map((todoItems)=>
        <Todo setTodoList={setTodoList} key={todoItems.id} todoItems={todoItems} todoList={todoList}></Todo>)}
    </div>
}
export default TodoList;