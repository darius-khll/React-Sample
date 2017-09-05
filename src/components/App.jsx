import React, { Component } from 'react';
import Clock from './Clock'
import { connect } from 'react-redux'
import { addReminder, deleteReminder, clearReminders } from '../actions'

//event.target.value - event.key

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wow: ''
        };
    }

    addReminder() {
        this.props.addReminder(this.state.wow);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <div>
                {
                    reminders.map(reminder => {
                        return (
                            <div key={reminder.id}>
                                <button onClick={() => this.deleteReminder(reminder.id)}>{reminder.text}</button>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div>
                {this.state.wow} <br />
                <input type="text" onChange={ev => this.setState({ wow: ev.target.value })} />
                <button onClick={() => this.addReminder()}>Add Reminder</button>
                {this.renderReminders()}
                <button onClick={() => this.props.clearReminders()}>Clear Reminders</button>

                <Clock />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }

}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);