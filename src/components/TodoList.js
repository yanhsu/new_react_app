import React from 'react';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return(
      <div>
        <AddTodo addTodo={this.props.addTodo}></AddTodo>
        {this.props.todos.map((todo, index) => {
          return(
            <TodoItem
              key={index}
              obj={todo}
              index={index}
              deleteTodo={this.props.deleteTodo}
              toggleTodo={this.props.toggleTodo}>
            </TodoItem>
          )
        })}
      </div>
    );
  }
}
export default TodoList;