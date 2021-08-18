import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import message from './message_reducer'; 
import contact from './contact_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  message,
  contact,
  
});

export default RootReducer;