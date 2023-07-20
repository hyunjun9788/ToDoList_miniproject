import React from "react";
import './TodoForm.css'
function TodoForm({ inputRef, value, onChange, onSubmit, onClick }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                ref={inputRef}
                value={value}
                onChange={onChange}
                placeholder='할 일을 입력하세요'
            />
            <button className='add-bt'>추가</button>
            <button className='all-delete' onClick={onClick}>모두 삭제</button>
        </form>
    );
}

export default TodoForm;
