import { 
  RECEIVE_EMAIL
} from '../actions/contact_actions';

const contact = (state = {}, action ) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state); 
  switch (action.type) {
    case RECEIVE_EMAIL:
      return nextState[action.email.id] = action.email
    default:
     return  state;
  }
}

export default contact; 