import axios from 'axios';

export const sendMessage = (message) => (
  axios.post('/api/messages/', message)
)

export const massText = (messages) => (
  axios.post('/api/messages/massText', messages)
)