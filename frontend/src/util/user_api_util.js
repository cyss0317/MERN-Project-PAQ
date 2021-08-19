import axios from 'axios';

export const updateSettings = (data) => (
  axios.patch(`/api/users/${data.id}/settings`, data)
)

export const fetchUser = userId => (
  axios.get(`/${userId}`)
)