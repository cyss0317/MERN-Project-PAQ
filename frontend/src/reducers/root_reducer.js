import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import message from './message_reducer'; 
import shipment from './shipment_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  message,
  shipment 
});

export default RootReducer;