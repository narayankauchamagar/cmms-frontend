import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as projectsBoardReducer } from 'src/slices/projects_board';
import { reducer as mailboxReducer } from 'src/slices/mailbox';
import { reducer as customerReducer } from 'src/slices/customer';
import { reducer as vendorReducer } from 'src/slices/vendor';
import { reducer as locationReducer } from 'src/slices/location';
import { reducer as roleReducer } from 'src/slices/role';
import { reducer as userReducer } from 'src/slices/user';
import { reducer as teamReducer } from 'src/slices/team';
import { reducer as assetReducer } from 'src/slices/asset';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  projectsBoard: projectsBoardReducer,
  mailbox: mailboxReducer,
  customers: customerReducer,
  vendors: vendorReducer,
  locations: locationReducer,
  roles: roleReducer,
  users: userReducer,
  teams: teamReducer,
  assets: assetReducer
});

export default rootReducer;
