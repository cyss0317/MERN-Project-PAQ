import {RECEIVE_USER_ERROR, RECEIVE_USER } from '../actions/users_actions'; 

const _nullErrors = []; 

const usersErrorReducer = (state = _nullErrors, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_USER_ERROR:
      return action.errors;
    case RECEIVE_USER:
      return _nullErrors; 
    default:
      return state; 
  }
  
  
}


export default usersErrorReducer; 