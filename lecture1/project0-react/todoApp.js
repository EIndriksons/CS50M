import React from 'react';
import { render } from 'react-dom';
import Hello from './hello';

const Todo = props => (
    <li>
        <input type="checkbox"/>
        <button>Delete</button>
        <span>{props.text}</span>
    </li>
)

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => <Todo todo={todo} />)}
                </ul>
            </div>
        )
    }

}

render(<App />, document.getElementById('root'))