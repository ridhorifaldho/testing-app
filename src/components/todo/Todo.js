import './Todo.css'
import TodoList from "../todo-list/TodoList"
import TodoCreate from "../todoCreate/TodoCreate";
import {useState} from "react";

const Todo = () => {
    const [getTodosArr,setTodosArr] = useState([

    ])

    const eventCreateTodo = (newTodo) => {
        setTodosArr(getTodosArr.concat(newTodo))
        console.log(getTodosArr,"HEHE")
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodosArr} />
        </div>
    )
}

export default Todo