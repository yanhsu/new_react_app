import React from 'react';

function TodoItem(props) {
    const { obj ,deleteTodo, toggleTodo } = props;
    return (
        <li className="list-group-item border-bottom m-2 rounded">
          <div className="custom-control custom-radio">
            <input className="custom-control-input" type="radio" name="customRadio" id="customRadio1" onChange={() => {toggleTodo(obj.id)}} checked={obj.isCompleted}/>
            <label className="custom-control-label" htmlFor="customRadio1"> {obj.value}
            </label>
            <button className='btn btn-danger rounded pull-right ml-2'  onClick={() => {deleteTodo(obj.id)}}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
    )
}
export default TodoItem;