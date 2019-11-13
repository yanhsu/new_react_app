import React from 'react';

function TodoItem(props) {
    const { obj ,deleteTodo, toggleTodo } = props;
    return (
        <li className="list-group-item border-bottom border-top-0 m-2 rounded">
          <div className="custom-control custom-radio">
            <input className="custom-control-input" type="radio" name={obj.id} id={obj.id} onClick={() => {toggleTodo(obj.id)}} defaultChecked={obj.isCompleted} />
            <label className="custom-control-label" htmlFor={obj.id}> {obj.value}
            </label>
            <button className='btn btn-danger rounded pull-right ml-2'  onClick={() => {deleteTodo(obj.id)}}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
    )
}
export default TodoItem;