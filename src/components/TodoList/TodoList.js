import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'
function TodoList() {
    const [input, setInput] = useState("");
    const [inputs, setInputs] = useState([]);
    const inputRef = useRef(null);
    const [isAlertVisible, setIsAlertVisible] = useState(true)
    function onChangeInput(e) {
        setInput(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        setInput("");
        inputRef.current.focus();
        if (input === "") {
            isAlertVisible&&alert('할 일을 입력해주세요')
            return;
        }
        setInputs((prevState) => [input, ...prevState]);
    }

    function onDelete(index) {
        setInputs((prevState) => prevState.filter((_, idx) => idx !== index));
    }

    function onAllDeleteHandler(){
        setInput("");
        inputRef.current.focus();
        setInputs([])
        setIsAlertVisible(false)
    }

    return (
        <div className='item-input'>
            <TodoForm
                inputRef={inputRef}
                value={input}
                onChange={onChangeInput}
                onSubmit={onSubmitHandler}
                onClick={onAllDeleteHandler}
            />
            <div>
                {inputs.map((item, index) => (
                    <TodoItem
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
