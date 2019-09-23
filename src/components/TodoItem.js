import React from 'react';

function TodoItem(props) {
    return (
        <div>
            <span
                onClick={() => {props.toggleTodo(props.index)}}
                className="d-inline p-2 bg-primary text-white"
                style={{textDecoration: props.obj.isCompleted? "line-through": null}}>
                {props.obj.value}
            </span>
            <div></div>
            <button className='btn btn-danger'  onClick={() => {props.deleteTodo(props.index)}}>delete</button>
        </div>
    )
}
export default TodoItem;