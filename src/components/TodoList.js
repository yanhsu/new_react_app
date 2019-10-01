import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <ul className="list-group list-group-flush">
          {this.props.todos.map((todo) => {
            return(
              <TodoItem
                key={todo.id}
                obj={todo}
                {...this.props}>
              </TodoItem>
            )
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;