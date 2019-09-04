import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <span className="badge badge-secondary">{props.value}</span>
            <button className='btn btn-danger'  onClick={() => {props.deleteTodo(props.index)}}>delete</button>
        </div>
    )
}
export default TodoItem;