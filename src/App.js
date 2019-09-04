import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  deleteTodo = (index) => {
    const todo = this.state.todos.splice(index, 1);
    this.setState({todo});
  }
  addTodo = (input) =>{
    this.state.todos.push({
      value: input,
      isCompleted: false
    });
    this.setState({
      todos: this.state.todos
    });
  }
  render() {
  return (
      <div>
         <AddTodo addTodo={this.addTodo}></AddTodo>
         {this.state.todos.map((todo, index) => {
          return(
            <TodoItem value={todo} index={index} deleteTodo={this.deleteTodo}></TodoItem>  
          )
        })}
      </div>
    );
  }
}

export default App;

