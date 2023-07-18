import './App.css';
import {useRef, useState} from "react";

function App() {
    const [inputs, setInputs] = useState('')
    const inputRef = useRef(null)

    function onChangeInput(e) {
        setInputs(e.target.value)
    }

    function onClickHandler() {
        setInputs('')
        inputRef.current.focus()
    }

    return (
        <div className='box'>
            <div className='container'>
                <div className='header'>Todo List</div>
                <div className='item-input'>
                    <input ref={inputRef} value={inputs} onChange={onChangeInput} placeholder='할 일을 입력하세요'/>
                    <button className='add-bt' onClick={onClickHandler}>추가</button>
                </div>
            </div>
        </div>

            );
            }

            export default App;
