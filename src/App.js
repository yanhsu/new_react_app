import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import config from './config';
import uuidv4 from 'uuid/v4';
import _ from 'lodash';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }
  deleteTodo = (key) => {
    const todos = this.state.todos.filter(function (value) {
      return value.id !== key;
    });
    this.setState({todos});
  }
  addTodo = (input) =>{
    this.state.todos.push({
      value: input,
      isCompleted: false,
      id: uuidv4()
    });
    this.setState({
      todos: this.state.todos
    });
  }
  toggleTodo = (key) => {
    let todos = [...this.state.todos];
    const index = _.findIndex(todos, function(value) {
      return value.id === key;
    });
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState({
        todos: todos
    });
  }
  filterTodo = (todo) => {
    return todo.isCompleted === false;
  }
  filterDone = (done) => {
    return done.isCompleted === true;
  }
  render() {
  return (
      <div>
         <nav className="navbar bg-dark mb-3">
           <input type="text"/>
         </nav>
         <div className="container">
            <AddTodo addTodo={this.addTodo}>
            </AddTodo>
            <div className="row">
              <div className="col-md-6 w-100">
                <span className="display-4" style={{ fontFamily : "monospace"}}>TODO</span>
                <TodoList
                  deleteTodo={this.deleteTodo}
                  addTodo={this.addTodo}
                  toggleTodo={this.toggleTodo}
                  todos={this.state.todos.filter(this.filterTodo)}
                >
                </TodoList>
              </div>
              <div className="col-md-6">
                <span className="display-4" style={{ fontFamily : "monospace"}}>DONE</span>
                <TodoList
                  deleteTodo={this.deleteTodo}
                  toggleTodo={this.toggleTodo}
                  todos={this.state.todos.filter(this.filterDone)}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

