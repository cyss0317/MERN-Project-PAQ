import * as APIUtilUsers from '../util/user_api_util';
 

export const UPDATE_USER = 'UPDATE_USER'; 
export const RECEIVE_USER = 'RECEIVE_USER'; 
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR'; 
export const FETCH_USER = 'FETCH_USER';



export const receiveUser = user => ({
  type: RECEIVE_USER, 
  user
})

export const receiveErrors = err => ({
  type: RECEIVE_USER_ERROR,
  err 
})



export const updateUser = (data) => dispatch => APIUtilUsers.updateSettings(data)
  .then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.response.data)) 
  )


export const fetchUser = userId => dispatch => APIUtilUsers.fetchUser(userId)
    .then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.response.data))
    )