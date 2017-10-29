import { ADD_REMINDER, DELETE_REMINDER, ADD_STAR } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate: dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

export const addStar = (star) => {
  const action = {
    type: ADD_STAR,
    star: star
  }
  return action;
}
