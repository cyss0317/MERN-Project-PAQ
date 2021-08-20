import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import MessageErrorsReducer from './message_errors_reducer'; 
import OrdersErrorsReducer from './orders_errors_reducer';
import contactErrorsReducer from './contact_errors_reducer';
import usersErrorReducer from './users_errors_reducer'; 

export default combineReducers({
  session: SessionErrorsReducer,
  messages: MessageErrorsReducer, 
  contact: contactErrorsReducer,
  user: usersErrorReducer, 
  orders: OrdersErrorsReducer
});