import React from 'react';
import './List.css';
import Task from '../task/Task';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(task) {
        this.props.onDeleteTask(task);
    }

    render() {
        let className = 'List';
        if (this.props.tasks.length === 0) {
            className += ' List--empty';
        }
        const tasks = this.props.tasks;
        const taskList = tasks.map(task => 
            <Task key={ task.id } task={ task } onDelete={ e => { this.deleteTask(task) } } />
        );
        return (
            <div className={ className }>
                { taskList }
            </div>
        );
    }
}

export default List;
