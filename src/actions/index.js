import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constant'

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    };
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    };
    return action;
}