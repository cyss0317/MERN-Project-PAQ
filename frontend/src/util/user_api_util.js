import axios from 'axios';

export const updateUser = (user) => (
  axios.patch(`/api/users/${user.id}/settings`, user)
)

export const fetchUser = userId => (
  axios.get(`/api/users/${userId}`)
) 