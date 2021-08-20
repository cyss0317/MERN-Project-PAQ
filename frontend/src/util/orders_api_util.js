import axios from 'axios';

export const getUserOrders = customerId => {
  return axios.get(`/api/orders/user/${customerId}`)
};


export const getOrder = id => {
  return axios.get(`/api/orders/${id}`)
}

export const createOrder = data => {
  return axios.post('/api/orders/', data)
}

export const updateOrder = data => {
  return axios.patch(`/api/orders/user/${data.id}`, data)
}

export const deleteOrder = data => {
  return axios.delete(`/api/orders/${data.id}`)
}

export const receiveOrdersByShipmentId = shipmentId => {
  return axios.get(`/api/orders/shipment/${shipmentId}`)
}