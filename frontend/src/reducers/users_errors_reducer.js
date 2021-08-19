import {RECEIVE_USER_ERROR  } from '../actions/users_actions'; 

const _nullErrors = []; 

const usersErrorReducer = (state = _nullErrors, action) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_USER_ERROR:
      return action.errors 
    default:
      return state; 
  }
  
  
}


export default usersErrorReducer; 