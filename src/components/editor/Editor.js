import React from 'react';
import './Editor.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            datetime: '',
            highlighted: false
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDatetime = this.changeDatetime.bind(this);
        this.changeHighlighted = this.changeHighlighted.bind(this);
        this.reset = this.reset.bind(this);
        this.save = this.save.bind(this);
    }

    changeTitle(e) {
        const newTitle = e.target.value;
        this.setState({
            title: newTitle
        });
    }

    changeDatetime(e) {
        const newDatetime = e.target.value;
        this.setState({
            datetime: newDatetime
        });
    }

    changeHighlighted(e) {
        const newHighlighted = e.target.checked;
        this.setState({
            highlighted: newHighlighted
        });
    }

    reset() {
        this.setState({
            title: '',
            datetime: '',
            highlighted: false
        });
    }

    save() {
        const task = {
            title: this.state.title,
            datetime: this.state.datetime,
            highlighted: this.state.highlighted
        };
        this.props.onSaveTask(task);
        this.reset();
    }

    render() {
        const state = this.state;
        return (
            <div className="Editor">
                <div className="Editor__input">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" value={ state.title } onChange={ this.changeTitle }></input>
                </div>
                <div className="Editor__input">
                    <label>Day & Time</label>
                    <input type="text" placeholder="Add Day & Time" value={ state.datetime } onChange={ this.changeDatetime }></input>
                </div>
                <div className="Editor__input Editor__checkbox">
                    <label>Set Reminder</label>
                    <input type="checkbox" checked={ state.highlighted } onChange={ this.changeHighlighted }></input>
                </div>
                <button onClick={ this.save }>Save Task</button>
            </div>
        );
    }
}

export default Editor;
