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
            <div className="input-group">
                <input 　className="form-control" value={this.state.input} onChange={this.changeInput}></input>
                <button className="btn-sm btn-primary ml-2" onClick={this.AddTodo}>Add</button>
            </div>
        )
    }
}
export default AddTodo;