import * as APIUtilUsers from '../util/user_api_util';
 


export const RECEIVE_USER = 'RECEIVE_USER'; 
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR'; 
export const FETCH_USER = 'FETCH_USER';
export const  RECEIVE_BUSINESS_OWNERS = ' RECEIVE_BUSINESS_OWNERS'; 


export const receiveUser = user => ({
  type: RECEIVE_USER, 
  user
})
export const receiveBusinessOwners = () => ({
  type:  RECEIVE_BUSINESS_OWNERS, 
})

export const receiveErrors = err => ({
  type: RECEIVE_USER_ERROR,
  err 
})

export const updateUser = user =>  dispatch => APIUtilUsers.updateUser(user)
  .then(
    
      user => {
        dispatch(receiveUser(user.data))
      },
    
    error => dispatch(receiveErrors(error))
  )


export const fetchUser = userId => dispatch => APIUtilUsers.fetchUser(userId)
    .then(
      user => dispatch(receiveUser(user.data)),
      err => dispatch(receiveErrors(err.response.data))
    )
    
