import React from 'react';

function TodoItem(props) {
    console.log(props.obj.id);
    return (
        <li className="list-group-item border-bottom m-2 rounded">
          <div className="custom-control custom-radio">
            <input className="custom-control-input" type="radio" name="customRadio" id="customRadio1" onChange={() => props.toggleTodo(props.obj.id)} checked={props.obj.isCompleted}/>
            <label className="custom-control-label" htmlFor="customRadio1"> {props.obj.value}_{props.obj.id}
            </label>
            <button className='btn btn-danger rounded pull-right ml-2'  onClick={() => {props.deleteTodo(props.obj.id)}}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
    )
}
export default TodoItem;