import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constant'

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    };

    console.log('action in reminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };

    console.log('deleting in actions', action);
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    };
    return action;
}