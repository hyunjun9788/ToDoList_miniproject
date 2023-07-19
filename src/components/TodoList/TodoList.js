import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'
function TodoList() {
    const [input, setInput] = useState("");
    const [inputs, setInputs] = useState([]);
    const inputRef = useRef(null);

    function onChangeInput(e) {
        setInput(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        setInput("");
        inputRef.current.focus();
        if (input === "") {
            return;
        }
        setInputs((prevState) => [input, ...prevState]);
        setInput("");
    }

    function onDelete(index) {
        setInputs((prevState) => prevState.filter((_, idx) => idx !== index));
    }

    return (
        <div className='item-input'>
            <TodoForm
                inputRef={inputRef}
                value={input}
                onChange={onChangeInput}
                onSubmit={onSubmitHandler}
            />
            <div>
                {inputs.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                        index={index}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
