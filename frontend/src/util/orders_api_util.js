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

export const updateOrder = order => {
  return axios.patch(`/api/orders/${order.id}`, order)
}

export const deleteOrder = dataId => {
  return axios.delete(`/api/orders/${dataId}`)
}

export const receiveOrdersByShipmentId = shipmentId => {
  return axios.get(`/api/orders/shipment/${shipmentId}`)
}