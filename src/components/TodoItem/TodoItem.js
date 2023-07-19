import React from "react";
import './TodoItem.css'
function TodoItem({ item, index, onDelete }) {
    return (
        <div className='item-box'>
            {item}
            <button className='delete' onClick={() => onDelete(index)}>
                삭제
            </button>
        </div>
    );
}

export default TodoItem;
