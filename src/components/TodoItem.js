import React from 'react';

function TodoItem(props) {
    return (
        <li className="list-group-item border m-2 rounded">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="radio" id="radio1" checked={props.obj.isCompleted}/>
              <label className="form-check-label" htmlFor="radio1"> {props.obj.value}
              </label>
          </div>
            <span
                onClick={() => {props.toggleTodo(props.index)}}
                className={"d-inline p-2 "}
                style={{textDecoration: props.obj.isCompleted? "line-through": null}}>
                {props.obj.value}
            </span>
            <button className='btn btn-danger rounded pull-right'  onClick={() => {props.deleteTodo(props.index)}}><i
              className="fa fa-trash"></i></button>
        </li>
    )
}
export default TodoItem;