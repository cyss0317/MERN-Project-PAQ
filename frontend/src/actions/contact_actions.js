import * as APIUtilContact from '../util/contact_api_util';

export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
export const RECEIVE_EMAIL_ERRORS = 'RECEIVE_EMAIL_ERRORS'; 

export const receiveEmail = (email) => ({
  type: RECEIVE_EMAIL,
  email
});

export const receiveErrors = (error) => ({
  type: RECEIVE_EMAIL_ERRORS,
  error
})

export const sendEmail = (email) => dispatch => APIUtilContact.sendEmail(email)
  .then(
    email => dispatch(receiveEmail(email)),
    err => dispatch(receiveErrors(err.response.data))

  )