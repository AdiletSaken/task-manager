import React from 'react';
import './Task.css';
import close from '../../close.svg';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlighted: props.task.highlighted
        };
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
    }

    toggle() {
        this.setState(state => ({
            highlighted: !state.highlighted
        }));
    }

    delete() {
        this.props.onDelete(true);
    }

    render() {
        let className = 'Task';
        if (this.state.highlighted) {
            className += ' Task--highlighted';
        }
        const task = this.props.task;
        return (
            <div className={ className } onDoubleClick={ this.toggle }>
                <div className="Task__info">
                    <h3>{ task.title }</h3>
                    <p>{ task.datetime }</p>
                </div>
                <button onClick={ this.delete }>
                    <img src={ close } alt="close"></img>
                </button>
            </div>
        );
    }
}

export default Task;
