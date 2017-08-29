import { combineReducers } from 'redux';

import documents from './documents';


const rootReducer = combineReducers({
  treasureBox: documents,
});

export default rootReducer;
