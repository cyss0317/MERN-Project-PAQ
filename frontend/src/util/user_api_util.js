import axios from 'axios';

export const updateUser = (user) => (
  axios.patch(`/api/users/${user._id}/settings`, user)
)

export const fetchUser = userId => (
  axios.get(`/api/users/${userId}`)
) 

export const fetchBusinessOwners = () => (
  axios.get('/api/users/businessOwners')
)