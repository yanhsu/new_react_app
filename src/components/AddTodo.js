import React from 'react';

class AddTodo extends React.Component {
    constructor(){ 
        super();
        this.state = {
            input: ''
        }
    }
    changeInput = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    AddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({
            input: ''
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.changeInput}></input>
                <button className="btn btn-primary" onClick={this.AddTodo}>Add</button>
            </div>
        )
    }
}
export default AddTodo;