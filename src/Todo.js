import React from 'react';

export class ToDoApp extends React.Component {

    constructor(props, context, todos) {
        super(props, context);
        todos = [
            {id: 1, name: 'Do dark laundry', checked: false},
            {id: 2, name: 'Wash the dishes', checked: true},
            {id: 3, name: 'Write an essay', checked: false},
            {id: 4, name: 'Do the shopping', checked: true},
        ];
        this.state = {
            todos: todos
        }
    }

    handleChange(e, id) {
        this.setState((state, props) => ({
            todos: state.todos.map(it => it.id === id ? Object.assign({}, it, {checked: true}) : it)
        }));
    }

    render() {
        return (
            <div>
                <h1>ToDo App</h1>
                {this.state.todos.map(it => <ToDo handleChange={(e, id) => this.handleChange(e, id)} key={it.id}
                                                  todo={it}/>)}
            </div>
        )
    }
}


function ToDo(props) {
    return (<div className="todo-item">
            <label className={props.todo.checked ? 'todo-item-crossed' : ''}>
                <input id={'todo-check' + props.todo.id} disabled={props.todo.checked} type="checkbox"
                       checked={props.todo.checked}
                       onChange={(e) => props.handleChange(e, props.todo.id)}/>
                {props.todo.name}
            </label>
        </div>
    );
}


