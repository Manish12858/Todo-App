import styles from "../style.module.css";


const Todo=({todoItems,todoList,setTodoList})=>{
    const deleteTodo=()=>{
        setTodoList(todoList.filter((item)=>item.id !==todoItems.id));
    }
    return <div>
    <div className={styles.todoItems}>
        <h3 className={styles.todoNames}>{todoItems.name}</h3>
        <button onClick={deleteTodo} className={styles.eraseButton}>Erase</button>
    </div>
    </div>
}

export default Todo;