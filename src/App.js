import './App.css';
import {useRef, useState} from "react";

function App() {
    const [input, setInput] = useState('')
    const [inputs, setInputs] = useState([])
    const inputRef = useRef(null)

    function onChangeInput(e) {
        setInput(e.target.value)
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        setInput('')
        inputRef.current.focus()
        if(input===''){
            return
        }
        setInputs((prevState)=>[input,...prevState])
        setInput('')
    }

    return (
        <div className='box'>
            <div className='container'>
                <div className='header'>Todo List</div>
                <div className='item-input'>
                    <form onSubmit={onSubmitHandler}>
                    <input ref={inputRef} value={input} onChange={onChangeInput} placeholder='할 일을 입력하세요'/>
                    <button className='add-bt'>추가</button>
                    </form>
                    <div>
                        {inputs.map((item)=><div className='item-box'>{item}</div>)}
                    </div>
                </div>
            </div>
        </div>

            );
            }

            export default App;
