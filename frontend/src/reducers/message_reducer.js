import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES
} from '../actions/message_actions';

const message = (state = {}, action) =>{
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages; 
    case RECEIVE_MESSAGE:
      nextState[action.message.id] = action.message;
      return nextState; 

    default:
      return state; 
  }
}

export default message; 