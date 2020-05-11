import React from 'react';
import { render } from 'react-dom';

let id = 0

const Todo = props => (
    <li>
        <input type="checkbox"/>
        <button>Delete</button>
        <span>{props.todo.text}</span>
    </li>
)

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    addTodo() {
        const text = prompt("Todo text please!")
        this.setState({
            todos: [...this.state.todos, {id: id++, text: text}]
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addTodo()}>Add Todo</button>
                <ul>
                    {this.state.todos.map(todo => <Todo todo={todo} />)}
                </ul>
            </div>
        )
    }

}

render(<App />, document.getElementById('root'))