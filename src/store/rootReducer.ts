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
import { reducer as meterReducer } from 'src/slices/meter';
import { reducer as partReducer } from 'src/slices/part';
import { reducer as purchaseOrderReducer } from 'src/slices/purchaseOrder';
import { reducer as requestReducer } from 'src/slices/request';
import { reducer as workOrderReducer } from 'src/slices/workOrder';
import { reducer as assetReducer } from 'src/slices/asset';
import { reducer as categoryReducer } from 'src/slices/category';
import { reducer as multiPartsReducer } from 'src/slices/multipart';
import { reducer as checklistReducer } from 'src/slices/checklist';

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
  assets: assetReducer,
  meters: meterReducer,
  parts: partReducer,
  purchaseOrders: purchaseOrderReducer,
  requests: requestReducer,
  workOrders: workOrderReducer,
  categories: categoryReducer,
  multiParts: multiPartsReducer,
  checklists: checklistReducer
});

export default rootReducer;
