import React from 'react';
import TodoList from './components/TodoList';

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
  toggleTodo = (index) => {
    let todos = [...this.state.todos];
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState({
        todos: todos
    });
  }
  render() {
  return (
      <div>
         <nav className="navbar">
           <input type="text"/>
         </nav>
          <div className="container">
            <div className="row">
              <div className="col-xs">
                <TodoList
                  deleteTodo={this.deleteTodo}
                  addTodo={this.addTodo}
                  toggleTodo={this.toggleTodo}
                  todos={this.state.todos}>
                </TodoList>
              </div>
              <div className="col-xs">

              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

