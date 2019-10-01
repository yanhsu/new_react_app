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
          {this.props.todos.map((todo, index) => {
            return(
              <TodoItem
                key={todo.id}
                obj={todo}
                index={index}
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