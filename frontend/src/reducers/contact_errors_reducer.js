import { 
  RECEIVE_EMAIL,
  RECEIVE_EMAIL_ERRORS
} from '../actions/contact_actions';

const _nullErrors = [];

const contactErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EMAIL_ERRORS:
      return action.errors;
    case RECEIVE_EMAIL:
      return _nullErrors;
    default:
      return state;
  }
};

export default contactErrorsReducer;