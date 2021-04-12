import React from 'react';
import './Manager.css';
import Editor from '../editor/Editor';
import List from '../list/List';

class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tasks: [
                {
                    id: 1,
                    title: 'Build a rocket!',
                    datetime: '10 Apr 10:00 AM',
                    highlighted: true
                },
                {
                    id: 2,
                    title: 'Test the rocket!',
                    datetime: '11 Apr 1:00 PM',
                    highlighted: false
                },
                {
                    id: 3,
                    title: 'Fly to Mars!',
                    datetime: '12 Apr 3:00 PM',
                    highlighted: false
                }
            ],
            lastTaskId: -1
        };
        this.state.lastTaskId = this.state.tasks.reduce((maxId, task) => Math.max(maxId, task.id), this.state.lastTaskId);
        this.toggle = this.toggle.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    toggle() {
        this.setState(state => ({
            open: !state.open
        }));
    }

    saveTask(task) {
        const newLastTaskId = this.state.lastTaskId + 1;
        const id = {
            id: newLastTaskId
        };
        const newTask = Object.assign(id, task);
        this.setState(state => ({
            tasks: state.tasks.concat(newTask),
            lastTaskId: newLastTaskId
        }));
    }

    deleteTask(deletedTask) {
        this.setState(state => ({
            tasks: this.state.tasks.filter(task => task !== deletedTask)
        }));
    }

    render() {
        const buttonClassName = this.state.open ? 'Manager__header__button--open' : 'Manager__header__button--closed';
        const buttonTitle = this.state.open ? 'Close' : 'Add';
        return (
            <div className="Manager__container">
                <div className="Manager">
                    <div className="Manager__header">
                        <h1>Task Manager</h1>
                        <button className={ buttonClassName } onClick={ this.toggle }>{ buttonTitle }</button>
                    </div>
                    { this.state.open && <Editor onSaveTask={ this.saveTask } /> }
                    <List tasks={ this.state.tasks } onDeleteTask={ this.deleteTask } />
                </div>
            </div>
        );
    }
}

export default Manager;
