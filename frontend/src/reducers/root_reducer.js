import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import message from './message_reducer'; 
import orders from './orders_reducer'
import shipments from './shipment_reducer';
import contact from './contact_reducer'
import users from './users_reducer'; 

const RootReducer = combineReducers({
  session,
  errors,
  message,
  orders,
  shipments, 
  contact,
  users,
  
});

export default RootReducer;