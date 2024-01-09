import { useEffect, useRef, useState } from "react";
import "../css/Todo.css"

type TodoItem = {
    Text: string;
    Display: string;
};

function Todo() {
    const [todo, setTodo] = useState<TodoItem[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);


    const add = () => {
        setTodo([...todo, { Text: inputRef.current.value, Display: '' }])
        
    }

    useEffect(() => {
        console.log(todo);

    }, [todo])
    return (
        <div className='todo'>
            <div className="todo-header">  To-Do List     </div>
            <div className="todo-add">
                <input ref={inputRef} type="text" placeholder="Add Your Task...." className="todo-input" />
                <div onClick={() => { add() }} className="todo-add-btn">Add</div>
            </div>
            <div className="todo-list">
                {todo.map((item, index) => {
                    return <h1 key={index}>{index+1}:{item.Text}</h1>
                })}

            </div>

        </div>
    )
}

export default Todo