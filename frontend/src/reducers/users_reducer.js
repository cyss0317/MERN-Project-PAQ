import {
  RECEIVE_USER,
  RECEIVE_BUSINESS_OWNERS
} from '../actions/users_actions'; 

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
     
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user._id]: action.user })
    case  RECEIVE_BUSINESS_OWNERS:
      return action.businessOwers 
    default: 
      return state; 
  }
}

export default usersReducer; 