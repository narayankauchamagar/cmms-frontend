import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';
import { reducer as mailboxReducer } from 'src/slices/mailbox';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  projectsBoard: projectsBoardReducer,
  mailbox: mailboxReducer
});

export default rootReducer;
