import * as APIUtilMessage from '../util/messages_api_util';

export const RECEIVE_MESSAGE = 'RECEIEVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIEVE_MESSAGES';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS'; 

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors 
})

export const sendMessage = message => dispatch => APIUtilMessage.sendMessage(message)
  .then(
    message => dispatch(receiveMessage(message)),
    err => dispatch(receiveErrors(err.response.data))
  )
export const massText = messages => dispatch => APIUtilMessage.massText(messages)
    .then(
      messages => dispatch(receiveMessages(messages)),
      err => dispatch(receiveErrors(err.response.data))
    )